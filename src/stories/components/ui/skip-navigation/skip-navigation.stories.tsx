import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { SkipNavigation } from '../../../../components';

export default {
  title: 'Components/Skip Navigation',
  component: SkipNavigation
} as ComponentMeta<typeof SkipNavigation>;

const Template: ComponentStory<typeof SkipNavigation> = (args) => (
  <BrowserRouter>
    <SkipNavigation {...args} /> <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <br />.
    <div id="main">
      <Button>This button will focus after skip and first tab</Button>
    </div>
  </BrowserRouter>
);

export const BasicSkipNavigation = Template.bind({});
BasicSkipNavigation.args = {
  ariaLabel: 'Menu de navegação rápida',
  options: [
    {
      content: 'Ir para Conteúdo principal',
      idLink: 'main'
    },
    {
      content: 'Menu de navegação',
      idLink: 'menu'
    }
  ]
};
