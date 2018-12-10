module.exports = options => ({
  module: {
    rules: {
      test: /\.purs$/,
      loader: require.resolve('purs-loader'),
      exclude: [/[/\\\\]node_modules[/\\\\]/],
      query: {
        psc: 'psa',
        src: [options.pursFiles, options.pscPackages],
        pscPackage: true,
        bundle: false,
        watch: true,
      },
    },
  },
  plugins: [],
});
