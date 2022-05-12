import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Buttons, ButtonsProps } from '../../../../components/ui';

export default {
  title: 'Components/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

export const BasicButtons: Story<ButtonsProps> = () => {
  const args = {
    className: '',
    children: 'Default',
    iconName: 'ama-arrow-right',
  } as ButtonsProps;

  return <Buttons {...args} />;
};
BasicButtons.storyName = 'Basic Button';

export const ButtonRightIcon: Story<ButtonsProps> = () => {
  const args = {
    className: '',
    children: 'Default',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
  } as ButtonsProps;

  return <Buttons {...args} />;
};
ButtonRightIcon.storyName = 'Button right icon';

export const ButtonLeftIcon: Story<ButtonsProps> = () => {
  const args = {
    className: '',
    children: 'Default',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
  } as ButtonsProps;

  return <Buttons {...args} />;
};
ButtonRightIcon.storyName = 'Button left icon';
