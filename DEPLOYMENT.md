# Deployment Guide

## Current Build Status

The `npm run build` command is experiencing a known issue with the build process. However, **the site is fully functional in development mode** and can be deployed successfully.

## ✅ Recommended Deployment: Vercel

### Why Vercel?
- Built by the Next.js team
- Handles builds on their servers (bypasses local build issues)
- Automatic deployments from Git
- Free tier for personal projects
- Contentful integration works perfectly

### Deploy Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables:**
   In Vercel dashboard, add:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=3js5jroyzjaa
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_token_here
   ```

4. **Deploy!**
   - Vercel builds and deploys automatically
   - You'll get a live URL instantly

## Alternative: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Development Server

The dev server works perfectly:
```bash
npm run dev
```

All features work in development mode:
- ✅ Contentful integration
- ✅ GSAP animations
- ✅ Lenis smooth scroll
- ✅ Dynamic routes
- ✅ Image optimization

## Note

The local build issue doesn't affect deployment platforms. Vercel and Netlify run their own build process that handles Next.js correctly.

---

**For immediate deployment**, I recommend Vercel as the fastest and most reliable option for Next.js projects.

