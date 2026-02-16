# Frozen Air - GitHub Pages Deployment Guide

This Next.js app is configured for static export and automatic deployment to GitHub Pages.

## Setup

1. **GitHub Pages Configuration**
   - Go to your repository settings
   - Navigate to Pages
   - Under "Build and deployment", set Source to "GitHub Actions"

2. **Custom Domain**
   - The CNAME file contains: `frozenairmusic.com`
   - Configure your DNS to point to GitHub Pages:
     - Add CNAME record pointing to `<username>.github.io`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

## Deployment

### Automatic Deployment
Push to the `main` branch and GitHub Actions will automatically:
1. Build the Next.js app as static files
2. Export to the `out` directory
3. Deploy to GitHub Pages

### Manual Deployment
```bash
# Build and export static files
npm run build

# The static files will be in the ./out directory
```

## Build Configuration

- **next.config.ts**: Configured for static export with:
  - `output: 'export'` - Generates static HTML/CSS/JS
  - `images.unoptimized: true` - Required for static export
  - `trailingSlash: true` - Better compatibility with static hosting

- **GitHub Actions**: `.github/workflows/deploy.yml`
  - Triggers on push to main branch
  - Builds and deploys automatically
  - Includes .nojekyll and CNAME files in output

## Output Structure

After build, the `out` directory contains:
- Static HTML files
- Optimized CSS and JavaScript
- Public assets
- .nojekyll (disables Jekyll processing)
- CNAME (custom domain configuration)

## Notes

- The original `index.html` file is preserved for reference
- Google Analytics loads only with user consent (GDPR compliant)
- All animations and styles are preserved in the static export
