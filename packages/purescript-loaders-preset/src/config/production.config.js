module.exports = options => ({
  test: /\.purs$/,
  loader: require.resolve('purs-loader'),
  exclude: [/[/\\\\]node_modules[/\\\\]/],
  query: {
    psc: 'psa',
    src: [options.pursFiles, options.pscPackages],
    pscPackage: true,
    bundle: true,
    watch: false,
  },
});
