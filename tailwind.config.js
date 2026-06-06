/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07162b",
        navy: "#09213d",
        gold: "#d99a1e",
        amberSoft: "#fff4db",
        pearl: "#f7f8fb",
        steel: "#64748b"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 22, 43, 0.12)",
        glow: "0 18px 45px rgba(217, 154, 30, 0.18)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
