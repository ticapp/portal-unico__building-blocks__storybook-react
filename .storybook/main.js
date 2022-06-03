const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y'
  ],
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
        return prop.parent
          ? prop.parent.name !== 'DOMAttributes' && prop.parent.name !== 'HTMLAttributes' && prop.parent.name !== 'AriaAttributes'
          : true;
      }
    }
  },

  webpackFinal: (config) => {
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        // Remove the eslint-webpack-plugin: We already check our code, storybook doesn't need to bother
        // doing it again with potentially different options.
        return !(plugin instanceof EslintWebpackPlugin);
      })
    };
  }
};
