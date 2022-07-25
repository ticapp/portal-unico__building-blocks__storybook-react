import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Card, CardProps } from '../../../../components/ui';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

export const Cards: Story<{
  cardTheme: 'ama-card-light' | 'ama-card-brand-green-main ' | string;
  stretchedLink: boolean;
  isLinkLabel: boolean;
  isExternal: boolean;
  cardHasLink: boolean;
  contentClass: 'card-info' | 'card-success' | 'card-alert';
}> = (args) => {
  return (
    <BrowserRouter>
      <Row>
        <Col xs={6} xl={6}>
          <Card {...args} />
        </Col>
      </Row>
    </BrowserRouter>
  );
};

Cards.args = {
  mainTitle: 'Consultar pontos da carta de condução',
  description: 'Número atual de pontos da sua carta de condução',
  contentIcon: 'ama-badge',
  content: '15 pontos',
  link: 'https://www.ama.pt',
  isExternal: true,
  title: 'link para o site AMA',
  linkLabel: 'Ver detalhes',
  linkIcon: 'ama-arrow-down-right',
  isLinkLabel: true,
  cardHasLink: true
} as CardProps;

Cards.argTypes = {
  cardTheme: {
    options: ['ama-card-light', 'ama-card-brand-green-main'],
    control: { type: 'select' }
  },
  stretchedLink: {
    control: { type: 'boolean' }
  },
  isLinkLabel: {
    control: { type: 'boolean' }
  },
  isExternal: {
    control: { type: 'boolean' }
  },
  cardHasLink: {
    control: { type: 'boolean' }
  },
  contentClass: {
    options: ['card-info', 'card-success', 'card-alert'],
    control: { type: 'radio' }
  }
};

Cards.storyName = 'Cards';
