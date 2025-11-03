# Deployment Checklist

## Before First Deploy

### Configuration
- [ ] Update `_config.yml` with your details
- [ ] Set correct `url` and `baseurl`
- [ ] Add your email and social links
- [ ] Configure Google Analytics (if using)

### Content
- [ ] Remove all example blog posts
- [ ] Remove all example projects
- [ ] Add your own content
- [ ] Replace placeholder images
- [ ] Add your own favicon
- [ ] Create default OG image

### Customization
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update fonts if desired
- [ ] Modify hero section text
- [ ] Update footer information

### Testing
- [ ] Test locally: `make serve`
- [ ] Check all pages load
- [ ] Verify dark mode works
- [ ] Test mobile responsive
- [ ] Check all links work
- [ ] Validate accessibility
- [ ] Run Lighthouse audit

## GitHub Pages Setup

### Repository Configuration
- [ ] Repository named correctly: `username.github.io`
- [ ] Repository is public
- [ ] GitHub Pages enabled in settings
- [ ] Source set to `gh-pages` branch (auto-created by workflow)

### Domain Setup (Optional)
- [ ] Add CNAME file with custom domain
- [ ] Configure DNS records
- [ ] Enable HTTPS in GitHub settings
- [ ] Test custom domain works

## Post-Deployment

### Verification
- [ ] Site accessible at `https://username.github.io`
- [ ] All pages render correctly
- [ ] Assets load properly
- [ ] No 404 errors
- [ ] HTTPS working
- [ ] Sitemap accessible: `/sitemap.xml`

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify ownership in Search Console
- [ ] Test social media previews
- [ ] Check meta tags in source

### Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Monitor build workflow status
- [ ] Check for broken links periodically

## Regular Maintenance

### Weekly
- [ ] Check for broken links
- [ ] Review analytics (if enabled)
- [ ] Respond to any issues

### Monthly
- [ ] Update dependencies: `bundle update && npm update`
- [ ] Review and update content
- [ ] Check for Jekyll/Tailwind updates

### Quarterly
- [ ] Audit accessibility
- [ ] Run Lighthouse performance check
- [ ] Optimize images if needed
- [ ] Review and update README

## Troubleshooting

### Build Fails
```bash
# Check workflow logs in GitHub Actions
# Locally test with:
make clean
make install
make build
```

### Images Not Loading
- Verify paths start with `/assets/images/`
- Check images are committed to repository
- Ensure images are in correct directory

### Styles Not Applying
- Check Tailwind build completed
- Verify `styles.css` generated in `_site/assets/css/`
- Clear browser cache

### 404 Errors
- Verify `baseurl` in `_config.yml`
- Check file paths are correct
- Ensure GitHub Pages is enabled

## Emergency Rollback

If deployment fails:

```bash
# Revert to previous commit
git revert HEAD
git push origin master

# Or roll back to specific commit
git reset --hard <commit-hash>
git push --force origin master
```

## Support

For issues with this template, [open an issue](https://github.com/freddycervantes/freddycervantes.github.io/issues) on GitHub.
