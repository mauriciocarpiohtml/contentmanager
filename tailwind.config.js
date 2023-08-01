/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(./src/img/bg-content.jpg)",
      }
    },
  },
  plugins: [],
}

