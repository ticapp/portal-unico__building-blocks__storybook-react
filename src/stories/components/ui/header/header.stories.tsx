import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Header,
  HeaderProps,
  HorizontalMenuLink,
  SelectOption,
  UserAreaOption,
} from '../../../../components';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderExample: Story<HeaderProps> = (props) => {
  const links: HorizontalMenuLink[] = [
    {
      id: '1',
      label: 'Serviços',
      link: '/services',
    },
    {
      id: '2',
      label: 'Entidades',
      link: '/entities',
    },
    {
      id: '3',
      label: 'Atendimento',
      link: '/attendance',
    },
    {
      id: '4',
      label: 'Notícias',
      link: '/news',
    },
  ];

  const options = [
    {
      authenticatedOption: false,
      link: '/login',
      icon: 'ama-login',
      label: 'Entrar no portal',
    },
    {
      authenticatedOption: false,
      link: '/register',
      icon: 'ama-add-user',
      label: 'Criar registo',
    },

    {
      authenticatedOption: true,
      link: '/user-area',
      icon: 'ama-user',
      label: 'Area Reservada',
    },
    {
      authenticatedOption: true,
      link: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão',
    },
  ] as UserAreaOption[];

  const languages: SelectOption[] = [
    { label: 'PT', value: 'pt' },
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' },
  ];

  return (
    <BrowserRouter>
      <Header
        isHomepage={true}
        isAuthenticated={true}
        username={'John Doe'}
        homepageLink={'/'}
        languages={languages}
        activeLanguage={languages[0]}
        options={options}
        links={links}
      />
    </BrowserRouter>
  );
};
HeaderExample.storyName = 'Header example';
