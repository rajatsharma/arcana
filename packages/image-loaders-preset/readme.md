## Image Loaders Preset

_Plug n Play Configuration for webpack for loading Image Files._

This plugin generates webpack loader configuration for supporting Image files.

### Usage

- Install plugin `yarn add @arcana/image-loaders-preset`.
- Add to your webpack config with your other plugins.

```javascript
const ImageLoaders = require('@arcana/image-loaders-preset');

module.exports = {
  plugins: [new ImageLoaders()],
};
```

- Use the same code for both of your configs - `production` and `development`.

- Remove Image Loader configuration if present. The plugin will automatically handles image files with file loader and url loader.
