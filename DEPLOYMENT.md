# GitHub Pages Deployment Guide

This guide will help you deploy your Model AI Store application to GitHub Pages.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository
- Node.js and npm installed locally (for testing)

## Setup Steps

### 1. Repository Setup

Make sure your repository is named `model-ai-store-nk-ai` (or update the base path in `vite.config.ts` if different).

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. This will allow the workflow to automatically deploy your site

### 3. Push Your Changes

The deployment is configured to trigger automatically when you push to the `main` or `master` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the "Actions" tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete successfully
4. Your site will be available at: `https://<your-username>.github.io/model-ai-store-nk-ai/`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure the base path in `vite.config.ts` matches your repository name
2. **Build Failures**: Check the Actions tab for detailed error messages
3. **Assets Not Loading**: Verify that all assets are properly referenced with relative paths

### Updating the Base Path

If your repository name is different, update the base path in `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the GitHub Pages settings with your custom domain

## Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the built files locally so you can verify everything works before deploying.
