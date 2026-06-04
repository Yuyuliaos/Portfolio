/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        cyber: {
          background: "#050A07",
          surface: "#0A100D",
          surfaceHover: "#111A15",
          border: "#1A2620",
          green: "#10B981",
          greenLight: "#34D399",
          pink: "#F43F5E",
          pinkLight: "#FB7185",
          text: "#E2E8F0",
          muted: "#94A3B8"
        }
      }
    }
  },
  plugins: []
};