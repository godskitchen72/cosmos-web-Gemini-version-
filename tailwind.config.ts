import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          navy: "#071B3A",
          midnight: "#0D2C5A",
          blue: "#00B8FF",
          cyan: "#00D4FF",
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at top center, #0D2C5A 0%, #071B3A 100%)',
        'glow-gradient': 'linear-gradient(180deg, rgba(0,184,255,0.15) 0%, rgba(7,27,58,0) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
