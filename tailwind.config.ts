import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #ffffff, #190000)",
        "overlay-slide":
          "linear-gradient(90deg, #130E08 27.63%, rgba(19, 14, 8, 0) 92.09%)",
        "overlay-slide-right":
          "linear-gradient(-90deg, #130E08 27.63%, rgba(19, 14, 8, 0) 92.09%)",
        "overlay-slide-mobile":
          "linear-gradient(360deg, #130E08 50.63%, rgba(19, 14, 8, 0) 92.09%)",
        "raodmap-gradient":
          "linear-gradient(180deg, #0A0908 20%, rgba(19, 13, 9, 0) 100%)",
        "heading-gradient": "linear-gradient(180deg, #DEC890 0%, #944A00 100%)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      transform: ["responsive"],
      fontFamily: {
        avon: ["var(--font-avon)"],
        cinzel: ["var(--font-cinzel)"],
        geist: ["var(--font-geist-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E2DDD8",
        secondary: "#211811",
        borderColor: "#A7865A",
      },
      dropShadow: {
        custom:
          "0px 2px 10px rgba(14, 30, 37, 1), 0px 2px 20px rgba(14, 30, 37, 1 )",
      },
      screens: {
        xxs: "320px",
        xs: "400px",
        xxl: "1400px",
        dxl: "1900px",
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: (utilities: any) => void;
    }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "text-shadow": "0px 2px 16px 0px #463427",
        },
      });
    }),
  ],
};
export default config;
