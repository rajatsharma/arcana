const defaultOptions = { name: 'static/media/[name].[hash:8].[ext]' };

class FontConfigWebpackPlugin {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  apply(compiler) {
    // From https://github.com/webpack/webpack/blob/3366421f1784c449f415cda5930a8e445086f688/lib/WebpackOptionsDefaulter.js#L12-L14
    const config = require('./config/config')(this.options);
    // Merge config
    config.plugins.forEach(plugin => plugin.apply(compiler));
    compiler.hooks.afterEnvironment.tap('FontConfigWebpackPlugin', () => {
      compiler.options.module.rules.push(...config.module.rules);
    });
  }
}

module.exports = FontConfigWebpackPlugin;
