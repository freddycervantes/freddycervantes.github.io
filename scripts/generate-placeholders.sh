#!/bin/bash

echo "Generating placeholder images..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Install it with: brew install imagemagick"
    exit 1
fi

# Generate placeholder images for projects
mkdir -p assets/images/projects
convert -size 1200x630 xc:#3b82f6 \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Example Project" \
  assets/images/projects/example-project.png

convert -size 1200x630 xc:#10b981 \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Project 2" \
  assets/images/projects/example-project-2.png

convert -size 1200x630 xc:#f59e0b \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Project 3" \
  assets/images/projects/example-project-3.png

# Generate placeholder images for blog
mkdir -p assets/images/blog
convert -size 1200x630 xc:#8b5cf6 \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Jekyll Tutorial" \
  assets/images/blog/jekyll-tutorial.png

convert -size 1200x630 xc:#10b981 \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Tailwind CSS" \
  assets/images/blog/tailwind-responsive.png

convert -size 1200x630 xc:#f59e0b \
  -pointsize 60 -fill white -gravity center \
  -annotate +0+0 "Dev Workflow" \
  assets/images/blog/dev-workflow.png

# Generate default OG image
convert -size 1200x630 gradient:#3b82f6-#8b5cf6 \
  -pointsize 80 -fill white -gravity center \
  -annotate +0-50 "Freddy Cervantes" \
  -pointsize 40 -annotate +0+50 "Software Engineer" \
  assets/images/default-og-image.png

echo "✓ Placeholder images generated successfully!"
echo "Images created in:"
echo "  - assets/images/projects/"
echo "  - assets/images/blog/"
echo "  - assets/images/default-og-image.png"
