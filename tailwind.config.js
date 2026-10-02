/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Derived from R789 app icon: deep navy + vivid sky blue
        primary: '#061428',
        accent: '#38BDF8',
      },
    },
  },
  plugins: [],
}
