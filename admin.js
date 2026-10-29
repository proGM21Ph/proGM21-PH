/* ProGM21 owner-only gallery admin. Visitors never see it: it only works with the owner's GitHub token, stored only in the owner's own browser. */
(function(){
const LS='pg21_tok',H=location.hostname,P=location.pathname.split('/')[1]||'',GH=/\.github\.io$/.test(H),
OWN=GH?H.split('.')[0]:'proGM21Ph',REPO=GH&&P?P:'progm21',BR='main',API=`https://api.github.com/repos/${OWN}/${REPO}/contents/`;
let tok=localStorage.getItem(LS),sha=null,items=[],dirty=false,box;
window.PREV=window.PREV||{};
const hd=()=>({Authorization:'Bearer '+tok,Accept:'application/vnd.github+json'});
const b64=s=>btoa(unescape(encodeURIComponent(s)));
const rd=b=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result.split(',')[1]);r.onerror=no;r.readAsDataURL(b)});
const shrink=f=>new Promise(res=>{const i=new Image();i.onload=()=>{const s=Math.min(1,1600/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*s;c.height=i.height*s;c.getContext('2d').drawImage(i,0,0,c.width,c.height);c.toBlob(b=>res(b||f),'image/jpeg',.82)};i.onerror=()=>res(f);i.src=URL.createObjectURL(f)});
async function put(path,content,s,msg){const r=await fetch(API+path,{method:'PUT',headers:hd(),body:JSON.stringify({message:msg,content,branch:BR,sha:s||undefined})}),j=await r.json();if(!r.ok)throw new Error(j.message||r.status);return j.content.sha}
async function check(){const r=await fetch(`https://api.github.com/repos/${OWN}/${REPO}`,{headers:hd()});if(!r.ok)return false;const j=await r.json();return !!(j.permissions&&j.permissions.push)}
async function load(){const r=await fetch(API+'gallery.json?ref='+BR+'&t='+Date.now(),{headers:hd()});if(r.status==200){const j=await r.json();sha=j.sha;items=JSON.parse(decodeURIComponent(escape(atob(j.content.replace(/\n/g,'')))))}else{sha=null;items=JSON.parse(JSON.stringify(D.gallery))}}
const css=document.createElement('style');css.textContent=`#pgB{position:fixed;right:14px;bottom:14px;z-index:9998;background:#12284c;color:#fff;border:0;border-radius:24px;padding:11px 16px;font:600 14px sans-serif;box-shadow:0 2px 10px #0006}
#pgA{position:fixed;inset:0;z-index:9999;background:#000a;display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:12px;font:14px sans-serif}
#pgA .pb{background:#fff;color:#12284c;border-radius:10px;padding:16px;width:100%;max-width:560px}
#pgA input[type=text],#pgA input[type=password]{width:100%;box-sizing:border-box;padding:8px;margin:6px 0;border:1px solid #bbb;border-radius:6px}
#pgA button{padding:9px 12px;margin:4px 4px 4px 0;border:0;border-radius:6px;background:#12284c;color:#fff;font-weight:600}#pgA button.g{background:#e3e7ee;color:#12284c}
#pgA .r{display:flex;gap:6px;align-items:center;border-top:1px solid #e3e7ee;padding:6px 0}#pgA .r img,#pgA .r video{width:56px;height:42px;object-fit:cover;border-radius:4px;flex:none}#pgA textarea{width:100%;box-sizing:border-box;padding:8px;margin:6px 0;border:1px solid #bbb;border-radius:6px;font:14px sans-serif}#pgA label{display:block;font-weight:600;margin-top:8px}#pgA .r{flex-wrap:wrap}#pgA .r input{margin:0;flex:1 1 130px}#pgA select{padding:8px;margin:4px 4px 4px 0;border:1px solid #bbb;border-radius:6px;max-width:100%}`;document.head.appendChild(css);
box=document.createElement('div');box.id='pgA';document.body.appendChild(box);
const msg=t=>{const m=box.querySelector('#pgM');if(m)m.textContent=t};
function loginUI(){box.style.display='flex';box.innerHTML=`<div class="pb"><h3>Owner login</h3><p>Paste your GitHub access token (only you have it).</p><input type="password" id="pgT" placeholder="GitHub token"><button id="pgOk">Log in</button><button class="g" id="pgNo">Cancel</button><p id="pgM"></p></div>`;
box.querySelector('#pgNo').onclick=()=>{box.style.display='none'};
box.querySelector('#pgOk').onclick=async()=>{tok=box.querySelector('#pgT').value.trim();msg('Checking...');try{if(!(await check())){tok=null;return msg('Not accepted. Use a token with Contents read/write access to this repository.')}}catch(e){return msg('Network error.')}localStorage.setItem(LS,tok);start(true)}}
function panel(){box.style.display='flex';box.innerHTML=`<div class="pb"><h3>Gallery admin</h3><button class="g" id="pgTx">Edit text</button><p id="pgM">Add photos or videos, edit captions, reorder or remove. Tap Save to publish.</p><input type="file" id="pgF" accept="image/*,video/*" multiple><input type="text" id="pgC" placeholder="Caption for new items (optional)"><select id="pgG">${GC.map(c=>`<option value="${c[0]}">${c[1]}</option>`).join('')}</select><button id="pgU">Upload and publish</button><div id="pgL"></div><button id="pgS">Save changes</button><button class="g" id="pgCl">Close</button><button class="g" id="pgX">Log out</button></div>`;list();
const q=s=>box.querySelector(s);q('#pgCl').onclick=()=>{box.style.display='none'};
q('#pgX').onclick=()=>{localStorage.removeItem(LS);tok=null;box.style.display='none';const b=$('#pgB');b&&b.remove();admin=false;render()};
q('#pgL').oninput=e=>{if(e.target.dataset.i!=null){items[+e.target.dataset.i].cap=e.target.value;dirty=true}};
q('#pgL').onchange=e=>{if(e.target.dataset.c!=null){items[+e.target.dataset.c].cat=e.target.value;dirty=true}};
q('#pgL').onclick=e=>{const i=+e.target.dataset.i,a=e.target.dataset.a;if(!a)return;if(a=='x'&&confirm('Remove this item from the gallery?'))items.splice(i,1);else if(a=='u'&&i>0)[items[i-1],items[i]]=[items[i],items[i-1]];else if(a=='d'&&i<items.length-1)[items[i+1],items[i]]=[items[i],items[i+1]];dirty=true;list()};
q('#pgS').onclick=()=>save('Update gallery');q('#pgTx').onclick=textView;
q('#pgU').onclick=upload}
async function textView(){box.innerHTML='<div class="pb"><h3>Edit text</h3><p id="pgM">Loading...</p></div>';let cs=null;try{const r=await fetch(API+'content.json?ref='+BR+'&t='+Date.now(),{headers:hd()});if(r.status==200)cs=(await r.json()).sha}catch(e){}
const F=[['h1','Homepage headline'],['hp','Homepage intro text',1],['about','About us text',1],['clients','Our clients (one per line)',1]],K=[['name','Contact person'],['mobile','Telephone'],['viber','Viber'],['email','Email'],['address','Address'],['whatsapp','WhatsApp number'],['facebook','Facebook link'],['messenger','Messenger link']];
box.innerHTML=`<div class="pb"><h3>Edit text</h3><p id="pgM">Change the text, then tap Save text. Visitors see it in about 1 minute.</p>${F.map(f=>`<label>${f[1]}</label>${f[2]?`<textarea id="pgf_${f[0]}" rows="${f[0]=='h1'?2:5}">${esc(D[f[0]])}</textarea>`:`<input type="text" id="pgf_${f[0]}" value="${esc(D[f[0]])}">`}`).join('')}<h4>Contact details</h4>${K.map(k=>`<label>${k[1]}</label><input type="text" id="pgc_${k[0]}" value="${esc(D.contact[k[0]])}">`).join('')}<br><button id="pgSv">Save text</button><button class="g" id="pgBk">Back</button></div>`;
box.querySelector('#pgBk').onclick=panel;
box.querySelector('#pgSv').onclick=async()=>{const v=i=>box.querySelector('#'+i).value,o={contact:{}};F.forEach(f=>o[f[0]]=v('pgf_'+f[0]));K.forEach(k=>o.contact[k[0]]=v('pgc_'+k[0]).trim());msg('Saving...');try{cs=await put('content.json',b64(JSON.stringify(o,null,1)),cs,'Update site text');applyC(o);render();msg('Saved. The live site updates for visitors in about 1 minute.')}catch(e){msg('Save failed: '+e.message)}}}
function list(){const L=box.querySelector('#pgL');L.innerHTML=items.map((g,i)=>`<div class="r">${g.t=='video'?`<video src="${U(g.src)}" muted></video>`:`<img src="${U(g.src)}">`}<input type="text" data-i="${i}" value="${esc(g.cap)}"><select data-c="${i}">${GC.map(c=>`<option value="${c[0]}"${(g.cat||'install')==c[0]?' selected':''}>${c[1]}</option>`).join('')}</select><button class="g" data-a="u" data-i="${i}">&uarr;</button><button class="g" data-a="d" data-i="${i}">&darr;</button><button data-a="x" data-i="${i}">&times;</button></div>`).join('')||'<p>No items yet.</p>'}
async function save(m){msg('Saving...');try{sha=await put('gallery.json',b64(JSON.stringify(items,null,1)),sha,m);dirty=false;D.gallery=items.slice();render();msg('Saved. The live site updates for visitors in about 1 minute.')}catch(e){msg('Save failed: '+e.message)}}
async function upload(){const F=[...box.querySelector('#pgF').files],cap=box.querySelector('#pgC').value.trim(),gc=box.querySelector('#pgG').value;if(!F.length)return msg('Choose a photo or video first.');
for(let n=0;n<F.length;n++){let f=F[n],v=f.type.startsWith('video');if(v&&f.size>60e6){msg(f.name+' is over 60 MB. Please compress it first.');continue}
msg(`Uploading ${n+1} of ${F.length}...`);try{const blob=v?f:await shrink(f),ext=v?(f.name.split('.').pop()||'mp4').toLowerCase().replace(/[^a-z0-9]/g,''):'jpg',path=`images/g-${Date.now()}-${n}.${ext}`;await put(path,await rd(blob),null,'Add '+path);PREV[path]=URL.createObjectURL(blob);items.push({t:v?'video':'img',src:path,cap:cap||f.name.replace(/\.[^.]+$/,''),cat:gc})}catch(e){return msg('Upload failed: '+e.message)}}
list();await save('Add gallery items')}
async function start(open){try{await load()}catch(e){return loginUI()}admin=true;if(!$('#pgB')){const b=document.createElement('button');b.id='pgB';b.textContent='Admin';b.onclick=panel;document.body.appendChild(b)}render();if(open){location.hash='#gallery';panel()}}
if(tok)start(location.hash=='#admin');else if(location.hash=='#admin')loginUI();
addEventListener('hashchange',()=>{if(location.hash=='#admin'){tok?start(true):loginUI()}});
})();
