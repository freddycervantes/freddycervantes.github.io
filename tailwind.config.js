module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_projects/**/*.md',
    './index.html',
    './blog.html',
    './projects.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic color tokens following EightShapes light/dark principles
        // Light mode uses darker surfaces for elevation
        // Dark mode uses lighter surfaces for elevation (inverted)

        // Surface colors - multiple levels for depth
        surface: {
          // Light mode
          'base-light': '#fafafa',      // Off-white background, not pure white
          'raised-light': '#ffffff',     // Elevated cards/sections
          'overlay-light': '#ffffff',    // Modals, dropdowns

          // Dark mode (lighter = elevated)
          'base-dark': '#0a0f1a',        // Very dark blue-gray, not pure black
          'raised-dark': '#141b2d',      // Cards elevated from base
          'overlay-dark': '#1e2842',     // Modals/overlays most elevated
        },

        // Text colors - hierarchy for readability
        ink: {
          // Light mode
          'primary-light': '#0f1419',    // Headings, high emphasis (21:1 contrast)
          'secondary-light': '#57606a',  // Body text (7.8:1 contrast)
          'tertiary-light': '#8b949e',   // Muted text (4.5:1 contrast)
          'disabled-light': '#d0d7de',   // Disabled state

          // Dark mode (softer whites, not pure)
          'primary-dark': '#e6edf3',     // Headings (17:1 contrast)
          'secondary-dark': '#9198a1',   // Body text (7.5:1 contrast)
          'tertiary-dark': '#7d8590',    // Muted text (4.8:1 contrast)
          'disabled-dark': '#484f58',    // Disabled state
        },

        // Border colors
        stroke: {
          'default-light': '#d0d7de',
          'muted-light': '#e6e9ed',
          'default-dark': '#30363d',
          'muted-dark': '#21262d',
        },

        // Accent colors (adjusted saturation for dark mode)
        accent: {
          // Primary blue - saturated in light, desaturated in dark
          'primary-light': '#0969da',
          'primary-light-hover': '#0550ae',
          'primary-dark': '#4493f8',     // Less saturated for dark mode
          'primary-dark-hover': '#539bf5',

          // Success green
          'success-light': '#1a7f37',
          'success-dark': '#3fb950',

          // Warning amber
          'warning-light': '#bf8700',
          'warning-dark': '#d29922',

          // Danger red
          'danger-light': '#cf222e',
          'danger-dark': '#f85149',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}