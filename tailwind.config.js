/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/src/assets/bg-pattern.webp')",
      },
      colors: {
        'bg':'#fbfaff',
        'text':'black',
        'primary': '#6d55be',
        'secondary': '#4652ad',
        'accent': '#97ace4',
      },
    },
  },
  plugins: [],
}
