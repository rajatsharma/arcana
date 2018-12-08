const [fs, path] = [require('fs'), require('path')];

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const defaultOptions = {
  pursFiles: resolveApp('src/**/*.purs'),
  pscPackages: resolveApp('.psc-package/purescript-*/src/**/*.purs'),
};

class PursLoadersPreset {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  apply(compiler) {
    // From https://github.com/webpack/webpack/blob/3366421f1784c449f415cda5930a8e445086f688/lib/WebpackOptionsDefaulter.js#L12-L14
    const isProductionLikeMode =
      this.options.mode !== undefined
        ? this.options.mode === 'production'
        : compiler.options.mode === 'production' || !compiler.options.mode;
    const config = isProductionLikeMode
      ? require('./config/production.config')(this.options)
      : require('./config/development.config')(this.options);
    // Merge config
    config.plugins.forEach(plugin => plugin.apply(compiler));
    compiler.hooks.afterEnvironment.tap('PursLoadersPreset', () => {
      compiler.options.module.rules.push(...config.module.rules);
    });
  }
}

module.exports = PursLoadersPreset;
