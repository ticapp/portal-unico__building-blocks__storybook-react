import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Loader } from '../../../../components';
import { LoaderProps } from '../../../../components/ui/loader/loader';

export default {
  title: 'Components/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

export const LoaderComponent: Story<LoaderProps> = () => <Loader />;
