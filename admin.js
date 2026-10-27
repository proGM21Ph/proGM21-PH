/* Owner-only admin. Visitors see nothing: the Admin button exists only in a browser
   that holds the owner's GitHub token. Without the token, nobody can save changes. */
(function(){
const K='pgm_admin',g=()=>{try{return JSON.parse(localStorage.getItem(K)||'null')}catch(e){return null}};
function guess(){const h=location.hostname,p=location.pathname.split('/')[1];if(h.endsWith('.github.io'))return h.split('.')[0]+'/'+(p||h)}
const api=(c,path,opt)=>fetch('https://api.github.com/repos/'+c.repo+'/contents/'+path,Object.assign({headers:{Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json'}},opt));
const b64=s=>btoa(unescape(encodeURIComponent(s)));
function toB64(buf){let s='';const u=new Uint8Array(buf);for(let i=0;i<u.length;i+=32768)s+=String.fromCharCode.apply(null,u.subarray(i,i+32768));return btoa(s)}
async function shrink(f){if(!/^image\/(jpeg|png|webp)$/.test(f.type))return f.arrayBuffer().then(b=>({b,name:f.name}));
 const im=await createImageBitmap(f),r=Math.min(1,1600/Math.max(im.width,im.height)),cv=document.createElement('canvas');cv.width=im.width*r;cv.height=im.height*r;cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);
 const bl=await new Promise(r=>cv.toBlob(r,'image/jpeg',.85));return{b:await bl.arrayBuffer(),name:f.name.replace(/\.\w+$/,'')+'.jpg'}}
function start(c){
 admin=true;
 AS={upload:async f=>{const x=await shrink(f),p='images/'+Date.now()+'-'+x.name.replace(/[^\w.-]/g,'_');
  const r=await api(c,p,{method:'PUT',body:JSON.stringify({message:'Upload '+p,content:toB64(x.b)})});if(!r.ok)throw 0;return{url:p}}};
 window.save=async function(){const st=$('#st');st.textContent='Saving...';
  try{const r=await api(c,'site.js'),j=await r.json();if(!r.ok)throw 0;
   const w=await api(c,'site.js',{method:'PUT',body:JSON.stringify({message:'Update site',sha:j.sha,content:b64('const SITE = '+JSON.stringify(D,null,1).replace(/</g,'\\u003c')+';\n')})});
   st.textContent=w.ok?'Saved. Your site updates in 1-2 minutes.':'Could not save. Check your token.'}catch(e){st.textContent='Could not save. Check your token.'}};
 const b=document.createElement('button');b.id='adminbtn';b.className='btn g';b.textContent='Admin';
 b.setAttribute('style','position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:30');
 b.onclick=adm;document.body.appendChild(b);
 const o=document.createElement('button');o.textContent='Log out';o.className='btn sm';o.setAttribute('style','position:fixed;left:14px;bottom:14px;z-index:30;opacity:.6');
 o.onclick=()=>{localStorage.removeItem(K);location.hash='';location.reload()};document.body.appendChild(o);render()}
async function login(){
 const repo=prompt('GitHub repository (owner/name):',guess()||'');if(!repo)return;
 const token=prompt('Paste your GitHub token (only saved in this browser):');if(!token)return;
 const c={repo:repo.trim(),token:token.trim()},r=await api(c,'site.js');
 if(!r.ok){alert('Login failed. Check the repository name and token.');return}
 localStorage.setItem(K,JSON.stringify(c));location.hash='';location.reload()}
const c=g();
if(c)start(c);else if(location.hash==='#admin')login();
addEventListener('hashchange',()=>{if(location.hash==='#admin'&&!g())login()});
})();
