import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Components/Jumbotron',
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

export const Jumbotron: Story<JumbotronProps> = () => {
  return <></>;
};

Jumbotron.args = {} as JumbotronProps;

Jumbotron.storyName = 'Jumbotron';
