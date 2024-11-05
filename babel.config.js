module.exports = {
  presets: [
    "@babel/preset-env", // For general JavaScript features
    "@babel/preset-react", // If you're using React
  ],
  plugins: [
    "@babel/plugin-transform-runtime", // Essential for transforming async/await and generator functions
  ],
};
