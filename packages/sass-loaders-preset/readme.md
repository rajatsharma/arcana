## Sass Loaders Preset

_Plug n Play Configuration for webpack for loading Sass/Css Files._

This plugin generates webpack loader configuration for supporting Sass/Css with Postcss.

### Usage

- Install plugin `yarn add @arcana/sass-loaders-preset`.
- Add to your webpack config with your other plugins.

```javascript
const SassLoaders = require('@arcana/sass-loaders-preset');

module.exports = {
  plugins: [new SassLoaders()],
};
```

- Use the same code for both of your configs - `production` and `development`.

- Remove Image Loader configuration if present. The plugin will automatically handles sass/css files with css/style loader and sass loader with MiniCssExtractPlugin at production.

- For SSR add option `{ server: true}` to load css server side.

```javascript
const SassLoaders = require('@arcana/sass-loaders-preset');

module.exports = {
  plugins: [new SassLoaders({ server: true })],
};
```
