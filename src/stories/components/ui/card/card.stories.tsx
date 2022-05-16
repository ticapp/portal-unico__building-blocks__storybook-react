import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Card, CardProps } from '../../../../components/ui';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Cards: Story<CardProps> = () => {
  const args = {
    className: '',
    children: '',
    preTitle: 'CONDUZIR',
    mainTitle: 'Consultar pontos da carta de condução',
    description: 'Número atual de pontos da sua carta de condução',
  } as CardProps;

  return (
    <BrowserRouter>
      <Card {...args}></Card>
    </BrowserRouter>
  );
};
Cards.storyName = 'Cards';
