import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header, HeaderProps } from '../../../../components';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const NoRedirect: Story<HeaderProps> = () => {
  return (
    <BrowserRouter>
      <Header isHomepage={false} homepageLink={'/'} />
    </BrowserRouter>
  );
};
NoRedirect.storyName = 'Header with default languages';

export const Redirect: Story<HeaderProps> = () => {
  return (
    <BrowserRouter>
      <Header
        isHomepage={false}
        homepageLink={'/'}
        languages={{ pt: 'PT', en: 'EN', es: 'ES' }}
        activeLanguage={'pt'}
      />
    </BrowserRouter>
  );
};
Redirect.storyName = 'Header with list of languages';
