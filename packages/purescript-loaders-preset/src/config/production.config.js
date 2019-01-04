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
        bundle: true,
        context: process.cwd(),
        watch: false,
        output: 'output',
      },
    },
  },
  plugins: [],
});
