/* eslint-disable no-param-reassign */
const withOptimizedImages = require("next-optimized-images");
const withPrefresh = require("@prefresh/next");

const config = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },

  webpack(webpackConfig, { dev, isServer }) {
    const splitChunks =
      webpackConfig.optimization && webpackConfig.optimization.splitChunks;

    if (splitChunks) {
      const { cacheGroups } = splitChunks;
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;

      if (cacheGroups.framework) {
        cacheGroups.preact = { ...cacheGroups.framework, test: preactModules };
        cacheGroups.commons.name = "framework";
      } else {
        cacheGroups.preact = {
          name: "commons",
          chunks: "all",
          test: preactModules,
        };
      }
    }

    // Install webpack aliases:
    const aliases =
      webpackConfig.resolve.alias || (webpackConfig.resolve.alias = {});

    aliases.react = "preact/compat";
    aliases["react-dom"] = "preact/compat";

    // inject Preact DevTools
    if (dev && !isServer) {
      const { entry } = webpackConfig;

      webpackConfig.entry = () =>
        entry().then((entries) => {
          entries["main.js"] = ["preact/debug"].concat(
            entries["main.js"] || []
          );

          return entries;
        });
    }

    return webpackConfig;
  },
};

module.exports = withOptimizedImages(withPrefresh(config));
