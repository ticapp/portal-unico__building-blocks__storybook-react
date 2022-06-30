import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { PageError } from '../../../../components';

export default {
  title: 'Pages/Error',
  component: PageError
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <BrowserRouter>
    <PageError {...args} />
  </BrowserRouter>
);

export const GenericPageError = Template.bind({});

export const CustomPageError = Template.bind({});
CustomPageError.args = {
  title: 'Sample Error',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien arcu, venenatis vel lobortis aliquet, facilisis eget neque. Aliquam a pharetra tellus. Suspendisse at turpis vitae lectus malesuada aliquet. Donec pretium tincidunt diam.',
  link: {
    url: '#',
    isExternal: false,
    label: 'Back',
    target: '_self'
  }
};
