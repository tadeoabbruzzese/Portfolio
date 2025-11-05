// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0D17",     // Fondo principal
          card: "#11131F",     // Fondo secundario / cards
          text: "#FFFFFF",     // Texto principal
          muted: "#A0AEC0",    // Texto secundario
          violet: "#7B5CFF",   // Acento 1
          cyan: "#00E0FF",     // Acento 2
          pink: "#FF2E63",     // Acento 3
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7B5CFF, #00E0FF)",
      },
    },
  },
  plugins: [],
};
