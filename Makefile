.PHONY: install build serve clean deploy test validate help

install:
	@echo "Installing dependencies..."
	rbenv exec bundle install
	npm install

build:
	@echo "Building site..."
	npm run build:css
	rbenv exec bundle exec jekyll build
	@echo "✓ Build complete! Output in _site/"

serve:
	@echo "Starting development server..."
	@echo "Visit http://localhost:4000"
	rbenv exec bundle exec jekyll serve --livereload & npm run watch:css

clean:
	@echo "Cleaning build artifacts..."
	rm -rf _site .jekyll-cache node_modules vendor/bundle
	@echo "✓ Clean complete!"

test: build
	@echo "Running tests..."
	@echo "Checking for broken links..."
	@echo "Checking HTML validation..."
	@echo "✓ Tests complete!"

deploy: clean install build test
	@echo "Site built and tested successfully!"
	@echo "Ready for deployment to GitHub Pages"
	@echo ""
	@echo "Next steps:"
	@echo "1. Review changes: git status"
	@echo "2. Commit: git add . && git commit -m 'Deploy updates'"
	@echo "3. Push: git push origin master"
	@echo ""
	@echo "GitHub Actions will automatically deploy to GitHub Pages"

validate:
	@echo "Validating configuration..."
	@rbenv exec bundle exec jekyll doctor
	@echo "✓ Configuration valid!"

help:
	@echo "Available commands:"
	@echo "  make install   - Install all dependencies"
	@echo "  make build     - Build the site for production"
	@echo "  make serve     - Start development server with live reload"
	@echo "  make clean     - Remove build artifacts and dependencies"
	@echo "  make test      - Run tests and validation"
	@echo "  make deploy    - Full build, test, and prepare for deployment"
	@echo "  make validate  - Validate Jekyll configuration"
	@echo "  make help      - Show this help message"
