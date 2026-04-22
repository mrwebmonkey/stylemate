/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe5",
        ink: "#1e1c1a",
        clay: "#bf6f45",
        moss: "#6c7a53",
        mist: "#ece4d7",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Instrument Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(54, 37, 22, 0.12)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(191, 111, 69, 0.22), transparent 44%)",
      },
    },
  },
  plugins: [],
};
