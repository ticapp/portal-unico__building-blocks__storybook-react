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
      col01: '000-T',
      col02: 104779934,
      col03: 2018 - 10 - 17,
      col04: '45 QG 56',
      col05: 'Rua das Beatas, em frente ao número 36, Lisboa',
      col06: 'Concluído',
      col07: 'Pago',
      col08: 'Não aplicável'
    },
    {
      col01: 10,
      col02: 20,
      col03: 30,
      col04: 40,
      col05: 50,
      col06: 60,
      col07: 70,
      col08: 80
    },
    {
      col01: 100,
      col02: 200,
      col03: 300,
      col04: 400,
      col05: 500,
      col06: 600,
      col07: 700,
      col08: 800
    },
    {
      col01: 1000,
      col02: 201,
      col03: 3000,
      col04: 4000,
      col05: 5000,
      col06: 6000,
      col07: 7000,
      col08: 8000
    },
    {
      col01: 10000,
      col02: 202,
      col03: 300,
      col04: 400,
      col05: 590,
      col06: 600,
      col07: 700,
      col08: 800
    },
    {
      col01: 1000000,
      col02: 203,
      col03: 300,
      col04: 400,
      col05: 520,
      col06: 600,
      col07: 700,
      col08: 800
    },
    {
      col01: 1000000,
      col02: 204,
      col03: 300,
      col04: 400,
      col05: 550,
      col06: 600,
      col07: 700,
      col08: 800
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
  itemsCounter: true,
  pagesCounter: true,
  nextAriaLabel: 'Próxima página da tabela',
  previousAriaLabel: 'Página anterior da tabela',
  lineOptionsLabel: 'Linhas por página:',
  itemsCounterLabel: ['-', 'de', 'items'],
  pagesCounterLabel: ['de', 'páginas']
} as PaginationProps;

TablePagination.argTypes = {
  itemsCounter: {
    control: { type: 'boolean' }
  },
  pagesCounter: {
    control: { type: 'boolean' }
  }
};

TablePagination.storyName = 'Pagination';
