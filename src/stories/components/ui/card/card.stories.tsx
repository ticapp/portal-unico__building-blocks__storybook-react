import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Card, CardProps } from '../../../../components/ui';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Cards: Story<{ cardTheme: 'ama-card-light' | 'ama-card-brand-green-main ' | string; stretchedLink: boolean; isLinkLabel: boolean }> = (args) => {
  return (
    <BrowserRouter>
      <Card {...args}></Card>
    </BrowserRouter>
  );
};

Cards.args = {
  className: '',
  children: '',
  preTitle: 'CONDUZIR',
  mainTitle: 'Consultar pontos da carta de condução',
  description: 'Número atual de pontos da sua carta de condução',
  contentIcon: 'ama-badge',
  content: '15 pontos',
  link: 'https://www.ama.pt',
  isExternal: false,
  title: 'link para o site AMA',
  linkLabel: 'Default',
  linkIcon: 'ama-arrow-down-right',
  isLinkLabel: true,
} as CardProps;

Cards.argTypes = {
  cardTheme: {
    options: ['ama-card-light', 'ama-card-brand-green-main'],
    control: { type: 'select' },
  },
  stretchedLink: {
    control: { type: 'boolean' },
  },
  isLinkLabel: {
    control: { type: 'boolean' },
  },
};

Cards.storyName = 'Cards';
