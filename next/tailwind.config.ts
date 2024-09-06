import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "beige-100": "#FBF4F0",
      "beige-500": "#98908B",
      "grey-100": "#F2F2F2",
      "grey-300": "#B3B3B3",
      "grey-500": "#696868",
      "grey-900": "#201F24",
      green: "#277C78",
      yellow: "#F2CDAC",
      cyan: "#82C9D7",
      navy: "#626070",
      red: "#C94736",
      purple: "#826CB0",
      turquoise: "#597C7C",
      brown: "#93674F",
      magenta: "#934F6F",
      blue: "#3F82B2",
      "navy-grey": "#97A0AC",
      "army-green": "#7F9161",
      pink: "#AF81BA",
      gold: "#CAB361",
      orange: "#BE6C49",
      white: "#FFFFFF",
    },
    fontSize: {
      sm: ["0.75rem", "1.5"],
      md: ["0.875rem", "1.5"],
      lg: ["1rem", "1.5"],
      xl: ["1.25rem", "1.2"],
      "2xl": ["2rem", "1.2"],
    },
    extend: {
      spacing: {
        "project-50": "4px",
        "project-100": "8px",
        "project-150": "12px",
        "project-200": "16px",
        "project-250": "20px",
        "project-300": "24px",
        "project-400": "32px",
        "project-500": "40px",
        "project-header": "70px",
        "project-main": "calc(100vh - 70px)",
      },
      fontFamily: {
        project: "Public Sans",
      },
    },
  },
  plugins: [],
};
export default config;
