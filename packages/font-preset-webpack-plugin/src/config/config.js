module.exports = options => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: options.name,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
});
