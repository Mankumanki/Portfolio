/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      scale: {
        85: "0.85",
      },
      width: {
        "2xfull": "200%",
        "4xfull": "400%",
        "1.5xfull": "calc(100%/3 + 100%)",
      },
      backgroundColor: {
        charcoal: "#151922",
      },
      keyframes: {
        makeVisible: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideAnim: {
          "0%": { opacity: "0", transform: "translateX(-20%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideAnimDelay: {
          "0%": { opacity: "0", transform: "translateX(-20%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        popAnim: {
          "0%": { opacity: "0", transform: "translateY(40%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        colorFill: {
          "0%": { height: "0rem" },
          "100%": { height: "5rem" },
        },
      },
      animation: {
        show: "makeVisible 1s ease-in",
        slide: "slideAnim 1s ease-in",
        pop: "popAnim 1s ease-in",
        fill: "colorFill 1s alternate-reverse infinite",
      },
    },
  },
  plugins: [],
};
