# Setup Instructions

## Contentful API Keys

You need to set up your Contentful API keys to fetch content for the portfolio.

### Step 1: Get Your API Keys

1. Go to [Contentful](https://app.contentful.com)
2. Log in and select your space: **3js5jroyzjaa**
3. Navigate to **Settings** → **API keys**
4. Click on your existing API key (or create a new one)
5. You'll need:
   - **Space ID**: `3js5jroyzjaa` (already in your JSON)
   - **Content Delivery API - access token**: Copy this token

### Step 2: Create Environment File

Create a file called `.env.local` in the root of your project (same level as package.json):

```bash
# .env.local
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=3js5jroyzjaa
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

Replace `your_access_token_here` with the actual token from Contentful.

### Step 3: Run the Development Server

```bash
npm run dev
```

Your portfolio will be available at [http://localhost:3000](http://localhost:3000)

## Notes

- The `.env.local` file is automatically ignored by git (never commit API keys!)
- You can find your Content Delivery API access token at: https://app.contentful.com/spaces/3js5jroyzjaa/api/keys
- Make sure you're using the **Content Delivery API** token (not the Management API or Preview API token)

## Homepage Images

The homepage uses a special content entry for the collage images. The entry already exists:
- Entry ID: `13hoEm93xY7OH9YtEtDvuF`
- Direct link: https://app.contentful.com/spaces/3js5jroyzjaa/entries/13hoEm93xY7OH9YtEtDvuF
- Just upload 4 images to this entry and publish it

## Troubleshooting

If you see "Loading projects..." but no projects appear:
1. Check that your `.env.local` file exists and has the correct keys
2. Verify your access token is correct
3. Make sure you've published some film projects in Contentful
4. Check the browser console for any API errors

