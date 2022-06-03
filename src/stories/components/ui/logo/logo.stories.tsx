import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Logo, LogoProps } from '../../../../components/ui';

export default {
  title: 'Components/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

export const NoRedirect: Story<LogoProps> = () => {
  return (
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );
};
NoRedirect.storyName = 'Logo with homepage redirect';

export const Redirect: Story<LogoProps> = () => {
  return (
    <BrowserRouter>
      <Logo isHomepage />
    </BrowserRouter>
  );
};
Redirect.storyName = 'Logo without homepage redirect';
