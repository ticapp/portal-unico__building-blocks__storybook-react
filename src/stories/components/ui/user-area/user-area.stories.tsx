import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { SelectOption, UserArea, UserAreaProps } from '../../../../components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/User Area',
} as ComponentMeta<typeof UserArea>;

export const Authenticated: Story<UserAreaProps> = () => {
  const authenticatedOptions = [
    {
      label: 'Area reservada',
      value: 'user-area',
    },
    {
      label: 'Terminar sessão',
      value: 'logout',
    },
  ] as SelectOption[];
  const anonymousOptions = [
    {
      label: 'Login',
      value: 'login',
    },
  ] as SelectOption[];

  return (
    <BrowserRouter>
      <UserArea
        isAuthenticated={true}
        label={'User Name'}
        anonymousOptions={anonymousOptions}
        authenticatedOptions={authenticatedOptions}
      />
    </BrowserRouter>
  );
};
Authenticated.storyName = 'Authenticated User';

export const Anonymous: Story<UserAreaProps> = () => {
  const authenticatedOptions = [
    {
      label: 'Area reservada',
      value: 'user-area',
    },
    {
      label: 'Terminar sessão',
      value: 'logout',
    },
  ] as SelectOption[];
  const anonymousOptions = [
    {
      label: 'Login',
      value: 'login',
    },
  ] as SelectOption[];

  return (
    <BrowserRouter>
      <UserArea
        isAuthenticated={false}
        anonymousOptions={anonymousOptions}
        authenticatedOptions={authenticatedOptions}
      />
    </BrowserRouter>
  );
};
Anonymous.storyName = 'Anonymous User';
