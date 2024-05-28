// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "path": require.resolve("path-browserify"),
        "util": require.resolve("util/"),
        "fs": require.resolve("browserify-fs"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),  // Add this line
      };
      return webpackConfig;
    },
  },
};
