module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#FBBF24',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
