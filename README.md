# JB Portfolio - Film Production Design Portfolio

A modern, fast, and lightweight Next.js portfolio site for showcasing film production design work. Built with Next.js 15, TypeScript, Tailwind CSS, GSAP animations, and Contentful CMS.

## Features

- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎨 Beautiful, minimalist design matching production aesthetic
- 🎬 Dynamic content management with Contentful CMS
- ✨ Smooth GSAP animations and scroll effects
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🚀 Fast and lightweight

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Contentful account (free tier available at [contentful.com](https://www.contentful.com))

### Installation

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Set up Contentful API keys:**

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### Finding Your Contentful API Keys

1. Log in to [Contentful](https://app.contentful.com)
2. Select your space (or create a new one)
3. Go to **Settings** → **API keys**
4. Click **Add API key** (or use an existing one)
5. Copy the following:
   - **Space ID**: Found at the top of the API key page
   - **Content Delivery API - access token**: This is your access token

**Your Contentful Space ID:** `3js5jroyzjaa` (from your JSON)

### Content Model

The Film Project content model is already set up in your Contentful space. Each project includes:

- Title, slug, tagline
- Year, synopsis
- Credits (director, DP, production designer, art director, set dresser, etc.)
- Hero image
- Gallery images
- Thumbnail
- Meta description
- Featured order

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
jb-portfolio/
├── app/
│   ├── film/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Individual film project pages
│   │   └── page.tsx          # Film projects listing
│   ├── design/
│   │   └── page.tsx          # Design page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Homepage with featured projects
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Site navigation
│   ├── FilmHero.tsx          # Hero image with GSAP animation
│   └── FilmGallery.tsx       # Image gallery with scroll animations
├── lib/
│   └── contentful.ts         # Contentful API client and queries
└── types/
    └── contentful.ts         # TypeScript types for content models
```

## GSAP Animations

The site includes smooth GSAP animations:

- **Hero images**: Scale and fade-in effect on page load
- **Gallery images**: Staggered scroll-triggered fade-in animations
- Lightweight and performant implementation

## Customization

### Colors

The site uses a warm beige/cream aesthetic. Colors are defined in `app/globals.css`:

- Background: `#E8E2D5`
- Foreground: `#000000`

### Fonts

The site uses the Geist font family for a clean, modern look.

### Navigation

Update navigation links in `components/Navigation.tsx`.

### Contact Information

Update contact details in `app/contact/page.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js (Netlify, AWS, etc.). Make sure to set your environment variables in the platform's settings.

## Performance Tips

- Images are automatically optimized by Next.js Image component
- GSAP animations are loaded dynamically
- Static generation for film project pages
- Contentful CDN for fast asset delivery

## License

Copyright © John B Packer 2026

---

Built with ❤️ using Next.js, Contentful, and GSAP
