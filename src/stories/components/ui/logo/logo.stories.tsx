/* eslint-disable global-require */
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
      <Logo src={require('../../../../assets/img/logo.png')} />
    </BrowserRouter>
  );
};
NoRedirect.storyName = 'Logo with homepage redirect';

export const Redirect: Story<LogoProps> = () => {
  return (
    <BrowserRouter>
      <Logo isHomepage src={require('../../../../assets/img/logo.png')} />
    </BrowserRouter>
  );
};
Redirect.storyName = 'Logo without homepage redirect';
