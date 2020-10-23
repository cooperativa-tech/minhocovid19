/* eslint-disable no-param-reassign */
const withOptimizedImages = require("next-optimized-images");
const withPreact = require("next-plugin-preact");

module.exports = withOptimizedImages(withPreact());
