# 📱 LinkedIn Agent UI

A clean, mobile-friendly React web app that acts as the frontend dashboard for the [LinkedIn Post Agent](https://github.com/sid-chopra/linkedin-agent) backend. Generate, edit, and send LinkedIn post drafts to your inbox — all from your phone or browser.

---

## ✨ Features

- 🎯 Pick from 3 topic themes or go fully random
- 💡 Add an optional hint to guide the AI
- ✨ Generate a LinkedIn post powered by Groq AI + live news context
- 📝 Edit the post directly in the browser before sending
- 🔄 Retry to get a fresh version if you don't like it
- 📧 Send the final draft to your email in one tap
- 📱 Fully mobile-friendly — works great on your phone browser

---

## 🖥️ Preview

```
┌─────────────────────────┐
│  LinkedIn Post Agent 🤖  │
│  Generate your weekly post│
├─────────────────────────┤
│  Choose a Topic          │
│  [🅰️ Angular] [🤖 AI]   │
│  [🧭 Leadership] [🎲 Random]│
├─────────────────────────┤
│  Add a Hint (optional)   │
│  [ type here...        ] │
├─────────────────────────┤
│  [ ✨ Generate Post ]    │
├─────────────────────────┤
│  Your Post — Edit freely │
│  [ post appears here   ] │
│  [🔄 Retry] [📧 Send]   │
└─────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 |
| Styling | SCSS |
| HTTP Client | Axios |
| Deployment | Vercel |
| Backend | [LinkedIn Agent API](https://github.com/sid-chopra/linkedin-agent) |

---

## 📁 Project Structure

```
linkedin-agent-ui/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Main component — all UI logic lives here
│   ├── App.scss       # All styles with SCSS variables
│   └── index.js       # React entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/sid-chopra/linkedin-agent-ui.git
cd linkedin-agent-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Update the API URL

Open `src/App.js` and make sure the `API_URL` points to your deployed backend:

```javascript
const API_URL = 'https://your-railway-backend-url.up.railway.app'
```

### 4. Start the app

```bash
npm start
```

App runs at `http://localhost:3000`

---

## 🌐 Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/sid-chopra/linkedin-agent-ui.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

- Go to [vercel.com](https://vercel.com) and sign up with GitHub
- Click **"Add New Project"**
- Import your `linkedin-agent-ui` repository
- Leave all settings as default — Vercel auto-detects React
- Click **"Deploy"**

Your app will be live at:
```
https://linkedin-agent-ui.vercel.app
```

### 3. Update CORS on backend

Once deployed, update your Railway backend's `server.js` to allow your Vercel URL:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://linkedin-agent-ui.vercel.app'
  ]
}))
```

---

## 🔗 Related

- 🔧 **Backend repo** — [linkedin-agent](https://github.com/sid-chopra/linkedin-agent-ui) — Node.js + Express + Groq + Resend + Railway

---

## 🗺️ Roadmap

- [x] Topic picker
- [x] Hint input
- [x] AI post generation
- [x] Editable post area
- [x] Retry functionality
- [x] Send to email
- [ ] Post history screen
- [ ] Settings screen — change email, topics
- [ ] Reply to email → auto-post to LinkedIn

---

## 👤 Author

**Sidhant**
Technical Lead — Frontend & AI Tooling)

---
