module.exports = options => ({
  module: {
    rules: {
      test: /\.purs$/,
      loader: require.resolve('purs-loader'),
      exclude: [/[/\\\\]node_modules[/\\\\]/],
      query: {
        psc: 'psa',
        src: console.log(options) || [options.pursFiles, options.pscPackages],
        pscPackage: true,
        context: process.cwd(),
        watch: true,
        bundle: false,
        output: 'output',
      },
    },
  },
  plugins: [],
});
