---
title: "Personal Portfolio Website"
description: "This very website! Built with Jekyll and Tailwind CSS"
date: 2024-11-02
tags: [Jekyll, Tailwind CSS, GitHub Pages]
image: /assets/images/projects/example-project-3.png
github_url: https://github.com/freddycervantes/freddycervantes.github.io
featured: true
---

## Meta: Building This Portfolio

This portfolio site itself is a project worth showcasing! It demonstrates modern web development practices and automated deployment.

## Technology Stack

- **Jekyll**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Pages**: Free hosting and deployment
- **GitHub Actions**: Automated build and deploy

## Key Features

- 🎨 Dark/Light theme with localStorage persistence
- 📝 Markdown-based content management
- 🚀 Automatic deployment on push
- ♿ Accessible and semantic HTML
- 📱 Fully responsive design
- ⚡ Optimized performance

## Architecture

The site uses Jekyll's collection system for projects and posts:

```yaml
collections:
  projects:
    output: true
    permalink: /projects/:name/
```

## Automation with Makefile

I created a Makefile for common tasks:

```makefile
install:
\tbundle install && npm install

serve:
\tmake build & jekyll serve --livereload

build:
\tnpm run build:css && jekyll build
```

## Lessons Learned

- Jekyll's Liquid templating is powerful but requires learning
- Tailwind + Jekyll integration needs careful configuration
- GitHub Actions make deployment effortless
- Dark mode requires thoughtful color token design

## Open Source

This entire site is open source! Feel free to use it as a template for your own portfolio.
