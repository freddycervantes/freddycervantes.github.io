# Personal Portfolio Website

A modern, responsive portfolio website built with Jekyll and Tailwind CSS, deployed on GitHub Pages.

## Features

- **Dark/Light Theme**: Toggle between themes with persistence
- **Blog System**: Write posts in Markdown with automatic listing
- **Project Showcase**: Highlight your work with filterable project cards
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast & Optimized**: Static site generation for blazing speed
- **Accessible**: Semantic HTML and ARIA labels
- **Auto-Deploy**: Push to master and GitHub Pages handles the rest

## Quick Start

### Prerequisites

- Ruby 3.x
- Node.js 18+
- Bundler
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/freddycervantes/freddycervantes.github.io.git
cd freddycervantes.github.io

# Install dependencies
make install
```

### Development

```bash
# Start development server with live reload
make serve

# Visit http://localhost:4000
```

### Build

```bash
# Build for production
make build

# Output in _site/
```

## Adding Content

### Create a New Blog Post

1. Create a file in `_posts/` with format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-11-02
tags: [tag1, tag2]
excerpt: "A brief description"
image: /assets/images/blog/your-image.png
---

Your content here in Markdown...
```

2. Add image to `assets/images/blog/`
3. Push to GitHub - it appears automatically!

### Create a New Project

1. Create a file in `_projects/` with format: `project-name.md`

```markdown
---
title: "Project Name"
description: "Brief description"
date: 2024-11-02
tags: [React, Node.js]
image: /assets/images/projects/your-project.png
link: https://demo.com
github_url: https://github.com/username/repo
featured: true  # Shows on homepage
---

Project details in Markdown...
```

2. Add image to `assets/images/projects/`
3. Push to GitHub - it appears automatically!

## Configuration

Edit `_config.yml` to customize:

```yaml
title: Your Name
email: your-email@example.com
description: Your tagline
github_username: your-username
linkedin_username: your-username
```

## Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
│   ├── default.html
│   ├── post.html
│   └── project.html
├── _includes/            # Reusable components
│   ├── header.html
│   ├── footer.html
│   ├── project-card.html
│   └── post-card.html
├── _posts/               # Blog posts (YYYY-MM-DD-title.md)
├── _projects/            # Projects (project-name.md)
├── assets/
│   ├── css/
│   │   └── main.css     # Tailwind entry point
│   ├── js/
│   │   ├── theme-toggle.js
│   │   └── mobile-nav.js
│   └── images/
│       ├── projects/
│       └── blog/
├── index.html            # Homepage
├── blog.html             # Blog listing
├── projects.html         # Projects listing
├── Makefile              # Task automation
├── package.json          # Node dependencies
├── Gemfile               # Ruby dependencies
└── tailwind.config.js    # Tailwind configuration
```

## Makefile Commands

```bash
make install    # Install all dependencies
make serve      # Start development server
make build      # Build for production
make clean      # Remove build artifacts
make deploy     # Build and verify ready for deployment
make help       # Show all commands
```

## Customization

### Colors

Edit `tailwind.config.js` to change theme colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#your-color',
        dark: '#your-color',
      },
    },
  },
}
```

### Fonts

Change fonts in `_layouts/default.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## Deployment

This site automatically deploys to GitHub Pages when you push to the `master` branch.

### Manual Deployment

```bash
make deploy
git push origin master
```

Your site will be live at `https://username.github.io`

## Troubleshooting

### Build Fails

```bash
make clean
make install
make build
```

### Styles Not Updating

Tailwind caches aggressively. Clear cache:

```bash
rm -rf .jekyll-cache _site
make build
```

### Images Not Showing

- Verify images are in `assets/images/`
- Check paths start with `/assets/images/`
- Ensure images are pushed to GitHub

## Generating Placeholder Images

If you want to generate placeholder images for development:

```bash
# Install ImageMagick first
brew install imagemagick

# Run the placeholder generation script
./scripts/generate-placeholders.sh
```

This will create placeholder images for all projects and blog posts.

## License

MIT License - feel free to use this as a template for your own site!

## Credits

Built with:
- [Jekyll](https://jekyllrb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

---

Made by [Freddy Cervantes](https://github.com/freddycervantes)
