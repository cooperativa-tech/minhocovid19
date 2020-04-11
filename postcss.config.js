module.exports = {
  plugins: [
    "postcss-import",
    "postcss-nested",
    "postcss-flexbugs-fixes",
    "postcss-simple-vars",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
