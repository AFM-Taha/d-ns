import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        40: "40px",
        44: "44px",
        48: "48px",
        52: "52px",
        56: "56px",
        60: "60px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        112: "112px",
        120: "120px",
      },
      colors: {
        green_1: "#62D07A",
        green_2: "#48C546",
        green_3: "#2AAC27",
        green_tr: "#F0FFF3",
        red_1: "#FF6666",
        red_2: "#EB5454",
        red_3: "#C75050",
        red_tr: "#FFF0F0",
        blue_1: "#0B80CC",
        blue_2: "#0072BC",
        blue_3: "#0F6399",
        blue_tr: "#EDF6FF",
        yellow_1: "#FECE71",
        yellow_2: "#FFE366",
        yellow_3: "#CCA252",
        yellow_tr: "#FFF7E3  ",
        white_bg: "#FFFFFF",
        light_gray_bg: "#F4F5F9",
        dark: "#25252E",
        light_1: "#585866",
        light_2: "#81818F",
        light_3: "#B2B2C2",
        white: "#FFFFFF",
        icon_default: "#585866",
        icon_hovered: "#25252E",
        icon_pressed: "#44474A",
        icon_critical: "#EB5454",
        icon_success: "#48C546",
        light_border: "#E4E4EE",
        light_focused: "#E4E4EE",
        dark_action: "#25252E",
        light_action: "#B2B2C2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;