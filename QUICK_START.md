# Quick Start Guide

## 1. Install Dependencies (Already Done ✓)

```bash
npm install
```

## 2. Set Up Contentful API Keys

Create `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=3js5jroyzjaa
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### Where to Find Your Access Token:

1. Go to: https://app.contentful.com/spaces/3js5jroyzjaa/api/keys
2. Click on your API key
3. Copy the **Content Delivery API - access token**
4. Paste it in your `.env.local` file

## 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## 4. Add Content in Contentful

### Homepage Images (Required)
1. Go to your Contentful space
2. Click **Content** → **Add entry** → **Homepage Images**
3. Upload 4 images for the homepage collage:
   - **Image 1**: Top left image
   - **Image 2**: Top right image  
   - **Image 3**: Bottom left image
   - **Image 4**: Bottom right image
4. Click **Publish**

### Film Projects
1. Click **Add entry** → **Film Project**
2. Fill in the fields:
   - **Title**: Project name (e.g., "The Space Between Two Worlds")
   - **Slug**: URL-friendly name (e.g., "space-between-two-worlds")
   - **Year**: Production year
   - **Hero**: Upload main image
   - **Gallery**: Upload additional images
   - Add credits (director, DP, production designer, etc.)
3. Click **Publish**

## 5. View Your Project

Navigate to:
- Homepage: http://localhost:3000
- Film listing: http://localhost:3000/film
- Your project: http://localhost:3000/film/[your-slug]

## Project Structure

```
app/
  film/[slug]/page.tsx   → Individual film project pages
  film/page.tsx          → All film projects
  page.tsx               → Homepage (featured projects)
  
components/
  Navigation.tsx         → Site navigation
  FilmHero.tsx          → Hero image with GSAP animation
  FilmGallery.tsx       → Image gallery with scroll animations
  
lib/
  contentful.ts         → API functions
  
types/
  contentful.ts         → TypeScript types
```

## Key Features Implemented

✅ Next.js 15 with App Router
✅ TypeScript
✅ Tailwind CSS (beige/cream design)
✅ GSAP animations
✅ Contentful CMS integration
✅ Dynamic routing for film projects
✅ Responsive design
✅ SEO optimization
✅ Image optimization (Next.js Image)

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
4. Deploy!

## Need Help?

- Check SETUP.md for detailed Contentful setup
- Check README.md for full documentation

