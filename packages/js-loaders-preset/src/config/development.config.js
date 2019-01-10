module.exports = _options => ({
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: _options.src,
        loader: require.resolve('babel-loader'),
        options: {
          // Don't use Macros
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
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // Don't waste time on Gzipping the cache
          cacheCompression: false,
        },
      },
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
          // Don't waste time on Gzipping the cache
          cacheCompression: false,

          // If an error happens in a package, it's possible to be
          // because it was compiled. Thus, we don't want the browser
          // debugger to show the original code. Instead, the code
          // being evaluated would be much more helpful.
          sourceMaps: false,
        },
      },
    ],
    plugins: [],
  },
});
