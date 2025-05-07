/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        background: 'rgb(var(--color-background))',
        card: 'rgb(var(--color-card))',
      },
      textColor: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        default: 'rgb(var(--color-text))',
      },
      backgroundColor: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        default: 'rgb(var(--color-background))',
        card: 'rgb(var(--color-card))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
};