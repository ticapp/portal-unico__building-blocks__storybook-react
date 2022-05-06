import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  HorizontalMenu,
  HorizontalMenuLink,
  HorizontalMenuProps,
} from '../../../../components';

export default {
  title: 'Components/Horizontal Menu',
  component: HorizontalMenu,
} as ComponentMeta<typeof HorizontalMenu>;

export const BasicHorizontalMenu: Story<HorizontalMenuProps> = () => {
  const links: HorizontalMenuLink[] = [
    {
      id: '1',
      active: true,
      label: 'Serviços',
      link: '/services',
    },
    {
      id: '2',
      active: false,
      label: 'Entidades',
      link: '/entities',
    },
    {
      id: '3',
      active: false,
      label: 'Atendimento',
      link: '/attendance',
    },
    {
      id: '4',
      active: false,
      label: 'Notícias',
      link: '/news',
    },
  ];

  return (
    <BrowserRouter>
      <HorizontalMenu links={links} />
    </BrowserRouter>
  );
};
BasicHorizontalMenu.storyName = 'Basic Horizontal Menu';
