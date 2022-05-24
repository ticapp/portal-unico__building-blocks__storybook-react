import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Table, TableProps } from '../../../../components/ui';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const BasicTable: Story<TableProps> = (args) => {
  return <Table {...args}></Table>;
};

BasicTable.args = {
  tableHeaders: ['Infração', 'N.º processo', 'Data', 'Veículo', 'Local da infração', 'Estado', 'Coima', 'Sanção acessória'],
  tableData: [
    {
      col_01: '1000',
      col_02: '2',
      col_03: '3',
      col_04: '4',
      col_05: '5',
      col_06: '6',
      col_07: '7',
      col_08: '8',
    },
    {
      col_01: '10',
      col_02: '20',
      col_03: '30',
      col_04: '40',
      col_05: '50',
      col_06: '60',
      col_07: '70',
      col_08: '80',
    },
    {
      col_01: '100',
      col_02: '200',
      col_03: '300',
      col_04: '400',
      col_05: '500',
      col_06: '600',
      col_07: '700',
      col_08: '800',
    },
  ],
} as TableProps;

BasicTable.argTypes = {};

BasicTable.storyName = 'Table';
