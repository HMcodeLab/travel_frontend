/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'Gorditas': ['Gorditas'],
        'mons': ['Montserrat', 'sans-serif'],
        'outfit': ['Outfit'],
        'pop': ['Poppins','sans-serif'],
        'nu': ['Nunito Sans'],
        'int': ['Inter','sans-serif'],
        'Merri-sans':['Merriweather Sans','sans-serif'],
        'Merri':['Merriweather','serif']
      },
    },
  },
  plugins: [],
};
