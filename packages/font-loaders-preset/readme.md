## Font Loaders Preset

_Plug n Play Font Support Configuration for webpack._

This plugin generates webpack loader configuration for Font file support.

### Usage

- Install plugin `yarn add @arcana/font-loaders-preset`.
- Add to your webpack config with your other plugins.

```javascript
const FontLoaders = require('@arcana/font-loaders-preset');

module.exports = {
  plugins: [new FontLoaders()],
};
```

- Use the same code for both of your configs - `production` and `development`.

- Remove Font Loader configuration if present. The plugin will automatically handles font files with file loader.
