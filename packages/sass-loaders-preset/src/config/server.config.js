module.exports = _options => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          {
            loader: require.resolve('css-loader/locals'),
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.module\.s?css$/,
        use: [
          {
            loader: require.resolve('css-loader/locals'),
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
});
