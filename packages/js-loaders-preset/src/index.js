class JsLoadersPresetWebpackPlugin {
  constructor(options = {}) {
    this.options = Object.assign({}, options);
  }

  apply(compiler) {
    // From https://github.com/webpack/webpack/blob/3366421f1784c449f415cda5930a8e445086f688/lib/WebpackOptionsDefaulter.js#L12-L14
    const isProductionLikeMode =
      this.options.mode !== undefined
        ? this.options.mode === 'production'
        : compiler.options.mode === 'production' || !compiler.options.mode;
    const config = isProductionLikeMode
      ? require('./config/production.config')({
          babelRc: false,
          ...this.options,
          presets: [require.resolve('@lectro/babel-preset-lectro')],
        })
      : require('./config/development.config')({
          ...this.options,
          babelRc: false,
          presets: [require.resolve('@lectro/babel-preset-lectro')],
        });
    // Merge config
    if (config.plugins)
      config.plugins.forEach(plugin => plugin.apply(compiler));
    compiler.hooks.afterEnvironment.tap('JsLoadersPresetWebpackPlugin', () => {
      compiler.options.module.rules.push(...config.module.rules);
    });
  }
}

module.exports = JsLoadersPresetWebpackPlugin;
