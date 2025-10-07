/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokyo Night Palette
        background: '#1a1b26',
        surface: '#24283b',
        foreground: '#c0caf5',   // renamed from text
        accent: '#7aa2f7',
        subtle: '#565f89',
        warning: '#e0af68',
        success: '#9ece6a',
        error: '#f7768e',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
