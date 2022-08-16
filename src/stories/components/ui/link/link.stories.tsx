import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from '../../../../components';

export default {
  title: 'Components/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);

export const BasicReactRouterDomLink = Template.bind({});
BasicReactRouterDomLink.args = {
  link: 'https://www.google.com/xpto',
  isExternal: true,
  target: '_blank',
  children: 'Redirect To Google',
  className: 'bg-neutral-light'
};

BasicReactRouterDomLink.argTypes = {
  linkTheme: {
    options: ['ama-link-brand-green-main', 'ama-link-neutral-white', 'ama-link-brand-yellow-main', 'ama-link-semantic-info'],
    control: { type: 'select' }
  }
};
