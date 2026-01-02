# Build Issue - Temporary Note

## Current Status

The development server (`npm run dev`) works perfectly, but `npm run build` is failing with:

```
TypeError: generate is not a function
```

## What Works ✅

- Development server runs fine
- All pages render correctly
- Contentful integration works
- GSAP animations work
- Lenis smooth scroll works
- All features are functional in dev mode

## The Issue

This appears to be a bug with Next.js 16.1.1 and the `generateMetadata` or `generateStaticParams` functions. I've tried:

- Removing generateStaticParams - still fails
- Removing generateMetadata - still fails
- Disabling ESLint - still fails
- Fresh npm install - still fails
- Clearing .next cache - still fails

## Workaround Options

1. **Use dev mode for now** - Everything works in development
2. **Downgrade Next.js** to 15.x (stable version)
3. **Wait for Next.js 16.1.2** patch
4. **Export as static site** - Add `output: 'export'` to next.config (but loses server features)

## To Deploy

For now, you can deploy using platforms that support the dev server or use Next.js 15.

The site is fully functional in development mode!

