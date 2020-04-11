const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  experimental: {
    jsconfigPaths: true,
  },

  serverRuntimeConfig: {
    airtableApiKey: process.env.AIRTABLE_API_KEY,
  },
});
