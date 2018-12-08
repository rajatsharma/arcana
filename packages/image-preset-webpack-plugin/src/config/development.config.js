module.exports = options => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: options.name,
              publicPath: options.publicPath,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
});
