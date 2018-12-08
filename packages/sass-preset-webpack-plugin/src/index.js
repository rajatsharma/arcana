const defaultOptions = {};
class SassSupportWebpackPlugin {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  apply(compiler) {
    const isProductionLikeMode =
      this.options.mode !== undefined
        ? this.options.mode === 'production'
        : compiler.options.mode === 'production' || !compiler.options.mode;
    // Use compiler.options.output configuration also for css
    // Replace folder names called js and extends called js to css
    // E.g. 'js/x.[id].js' -> 'css/x.[id].css'
    const filename = compiler.options.output.filename.replace(
      /(^|\/|\\|\.)js($|\/|\\)/g,
      '$1css$2',
    );
    const chunkFilename = compiler.options.output.chunkFilename.replace(
      /(^|\/|\\|\.)js($|\/|\\)/g,
      '$1css$2',
    );

    // eslint-disable-next-line no-nested-ternary
    const config = !this.options.server
      ? isProductionLikeMode
        ? require('./config/production.config')(
            Object.assign(
              { filename, chunkFilename, mode: 'production' },
              this.options,
            ),
          )
        : require('./config/development.config')(
            Object.assign(
              { filename, chunkFilename, mode: 'development' },
              this.options,
            ),
          )
      : require('./config/server.config')(
          Object.assign(
            {
              filename,
              chunkFilename,
              mode: isProductionLikeMode ? 'production' : 'development',
            },
            this.options,
          ),
        );
    // Merge config
    compiler.options.plugins.push(...config.plugins);
    compiler.hooks.afterEnvironment.tap('SassSupportWebpackPlugin', () => {
      compiler.options.module.rules.push(...config.module.rules);
    });
  }
}

module.exports = SassSupportWebpackPlugin;
