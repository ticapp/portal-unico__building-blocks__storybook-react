import React from 'react';
import { Icon } from './icon';

export const UserIcon = () => {
  return <Icon icon="ama-user" />;
};

export const UserIconLg = () => {
  return (
    <>
      <Icon icon="ama-user" size="xl" />
      <Icon icon="ama-user" size="lg" />
      <Icon icon="ama-user" size="" />
      <Icon icon="ama-user" size="sm" />
      <Icon icon="ama-user" size="xs" />
    </>
  );
};

export const UserIconAlt = () => {
  return <Icon icon="ama-user" alt="This is a test alt" />;
};

export const UserIconPadding = () => {
  return (
    <>
      <Icon icon="ama-user" padding={false} />
      <Icon icon="ama-user" padding={true} />
    </>
  );
};