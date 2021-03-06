import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentMeta, Story } from '@storybook/react';
import { BreadCrumb, BreadCrumbProps } from '../../../../components';

export default {
  title: 'Components/Breadcrumb',
  component: BreadCrumb
} as ComponentMeta<typeof BreadCrumb>;

export const BasicBreadCrumb: Story<BreadCrumbProps> = () => {
  const args = {
    navAriaLabel: 'Breadcrumb',
    ariaHasPopUp: true,
    linkAriaLabel: 'page',
    buttonAriaLabel: 'Open Breadcrumb',
    breadCrumbMobileTitle: 'Você está aqui:',
    breadcrumbs: [
      {
        name: 'Início',
        url: '/home'
      },
      {
        name: 'Infrações',
        url: '/violations'
      },
      {
        name: 'Histórico de infrações',
        url: '/historico-infracoes'
      }
    ]
  } as BreadCrumbProps;

  return (
    <BrowserRouter>
      <BreadCrumb {...args} />
    </BrowserRouter>
  );
};
BasicBreadCrumb.storyName = 'Basic Breadcrumb';
