/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        accent: {
          1: "rgb(var(--color-accent1) / <alpha-value>)",
          2: "rgb(var(--color-accent2) / <alpha-value>)",
          3: "rgb(var(--color-accent3) / <alpha-value>)",
          4: "rgb(var(--color-accent4) / <alpha-value>)",
        },
        custombgcolor: "rgb(var(--color-background) / <alpha-value>)",
        customcontentcolor: "rgb(var(--color-content) / <alpha-value>)",
      },
      strokeWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
