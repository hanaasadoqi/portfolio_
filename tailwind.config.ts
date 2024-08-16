import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary10: "var(--primary-100)",
        primary20: "var(--primary-200)",
        primary30: "var(--primary-300)",
        primary40: "var(--primary-400)",
        primary50: "var(--primary-500)",
        primary60: "var(--primary-600)",
        primary70: "var(--primary-700)",
        primary80: "var(--primary-800)",
        primary90: "var(--primary-900)",
        primary95: "var(--primary-950)",
        secondary: "var(--secondary)",
        secondary10: "var(--secondary-100)",
        secondary20: "var(--secondary-200)",
        secondary30: "var(--secondary-300)",
        secondary40: "var(--secondary-400)",
        secondary50: "var(--secondary-500)",
        secondary60: "var(--secondary-600)",
        secondary70: "var(--secondary-700)",
        secondary80: "var(--secondary-800)",
        secondary90: "var(--secondary-900)",
        secondary95: "var(--secondary-950)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, #f1f5f9, #bfdbfe)",
        "about-gradient": "linear-gradient(to bottom, #bfdbfe, #93c5fd)",
        "skills-gradient": "linear-gradient(to bottom, #93c5fd, #d8b4fe)",
        "experience-gradient": "linear-gradient(to bottom, #d8b4fe, #fbcfe8)",
        "projects-gradient": "linear-gradient(to bottom, #fbcfe8, #f1f5f9)",
        "writing-gradeint": "linear-gradient(to bottom, #f1f5f9, #bfdbfe)",
        "education-gradient": "linear-gradient(to bottom, #bfdbfe, #67e8f9)",
        "contact-gradient": "linear-gradient(to bottom, #67e8f9, #06b6de)",
        "hero-gradient-dark": "linear-gradient(to bottom, #0f172a, #1e3a8a)",
        "about-gradient-dark": "linear-gradient(to bottom, #1e3a8a, #4338ca)",
        "skills-gradient-dark": "linear-gradient(to bottom, #4338ca, #e879f9)",
        "experience-gradient-dark":
          "linear-gradient(to bottom, #e879f9, #ec4899)",
        "projects-gradient-dark":
          "linear-gradient(to bottom, #ec4899, #6d28d9)",
        "writing-gradient-dark": "linear-gradient(to bottom, #6d28d9, #0c4a6e)",
        "contact-gradient-dark": "linear-gradient(to bottom, #0891b2, #22d3ee)",
        "education-gradient-dark":
          "linear-gradient(to bottom, #0c4a6e, #0891b2)",
      },
      boxShadow: {
        "inner-lg":
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        primary:
          "0 4px 6px -1px rgba(51, 65, 85, 0.1), 0 2px 4px -1px rgba(51, 65, 85, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
