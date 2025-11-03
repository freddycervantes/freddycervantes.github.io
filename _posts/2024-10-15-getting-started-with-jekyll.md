---
layout: post
title: "Getting Started with Jekyll and GitHub Pages"
date: 2024-10-15
author: Freddy Cervantes
tags: [Jekyll, GitHub Pages, Tutorial]
excerpt: "Learn how to build and deploy a static site with Jekyll and GitHub Pages in just a few minutes."
image: /assets/images/blog/jekyll-tutorial.png
---

## Introduction

Jekyll is a powerful static site generator that transforms plain text into static websites and blogs. Combined with GitHub Pages, it provides a free and easy way to host your site.

## Why Jekyll?

There are several reasons why Jekyll is an excellent choice for building websites:

- **Simple and fast**: No databases or complex setups
- **Markdown support**: Write content in simple markdown
- **GitHub Pages integration**: Free hosting with automatic deployment
- **Customizable**: Full control over your site's design and functionality

## Getting Started

First, make sure you have Ruby installed on your system. Then install Jekyll:

```bash
gem install jekyll bundler
```

Create a new site:

```bash
jekyll new my-awesome-site
cd my-awesome-site
bundle exec jekyll serve
```

Your site is now running at `http://localhost:4000`!

## Project Structure

Here's what a typical Jekyll project looks like:

```
my-site/
├── _config.yml
├── _posts/
│   └── 2024-10-15-my-first-post.md
├── _layouts/
│   └── default.html
├── _includes/
│   └── header.html
└── index.html
```

## Adding Content

Creating a new blog post is as simple as adding a markdown file to the `_posts` directory:

```markdown
---
layout: post
title: "My First Post"
date: 2024-10-15
---

Hello, world! This is my first post.
```

## Images in Posts

You can easily add images to your posts:

![Jekyll Logo](/assets/images/blog/jekyll-logo.png)
*The Jekyll logo - simple and elegant*

## Code Highlighting

Jekyll supports syntax highlighting out of the box:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

## Deploying to GitHub Pages

1. Create a repository named `username.github.io`
2. Push your Jekyll site to the `master` branch
3. Your site will be live at `https://username.github.io`

## Conclusion

Jekyll and GitHub Pages provide an excellent platform for building fast, secure, and maintainable websites. Whether you're creating a blog, portfolio, or documentation site, Jekyll has you covered.

**Next Steps:**
- Customize your theme
- Add custom collections
- Explore Jekyll plugins
- Set up a custom domain

Happy coding!
