# 🚀 Deployment Guide - Seniority Calculator

## 📋 Overview
This guide provides multiple deployment options for sharing your Seniority Calculator with colleagues.

## 🌐 Deployment Options

### 1. GitHub Pages (Recommended for sharing with colleagues)

**Pros:**
- ✅ Free hosting
- ✅ Easy to share with colleagues
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Version control integration

**Steps:**
1. **Create GitHub Repository:**
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/seniority-calculator.git
   ```

2. **Deploy:**
   ```bash
   ./deploy-github-pages.sh
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select "main" branch and "/docs" folder
   - Click Save

4. **Share URL:**
   ```
   https://YOUR_USERNAME.github.io/seniority-calculator/
   ```

### 2. Netlify (Alternative - Very Easy)

**Pros:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Continuous deployment

**Steps:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=docs
```

### 3. Vercel (Alternative - Great for React apps)

**Pros:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Great React support

**Steps:**
```bash
npm install -g vercel
vercel --prod
```

### 4. Firebase Hosting (Google Cloud)

**Pros:**
- ✅ Free tier available
- ✅ Global CDN
- ✅ Custom domain
- ✅ Analytics integration

**Steps:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy --only hosting
```

### 5. Surge.sh (Simple Static Hosting)

**Pros:**
- ✅ Very simple
- ✅ Free tier
- ✅ Custom domain support

**Steps:**
```bash
npm install -g surge
surge docs
```

### 6. Local Network Sharing

**For sharing on local network:**
```bash
npm run build
npx serve docs -p 3000 --listen 0.0.0.0
```

Then share: `http://YOUR_IP:3000`

## 🔧 Configuration Files

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // For GitHub Pages
    assetsDir: 'assets',
    sourcemap: false
  },
  base: process.env.NODE_ENV === 'production' ? '/seniority-calculator/' : '/'
})
```

## 📱 Sharing with Colleagues

### Email Template:
```
Subject: Seniority Calculator - Ready to Use

Hi team,

I've created a Seniority Calculator tool to help assess developer skills across different stacks.

🌐 Access it here: [YOUR_DEPLOYED_URL]

📋 Features:
- Frontend, Backend, Mobile, and DevOps skill assessment
- Real-time ranking calculation
- Comprehensive skill descriptions
- Progress tracking

🎯 How to use:
1. Select your stack (Frontend/Backend/Mobile/DevOps)
2. Rate your skills from 1 (Trainee) to 5 (Expert)
3. Get your seniority ranking instantly

Let me know if you have any questions or feedback!

Best regards,
[Your Name]
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Build fails:**
   ```bash
   npm install
   npm run build
   ```

2. **GitHub Pages not updating:**
   - Check if docs folder exists
   - Verify GitHub Pages settings
   - Wait 5-10 minutes for deployment

3. **Assets not loading:**
   - Check vite.config.js base path
   - Verify repository name in base path

## 📊 Performance Tips

- Build is optimized for production
- Assets are minified and compressed
- Total bundle size: ~230KB (gzipped: ~64KB)
- Fast loading times on all devices

## 🔒 Security

- No sensitive data stored
- All calculations done client-side
- No backend required
- HTTPS enabled on all platforms
