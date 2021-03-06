/* eslint-disable no-console */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HorizontalMenu, HorizontalMenuLink, HorizontalMenuProps, UserAreaOption } from '../../../../components';

export default {
  title: 'Components/Horizontal Menu',
  component: HorizontalMenu
} as ComponentMeta<typeof HorizontalMenu>;

export const BasicHorizontalMenu: Story<HorizontalMenuProps> = () => {
  const links: HorizontalMenuLink[] = [
    {
      id: '1',
      label: 'Serviços',
      link: '/services'
    },
    {
      id: '2',
      label: 'Entidades',
      link: '/entities'
    },
    {
      id: '3',
      label: 'Atendimento',
      link: '/attendance'
    },
    {
      id: '4',
      label: 'Notícias',
      link: '/news'
    }
  ];

  const options = [
    {
      authenticatedOption: false,
      value: 'login',
      icon: 'ama-login',
      label: 'Entrar no portal'
    },
    {
      authenticatedOption: false,
      value: 'register',
      icon: 'ama-add-user',
      label: 'Criar registo'
    },
    {
      authenticatedOption: true,
      value: 'user-area',
      icon: 'ama-user',
      label: 'Area Reservada'
    },
    {
      authenticatedOption: true,
      value: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão'
    }
  ] as UserAreaOption[];

  const optionChangeHandler = (val: UserAreaOption) => {
    console.log(val);
  };

  return (
    <BrowserRouter>
      <HorizontalMenu username="Area reservada" links={links} options={options} onOptionChange={optionChangeHandler} />
    </BrowserRouter>
  );
};
BasicHorizontalMenu.storyName = 'Basic Horizontal Menu';
