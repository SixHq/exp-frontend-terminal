
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const svgToDataUri = require("mini-svg-data-uri"); // If not installed: npm install -D mini-svg-data-uri
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config = {
  darkMode: ["class"], // Enable dark mode using class strategy
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "", // No prefix for utility classes
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Shadcn UI Base Colors (Keep these)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Shadcn UI Component Colors (Keep these)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Portfolio Custom Colors
        'primary-dark-blue': 'hsl(var(--primary-dark-blue))',
        'primary-teal': 'hsl(var(--primary-teal))',
        'primary-light-gray': 'hsl(var(--primary-light-gray))',
        'accent-purple': 'hsl(var(--accent-purple))',
        'accent-coral': 'hsl(var(--accent-coral))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans], // Set Poppins as default sans-serif
        poppins: ["Poppins", "sans-serif"], // Add a specific utility class if needed
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
         // Magic UI Keyframes (Add others as needed from Magic UI components)
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shine": {
            "from": { backgroundPosition: "200% 0" },
            "to": { backgroundPosition: "-200% 0" }
        },
         grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "marquee-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
         "shimmer": {
            "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
            },
            "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
            },
        },
        "gradient": {
            to: {
            backgroundPosition: "var(--bg-size) 0",
            },
        },
         "spin-around": {
            "0%": {
              transform: "translateZ(0) rotate(0)",
            },
            "15%, 35%": {
              transform: "translateZ(0) rotate(90deg)",
            },
            "65%, 85%": {
              transform: "translateZ(0) rotate(270deg)",
            },
            "100%": {
              transform: "translateZ(0) rotate(360deg)",
            },
          },
        slide: {
            to: {
              transform: "translate(calc(100cqw - 100%), 0)",
            },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
         "accordion-down": "accordion-down 0.2s ease-out",
         "accordion-up": "accordion-up 0.2s ease-out",
        // Magic UI Animations (Add others as needed)
        "meteor-effect": "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) linear infinite",
        "shine": "shine 8s ease-in-out infinite",
        "grid": "grid 15s linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "marquee-horizontal": "marquee-horizontal var(--duration) linear infinite",
        "shimmer": "shimmer var(--shimmer-duration) infinite linear",
        "gradient": "gradient 8s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
    },
  },
    plugins: [
        require("tailwindcss-animate"),
         addVariablesForColors, // Magic UI Plugin for colors
         function ({ matchUtilities, theme }: any) {
            matchUtilities(
            {
                "bg-grid": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
                }),
                "bg-grid-small": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
                }),
                "bg-dot": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                )}")`,
                }),
            },
            { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
            );
        },
    ],
} satisfies Config;

// Magic UI Plugin function (needed for AnimatedBeam, etc.)
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;