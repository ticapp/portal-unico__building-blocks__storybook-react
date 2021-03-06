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
  link: 'https://www.google.com',
  isExternal: true,
  target: '_blank',
  children: 'Redirect To Google'
};
