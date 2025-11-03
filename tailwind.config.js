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
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        bg: {
          light: '#ffffff',
          'light-secondary': '#f3f4f6',
          dark: '#0f172a',
          'dark-secondary': '#1e293b',
        },
        text: {
          light: '#1f2937',
          'light-secondary': '#6b7280',
          dark: '#f1f5f9',
          'dark-secondary': '#cbd5e1',
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