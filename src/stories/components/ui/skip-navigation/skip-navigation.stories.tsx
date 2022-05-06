import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkipNavigation } from '../../../../components';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default {
  title: 'Components/Skip Navigation',
  component: SkipNavigation,
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
    <div id='main'>
      <Button>This button will focus after skip and first tab</Button>
    </div>
  </BrowserRouter>
);

export const BasicSkipNavigation = Template.bind({});
BasicSkipNavigation.args = {
  ariaLabel: 'Saltar para conteúdo',
  content: 'Saltar para conteúdo principal da página',
  idLink: 'main',
};
