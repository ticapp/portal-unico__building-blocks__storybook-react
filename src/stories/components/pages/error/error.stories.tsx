/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ButtonProps, ErrorPage } from '../../../../components';

export default {
  title: 'Pages/Error',
  component: ErrorPage
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <BrowserRouter>
    <ErrorPage {...args} />
  </BrowserRouter>
);

export const BasicErrorPage = Template.bind({});
BasicErrorPage.args = {
  title: 'Sem sinal',
  subtitle: 'Erro 404, página não encontrada.',
  link: {
    title: 'Regressar à página inicial',
    url: '/'
  }
};

export const DeadEndErrorPage = Template.bind({});
DeadEndErrorPage.args = {
  title: 'Sem sinal',
  subtitle: 'Generic error. Try again...'
};

export const MultipleActionsErrorPage = Template.bind({});
MultipleActionsErrorPage.args = {
  title: 'Sem sinal',
  subtitle: 'Generic error. Try again...',
  buttons: [
    {
      className: 'shadow-none',
      children: 'Action #1',
      variant: 'outline-brand-green-main',
      size: 'lg',
      onClick: () => {
        console.log('Action #1 pressed');
      }
    },
    {
      className: 'shadow-none',
      children: 'Action #2',
      variant: 'outline-brand-green-main',
      size: 'lg',
      onClick: () => {
        console.log('Action #2 pressed');
      }
    },
    {
      className: 'shadow-none',
      children: 'Action #3',
      variant: 'outline-brand-green-main',
      size: 'lg',
      onClick: () => {
        console.log('Action #3 pressed');
      }
    }
  ] as ButtonProps[]
};
