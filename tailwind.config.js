/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientX 5s ease infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      fontFamily: {
        vibes: ['"Great Vibes"', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        DancingScript: ['Dancing Script', 'cursive'],
        apricots: ['Apricots', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        // poppins: ['Poppins', 'sans-serif'],
        // parisienne: ['Parisienne', 'cursive'],
      },
    },
  },
  plugins: [],
  
};

