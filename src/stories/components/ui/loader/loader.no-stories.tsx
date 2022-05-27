import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../../../../components';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultLoader = Template.bind({});
DefaultLoader.args = {};

export const SpinnerTwoHalfLoader = Template.bind({});
SpinnerTwoHalfLoader.args = {
  type: 'spinner-two-half',
};

export const SpinnerHalfLoader = Template.bind({});
SpinnerHalfLoader.args = {
  type: 'spinner-half',
};

export const DotsLoader = Template.bind({});
DotsLoader.args = {
  type: 'dots',
};
