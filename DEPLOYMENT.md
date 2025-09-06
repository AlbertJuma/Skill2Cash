# GitHub Pages Deployment Setup

This repository now includes a GitHub Actions workflow to automatically build and deploy the Vite + React + Tailwind project to GitHub Pages.

## What's Included

The workflow file `.github/workflows/deploy.yml` includes:

- **Build job**: Installs dependencies, runs linting, and builds the project
- **Deploy job**: Deploys the built assets to GitHub Pages (only on main branch pushes)
- **Triggers**: Runs on pushes to main branch, pull requests, and manual dispatch

## Setup Instructions

To complete the GitHub Pages setup, follow these steps:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Merge this PR** to the main branch

3. **Automatic deployment**: Once merged, the workflow will automatically:
   - Build your project
   - Deploy it to GitHub Pages
   - Make it available at `https://yourusername.github.io/Skill2Cash/`

## Workflow Features

- ✅ Builds on Node.js 20 with npm caching
- ✅ Runs ESLint for code quality
- ✅ Only deploys on main branch (not on PRs)
- ✅ Uses official GitHub Actions for security
- ✅ Proper permissions for GitHub Pages deployment
- ✅ Concurrency control to prevent conflicts

## Project Configuration

The project is already configured for GitHub Pages deployment:
- `vite.config.js` includes the correct base path: `/Skill2Cash/`
- Build output goes to `./dist` directory
- All static assets are properly handled

## Manual Deployment

You can also trigger the deployment manually:
- Go to Actions → "Build and Deploy to GitHub Pages"
- Click "Run workflow"