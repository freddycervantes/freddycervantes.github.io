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
        // Inspired by forward.digital's minimalist dark theme
        surface: {
          // Light mode
          'base-light': '#fafafa',      // Off-white background, not pure white
          'raised-light': '#ffffff',     // Elevated cards/sections
          'overlay-light': '#ffffff',    // Modals, dropdowns

          // Dark mode (forward.digital inspired - very dark, clean)
          'base-dark': '#111113',        // forward.digital's primary dark (#111113)
          'raised-dark': '#1a1a1d',      // Slightly lighter for elevation
          'overlay-dark': '#242428',     // Most elevated surfaces
        },

        // Text colors - hierarchy for readability
        ink: {
          // Light mode
          'primary-light': '#0f1419',    // Headings, high emphasis (21:1 contrast)
          'secondary-light': '#57606a',  // Body text (7.8:1 contrast)
          'tertiary-light': '#8b949e',   // Muted text (4.5:1 contrast)
          'disabled-light': '#d0d7de',   // Disabled state

          // Dark mode (forward.digital inspired - clean whites and grays)
          'primary-dark': '#ffffff',     // Pure white for headings (clean, high contrast)
          'secondary-dark': '#a0a0a0',   // Medium gray for body text
          'tertiary-dark': '#707070',    // Muted gray for less important text
          'disabled-dark': '#4a4a4a',    // Darker gray for disabled state
        },

        // Border colors
        stroke: {
          'default-light': '#d0d7de',
          'muted-light': '#e6e9ed',
          'default-dark': '#2a2a2d',     // Subtle borders in dark mode
          'muted-dark': '#1f1f22',       // Very subtle borders
        },

        // Accent colors (adjusted saturation for dark mode)
        accent: {
          // Primary blue - saturated in light, desaturated in dark
          'primary-light': '#0969da',
          'primary-light-hover': '#0550ae',
          'primary-dark': '#60a5fa',     // Clean blue accent for dark mode
          'primary-dark-hover': '#3b82f6',

          // Success green
          'success-light': '#1a7f37',
          'success-dark': '#3fb950',

          // Warning amber
          'warning-light': '#bf8700',
          'warning-dark': '#fbbf24',

          // Danger red
          'danger-light': '#cf222e',
          'danger-dark': '#f87171',
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