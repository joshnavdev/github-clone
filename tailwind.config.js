/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono-sans': ['Mono Sans'],
      },
      fontSize: {
        '8xl': ['80px', '80px'],
      },
      colors: {
        purple: '#783ec6',
        blue: '#0969da',
        green: '#7ee787',
        gray: '#161b22',
        'gray-dark': '#0d1117',
        'gray-light': '#30363d',
        'gray-1': '#656d76',
        'gray-muted': '#7d8590',
        'gray-subtle': '#6e7681',
        'btn-shadow-hover':
          '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
      },
    },
  },
  plugins: [],
};
