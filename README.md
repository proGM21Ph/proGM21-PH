# ProGM21 PH Corporation – Website

Files:
- `index.html` – the page design (you do not need to touch this)
- `site-data.js` – ALL text, contact details, prices, products, clients and photo links (edit this)
- `images/` – product photos and gallery photos
- `files/` – the PDF catalogue

## 1. Upload to GitHub (first time)
1. Sign in at github.com. Tap **+** > **New repository**. Name it `progm21`, choose **Public**, tap **Create repository**.
2. Tap **uploading an existing file**.
3. Unzip this package first. Upload the files INSIDE the folder (not the zip, not the outer folder): `index.html`, `site-data.js`, `README.md`, the `images` folder and the `files` folder.
4. Tap **Commit changes**.
`index.html` must be at the top of the repository, not inside another folder.

## 2. Make it a website
1. In the repository: **Settings** > **Pages**.
2. Under **Branch** choose `main` and `/ (root)`, tap **Save**.
3. After 1–2 minutes your website link appears: `https://YOUR-USERNAME.github.io/progm21/`

## 3. Change text, contact details, prices, clients
1. Open `site-data.js` > pencil icon (Edit).
2. Change the text between the quotes. Keep all commas and quotes.
   - Contact: look for `"contact"` at the top.
   - Clients: the `"clients"` list, one company per line.
3. Tap **Commit changes**. The website updates in about a minute.

## 4. Add a photo
1. Open the `images` folder > **Add file** > **Upload files** > choose the photo > **Commit changes**.
   Use a short name without spaces, e.g. `project-cebu.jpg`. Keep photos under 2 MB.
2. Open `site-data.js` > pencil icon.
   - Product photo: set `"img": "images/project-cebu.jpg"` on that product.
   - Gallery: add a line inside `"gallery": [ ... ]`:
     `{"t": "img", "src": "images/project-cebu.jpg", "cap": "Project in Cebu"},`
     For a video, upload the `.mp4` the same way and use `"t": "video"`.
     Add `"cat": "meeting"`, `"install"`, `"arrival"` or `"delivery"` to choose the gallery group (Client Meetings, Installation, Newly Arrived Products in Warehouse, Delivery).
3. **Commit changes.**

## 5. Add a new product
In `site-data.js`, copy one whole product block `{ ... }` inside `"products": [ ... ]`, paste it after a comma, and change the text and `"img"`.

Only you (the repository owner) can change the files. Visitors can only view the website.

## 6. Owner-only gallery admin (add/edit photos and videos)
Only you can use it. Visitors see no admin button, and nothing can be changed without your private GitHub token.
1. On GitHub: profile photo > **Settings** > **Developer settings** > **Personal access tokens** > **Fine-grained tokens** > **Generate new token**.
2. Repository access: **Only select repositories** > `progm21`. Permissions: **Contents: Read and write**. Generate and copy the token. Never share it.
3. Open `https://YOUR-USERNAME.github.io/progm21/#admin`, paste the token, tap **Log in**. (Your browser remembers it; an **Admin** button then appears only on your device.)
4. Tap **Admin** to pick a group (Client Meetings, Installation, Newly Arrived Products in Warehouse or Delivery) and upload photos/videos (photos are auto-resized); you can also move an item to another group, edit captions, reorder, or remove. Uploads publish by themselves; for caption/order/remove changes tap **Save changes**. Visitors see updates in about 1 minute.
Videos: keep each under 60 MB (MP4). Log out from the Admin panel on shared phones.
In the Admin panel, tap **Edit text** to change the homepage headline and intro, About us, the clients list and all contact details, then tap **Save text**.
Files used: `admin.js` (the admin), `gallery.json` and `content.json` (both created automatically on first save). Upload `admin.js` with the other files.
