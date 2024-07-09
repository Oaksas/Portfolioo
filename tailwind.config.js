const colors = require('tailwindcss/colors')
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Orbitron',
            secondary: 'Rajdhani',
            tertiary: 'Aldrich',
            logo: "'Josefin Sans', sans-serif",
        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#0a0a0a',
                accent: '#B809C3',
            },
            backgroundImage: {
                site: "url('./assets/site-bg.jpg')",
                about: "url('./assets/banner/typing.svg')",
                services: "url('./assets/Programming-bro.svg')",
            },
              animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
        },
    },
    plugins: [addVariablesForColors],
  }

  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }
