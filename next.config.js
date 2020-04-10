const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  experimental: {
    jsconfigPaths: true,
  },
});
