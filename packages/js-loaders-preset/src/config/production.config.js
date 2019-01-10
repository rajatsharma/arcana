module.exports = options => ({
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: options.src,

        loader: require.resolve('babel-loader'),
        options: {
          // customize: require.resolve(
          //   'babel-preset-react-app/webpack-overrides'
          // ),

          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                  },
                },
              },
            ],
          ],
          cacheDirectory: true,
          // Save disk space when time isn't as important
          cacheCompression: true,
          compact: true,
        },
      },
      // Process any JS outside of the app with Babel.
      // Unlike the application JS, we only compile the standard ES features.
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [
            [
              require.resolve('babel-preset-react-app/dependencies'),
              { helpers: true },
            ],
          ],
          cacheDirectory: true,
          // Save disk space when time isn't as important
          cacheCompression: true,

          // If an error happens in a package, it's possible to be
          // because it was compiled. Thus, we don't want the browser
          // debugger to show the original code. Instead, the code
          // being evaluated would be much more helpful.
          sourceMaps: false,
        },
      },
    ],
  },
});
