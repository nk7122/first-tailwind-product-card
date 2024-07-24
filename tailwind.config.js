/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary color (background)
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",

        //Neutral
        "very-dark-blue": "hsl(212, 36%, 37%",
        "dark-grayish-blue": "hsl(228, 12%, 48%",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      fontSize: {
        "14px": "14px",
      },
    },
  },
  plugins: [],
};
