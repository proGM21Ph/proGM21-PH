# ProGM21 – Euroform Website

A simple website (no installation needed). Files:

- `index.html` – the page design (you normally do not touch this)
- `site-data.js` – ALL text, contact details, prices and photo links (edit this)
- `images/` – photos and videos
- `files/` – the PDF catalogue

## 1. Upload to GitHub (first time)
1. Go to github.com and sign in (create a free account if needed).
2. Click **+** (top right) > **New repository**. Name it `euroform`, choose **Public**, click **Create repository**.
3. Click **uploading an existing file**.
4. Unzip this package on your phone/computer, then drag in **everything inside the folder** (`index.html`, `site-data.js`, `images`, `files`). `index.html` must be at the top level, not inside another folder.
5. Click **Commit changes**.

## 2. Publish it as a website
1. In the repository: **Settings** > **Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, click **Save**.
3. Wait 1–2 minutes. Your link will be shown: `https://YOUR-USERNAME.github.io/euroform/`

## 3. Edit text, contact or prices
1. Open `site-data.js` in the repository, click the **pencil icon** (Edit).
2. Change the text between the quotes. Keep all commas and quotes.
3. Click **Commit changes**. The website updates in about a minute.

## 4. Add or change a photo
1. Open the `images` folder > **Add file** > **Upload files** > choose your photo > **Commit changes**.
   Tip: use short names without spaces, e.g. `site-cebu.jpg`, and keep photos under 2 MB.
2. Open `site-data.js` > pencil icon.
   - **Product photo:** find the product and set `"img": "images/site-cebu.jpg"`
   - **Gallery:** add a line inside `"gallery": [ ... ]`, for example:
     `{"t": "img", "src": "images/site-cebu.jpg", "cap": "Project in Cebu"},`
     (use `"t": "video"` for .mp4 videos)
3. **Commit changes.**

## 5. Only you can edit
Keep the repository owner as only you and do not add collaborators. On GitHub, only the owner (and people you invite) can change files; visitors can only view the site.
