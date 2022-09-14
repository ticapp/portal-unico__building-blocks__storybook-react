import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StatusBar } from '../../../../components/ui/status-bar';

export default {
  title: 'Components/StatusBar',
  component: StatusBar
} as ComponentMeta<typeof StatusBar>;

export const BasicStatusBar: ComponentStory<typeof StatusBar> = (args) => {
  return (
    <BrowserRouter>
      <StatusBar {...args} />
    </BrowserRouter>
  );
};

BasicStatusBar.storyName = 'StatusBar Example';

BasicStatusBar.args = {
  url: 'https://www.google.com',
  title: 'Pontos da carta de condução',
  subtitle: '15 pontos',
  icon: 'ama-badge',
  backButtonText: 'Voltar ao início'
};

export const SimpleStatusBar: ComponentStory<typeof StatusBar> = (args) => {
  return (
    <BrowserRouter>
      <StatusBar {...args} />
    </BrowserRouter>
  );
};

SimpleStatusBar.storyName = 'SimpleBar Example';

SimpleStatusBar.args = {
  url: 'https://www.google.com',
  backButtonText: 'Voltar ao início'
};
