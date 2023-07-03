/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(233, 26%, 24%)",
        limegreen: "hsl(136, 65%, 51%)",
        brightcyan: "hsl(136, 65%, 51%)",
        grayishblue: "hsl(233, 8%, 62%)",
        lightgrayblue: "hsl(220, 16%, 96%)",
        verylightgrey: "hsl(0, 0%, 98%)",
        gradient1: "hsla(192, 70%, 51%, 1)",
        gradient2: "hsla(136, 65%, 51%, 1)"
      },
      fontFamily:{
        public: ['Public Sans']
      },
      gradientColorStops:{
        'custom-gradient': 'linear-gradient(270deg, hsla(192, 70%, 51%, 1) 0%, hsla(136, 65%, 51%, 1) 80%)',
      }
    },
  },
  plugins: [],
}

