// babel config

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["Chrome >= 65", "Firefox >= 55", "Safari >= 11"],
          node: "current",
        },
        // modules: false
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [],
};
