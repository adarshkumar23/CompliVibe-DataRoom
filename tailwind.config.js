/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#5f6b7a",
        line: "#dce5f0",
      },
      boxShadow: {
        glass: "0 22px 70px -36px rgba(26, 54, 93, 0.26)",
        lift: "0 20px 44px -24px rgba(37, 99, 235, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
