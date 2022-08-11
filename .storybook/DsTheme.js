import { create } from '@storybook/theming';
import logo from '../src/assets/img/logo_ticapp.png';

export default create({
  base: 'light',
  brandTitle: 'AMA Design System',
  brandUrl: 'https://github.com/ticapp/portal-unico__building-blocks__storybook-react',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: '"Lato Regular", sans-serif'
});
