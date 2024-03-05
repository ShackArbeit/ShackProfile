import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        githubColor: '#001c55', 
        workColor:'#edf2f8'
      },
      backgroundImage: {
          'profile': "url('../public/Image/profile.jpg')",
      },
    },
  },
  plugins: [],
  darkMode:'class',
};
export default config;
