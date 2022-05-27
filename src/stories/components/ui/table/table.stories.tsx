import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Table, TableProps, PaginationProps } from '../../../../components/ui';
import { Context } from '../../../../components/ui/table/table';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const BasicTable: Story<TableProps & PaginationProps> = (args) => {
  const [value, setValue] = React.useState(null);

  return (
    <Context.Provider value={{ value, setValue }}>
      <Table {...args}></Table>
    </Context.Provider>
  );
};

BasicTable.args = {
  tableHeaders: ['Infração', 'N.º processo', 'Data', 'Veículo', 'Local da infração', 'Estado', 'Coima', 'Sanção acessória'],
  tableData: [
    {
      col_01: '1',
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
    {
      col_01: '1000',
      col_02: '201',
      col_03: '3000',
      col_04: '4000',
      col_05: '5000',
      col_06: '6000',
      col_07: '7000',
      col_08: '8000',
    },
    {
      col_01: '10000',
      col_02: '202',
      col_03: '300',
      col_04: '400',
      col_05: '500',
      col_06: '600',
      col_07: '700',
      col_08: '800',
    },
    {
      col_01: '1000000',
      col_02: '203',
      col_03: '300',
      col_04: '400',
      col_05: '500',
      col_06: '600',
      col_07: '700',
      col_08: '800',
    },
    {
      col_01: '10000000',
      col_02: '204',
      col_03: '300',
      col_04: '400',
      col_05: '500',
      col_06: '600',
      col_07: '700',
      col_08: '800',
    },
  ],
  linesOptions: [
    {
      value: 2,
      label: '2',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 10,
      label: '10',
    },
  ],
} as TableProps & PaginationProps;

BasicTable.argTypes = {};

BasicTable.storyName = 'Table';
