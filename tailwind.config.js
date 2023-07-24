
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    width: {
      'card': '30.8125rem',
      'card-info': '33.06rem'
    },
    height: {
      'card': '41.625rem',
      'card-info': '38.9375rem'
    },
    backgroundColor: {
      'card': '#222831',
      'minicard': '#272E37'
    },
    keyframes: {
      'slide': {
        '0%': {'transform': 'translateX(-100%)', 'opacity': 0},
        '100%': {'transform': 'translate(0)', 'opacity': 1},
      },
      'slide-down': {
        '0%': {'transform': 'translateY(-100%)', 'opacity': 0},
        '100%': {'transform': 'translateY(0)', 'opacity': 1},
      }
    },
    animation: {
      slide: 'slide 1s ease-in-out',
      'slide-down': 'slide-down 1s ease-in-out',
    }
  },
};
export const plugins = [];
