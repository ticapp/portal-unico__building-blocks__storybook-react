const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = {
  stories: ['../src/**/welcome.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../src/assets/img'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y'
  ],
  features: {
    previewMdx2: true
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (!prop.parent) {
          return true;
        }

        return (
          !/node_modules/.test(prop.parent.fileName) &&
          prop.parent.name !== 'DOMAttributes' &&
          prop.parent.name !== 'HTMLAttributes' &&
          prop.parent.name !== 'AriaAttributes'
        );
      }
    }
  },

  webpackFinal: (config) => {
    config.plugins.push(new SpeedMeasurePlugin());
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'ESLintWebpackPlugin');
    return config;
  }
};
