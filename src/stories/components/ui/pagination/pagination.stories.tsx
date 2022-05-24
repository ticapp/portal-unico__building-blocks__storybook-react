import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from '../../../../components/ui';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const TablePagination: Story<PaginationProps> = (args) => {
  return <Pagination {...args}></Pagination>;
};

TablePagination.args = {} as PaginationProps;

TablePagination.argTypes = {};

TablePagination.storyName = 'Pagination';
