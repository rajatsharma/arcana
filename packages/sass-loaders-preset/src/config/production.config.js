const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const safeParser = require('postcss-safe-parser');
const path = require('path');

module.exports = options => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // The css file will be probably be placed in a sub directory.
              // To prevent invalid ressource urls this additional sub folder
              // has to be taken into account for the relative path calculation
              publicPath: (
                path.relative(path.dirname(options.filename), '.') + path.sep
              ).replace(/^[\\\/]$/, ''), // eslint-disable-line
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: loader => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  // flexbox: "no-2009" will add prefixes only for final and IE versions of specification.
                  // @see https://github.com/postcss/autoprefixer#disabling
                  flexbox: 'no-2009',
                }),
                require('iconfont-webpack-plugin')({
                  resolve: loader.resolve,
                }),
              ],
              sourceMap: true,
            },
          },
          // {
          //   loader: require.resolve('resolve-url-loader'),
          // },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.module\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // The css file will be probably be placed in a sub directory.
              // To prevent invalid ressource urls this additional sub folder
              // has to be taken into account for the relative path calculation
              publicPath: (
                path.relative(path.dirname(options.filename), '.') + path.sep
              ).replace(/^[\\\/]$/, ''), // eslint-disable-line
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: loader => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  // flexbox: "no-2009" will add prefixes only for final and IE versions of specification.
                  // @see https://github.com/postcss/autoprefixer#disabling
                  flexbox: 'no-2009',
                }),
                require('iconfont-webpack-plugin')({
                  resolve: loader.resolve,
                }),
              ],
              sourceMap: true,
            },
          },
          // {
          //   loader: require.resolve('resolve-url-loader'),
          // },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Extract css to a custom file
    new MiniCssExtractPlugin({
      filename: options.filename,
      chunkFilename: options.chunkFilename,
    }),
    // Minify css - but use only safe css-nano transformations
    // https://github.com/facebook/create-react-app/pull/4706
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: { parser: safeParser, safe: true },
    }),
  ],
});
