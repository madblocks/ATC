/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old': ['"Old Standard TT"', 'Arial', 'sans-serif' ],
        'poppins': ['Poppins', 'Arial', 'sans-serif' ],
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
