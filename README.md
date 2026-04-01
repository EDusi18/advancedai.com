# Advanced AI — advancedai.com

AI news, tools, and insights for business leaders. Built with [Astro](https://astro.build/).

## Quick Start

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to ./dist
npm run preview  # Preview the built site locally
```

## Adding New Posts

Create a markdown file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description for SEO and previews'
pubDate: 'Apr 01 2026'
category: 'Industry News'
tags: ['AI', 'news']
heroImage: '../../assets/blog-placeholder-1.jpg'
affiliateLinks:
  - name: 'Tool Name'
    url: 'https://example.com/affiliate-link'
    description: 'Brief description of the tool'
---

Your content here in markdown...
```

### Required frontmatter fields:
- `title` — Post title
- `description` — SEO description (shown in cards and meta tags)
- `pubDate` — Publication date
- `category` — Must be one of: Tools & Products, Industry News, Robotics & Hardware, AI in Education, How People Use AI, OpenClaw & Open Source

### Optional fields:
- `tags` — Array of tags for the post
- `heroImage` — Reference to an image in `src/assets/`
- `updatedDate` — Date of last update
- `affiliateLinks` — Array of affiliate links shown in a box at the end of the post

## Categories

Posts are organized into these categories:
- **Tools & Products** — Reviews and comparisons of AI tools
- **Industry News** — Breaking developments in AI
- **Robotics & Hardware** — Physical AI and robotics
- **AI in Education** — AI in learning and training
- **How People Use AI** — Real-world AI adoption stories
- **OpenClaw & Open Source** — Open source AI ecosystem

## Deployment

### GitHub Pages (automatic)

Push to `main` and the GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and deploy automatically.

### Cloudflare Pages

1. Connect your GitHub repo in the Cloudflare Pages dashboard
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Manual

```bash
npm run build
# Upload contents of ./dist to any static host
```

## Monetization Strategy

### Affiliate Links
- Tool reviews include affiliate links in the post frontmatter
- Affiliate links are displayed in a "Featured Tools" box at the end of relevant posts
- Every page includes an affiliate disclosure link in the footer
- Full disclosure page at `/affiliate-disclosure`

### Advertising
- Google AdSense placeholder is in the base layout (`BaseHead.astro`)
- Ad placement slot is in the blog post layout (`BlogPost.astro`)
- Uncomment the AdSense script tag and replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID

### Newsletter
- Newsletter signup component appears on blog posts, homepage, and dedicated `/newsletter` page
- Form action is a placeholder — connect to Beehiiv, ConvertKit, Mailchimp, etc.

## AI Auto-Publishing

This site is designed to support automated content publishing via AI agents:

1. **Content generation** — An AI agent writes posts as markdown files with proper frontmatter
2. **Git commit** — The agent commits the new file to `main` (or opens a PR for review)
3. **Auto deploy** — GitHub Actions builds and deploys the updated site
4. **Scheduling** — Use cron-triggered GitHub Actions or an external scheduler to run the agent on a regular cadence

### Example agent workflow:
```
1. Agent researches trending AI topics
2. Agent writes a markdown blog post with frontmatter
3. Agent commits to the repo
4. GitHub Actions deploys automatically
5. Newsletter sends weekly digest (via Beehiiv API)
```

## Project Structure

```
src/
├── assets/          # Images
├── components/      # Reusable Astro components
│   ├── BaseHead.astro     # <head> with meta, OG, JSON-LD, AdSense
│   ├── Header.astro       # Site navigation with mobile menu
│   ├── Footer.astro       # Footer with links and categories
│   ├── Newsletter.astro   # Newsletter signup form
│   └── ThemeToggle.astro  # Dark/light mode toggle
├── content/
│   └── blog/        # Markdown blog posts
├── layouts/
│   └── BlogPost.astro     # Blog post layout with affiliate box
├── pages/
│   ├── index.astro              # Homepage
│   ├── about.astro              # About page
│   ├── newsletter.astro         # Newsletter page
│   ├── affiliate-disclosure.astro
│   ├── blog/
│   │   ├── index.astro          # Blog listing
│   │   └── [...slug].astro      # Individual post
│   ├── categories/
│   │   ├── index.astro          # Categories listing
│   │   └── [...slug].astro      # Category filter
│   └── rss.xml.js               # RSS feed
├── styles/
│   └── global.css   # Global styles with dark/light mode
└── consts.ts        # Site constants and categories
```

## SEO Features

- Open Graph and Twitter Card meta tags on every page
- JSON-LD structured data (WebSite + BlogPosting schemas)
- Canonical URLs
- Auto-generated sitemap via `@astrojs/sitemap`
- RSS feed at `/rss.xml`
- `robots.txt` with sitemap reference
