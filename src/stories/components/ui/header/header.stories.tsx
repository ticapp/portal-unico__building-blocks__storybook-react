import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header, HeaderProps, SelectOption } from '../../../../components';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const NoRedirect: Story<HeaderProps> = () => {
  return (
    <BrowserRouter>
      <Header isHomepage={true} homepageLink={'/'} />
    </BrowserRouter>
  );
};
NoRedirect.storyName = 'Header with default languages';

export const Redirect: Story<HeaderProps> = () => {
  const languages: SelectOption[] = [
    { label: 'PT', value: 'pt' },
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' },
  ];

  return (
    <BrowserRouter>
      <Header
        isHomepage={false}
        homepageLink={'/'}
        languages={languages}
        activeLanguage={languages[0]}
      />
    </BrowserRouter>
  );
};
Redirect.storyName = 'Header with list of languages';
