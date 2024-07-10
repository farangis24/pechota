/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
        screens: {
          lg: "1240px",
        },
      },
      theme: {
        extend: {
          fontFamily: {
            serif: ["Times New Roman", "Times, serif"],
          },
        },
      },
    },
  },
  plugins: [],
};
