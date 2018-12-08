module.exports = _options => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 512,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
});
