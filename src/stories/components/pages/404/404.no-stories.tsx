import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Page404 } from '../../../../components';

export default {
  title: 'Pages/404',
  component: Page404,
} as ComponentMeta<typeof Page404>;

const Template: ComponentStory<typeof Page404> = (args) => (
  <BrowserRouter>
    <Page404 {...args} />
  </BrowserRouter>
);

export const BasicPage404 = Template.bind({});
BasicPage404.args = {
  pageInfo: {
    title: 'Página 404',
    description: 'A página que procura não se encontra disponível',
    button: { link: '/', isExternal: false, target: '_self', label: 'Voltar à pagina inicial' },
  },
};
