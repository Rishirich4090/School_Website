export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Add browser support without aggressive grid features
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead'
      ],
      // Disable grid autoplacement to avoid warnings
      grid: false
    },
  },
};
