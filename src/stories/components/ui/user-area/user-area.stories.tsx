import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { UserArea, UserAreaProps } from '../../../../components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/User Area',
} as ComponentMeta<typeof UserArea>;

export const Relative: Story<UserAreaProps> = () => {
  return (
    <BrowserRouter>
      <UserArea url={'/user-area'} />
    </BrowserRouter>
  );
};
Relative.storyName = 'Relative Path';

export const ExternalNewTab: Story<UserAreaProps> = () => {
  return (
    <BrowserRouter>
      <UserArea isExternal={true} url={'https://example.com'} newTab={true} />
    </BrowserRouter>
  );
};
ExternalNewTab.storyName = 'External Path New Tab';

export const ExternalSameTab: Story<UserAreaProps> = () => {
  return (
    <BrowserRouter>
      <UserArea isExternal={true} url={'https://example.com'} newTab={false} />
    </BrowserRouter>
  );
};
ExternalSameTab.storyName = 'External Path New Tab';
