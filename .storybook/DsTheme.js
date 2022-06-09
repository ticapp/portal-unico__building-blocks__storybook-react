import { create } from '@storybook/theming';
import logo from '../src/assets/img/logo_ticapp.png'

export default create({
  base: 'light',
  brandTitle: 'AMA Design System',
  brandUrl: 'https://ticappgit.northeurope.cloudapp.azure.com/portal-unico/building-blocks/storybook-react',
  brandImage: logo,
  brandTarget: '_self',

  fontBase: '"Lato", sans-serif',
});