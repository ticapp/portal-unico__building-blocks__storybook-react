import dsTheme from './DsTheme';

import '../src/scss/index.min.css';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: dsTheme
  }
};
