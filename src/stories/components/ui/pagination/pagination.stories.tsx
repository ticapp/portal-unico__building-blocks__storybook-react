import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from '../../../../components/ui';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

export const TablePagination: Story<PaginationProps> = (args) => {
  return <Pagination {...args} />;
};

TablePagination.args = {
  data: [
    {
      col_01: '000-T',
      col_02: 104779934,
      col_03: 2018 - 10 - 17,
      col_04: '45 QG 56',
      col_05: 'Rua das Beatas, em frente ao número 36, Lisboa',
      col_06: 'Concluído',
      col_07: 'Pago',
      col_08: 'Não aplicável'
    },
    {
      col_01: 10,
      col_02: 20,
      col_03: 30,
      col_04: 40,
      col_05: 50,
      col_06: 60,
      col_07: 70,
      col_08: 80
    },
    {
      col_01: 100,
      col_02: 200,
      col_03: 300,
      col_04: 400,
      col_05: 500,
      col_06: 600,
      col_07: 700,
      col_08: 800
    },
    {
      col_01: 1000,
      col_02: 201,
      col_03: 3000,
      col_04: 4000,
      col_05: 5000,
      col_06: 6000,
      col_07: 7000,
      col_08: 8000
    },
    {
      col_01: 10000,
      col_02: 202,
      col_03: 300,
      col_04: 400,
      col_05: 590,
      col_06: 600,
      col_07: 700,
      col_08: 800
    },
    {
      col_01: 1000000,
      col_02: 203,
      col_03: 300,
      col_04: 400,
      col_05: 520,
      col_06: 600,
      col_07: 700,
      col_08: 800
    },
    {
      col_01: 1000000,
      col_02: 204,
      col_03: 300,
      col_04: 400,
      col_05: 550,
      col_06: 600,
      col_07: 700,
      col_08: 800
    }
  ],
  linesOptions: [
    {
      value: 2,
      label: '2'
    },
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    }
  ],
  pagination: true,
  itemsCounter: true,
  pagesCounter: true,
  nextAriaLabel: 'Próxima página da tabela',
  previousAriaLabel: 'Página anterior da tabela',
  lineOptionsLabel: 'Linhas por página:',
  itemsCounterLabel: ['-', 'de', 'items'],
  pagesCounterLabel: ['de', 'páginas']
} as PaginationProps;

TablePagination.argTypes = {};

TablePagination.storyName = 'Pagination';
