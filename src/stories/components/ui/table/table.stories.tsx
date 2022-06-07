/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-boolean-value */
import { ComponentMeta, Story } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Icon, PaginationProps, Table, TableContextType, TableProps, Link } from '../../../../components/ui';
import { Context } from '../../../../components/ui/table/table';

export default {
  title: 'Components/Table',
  component: Table
} as ComponentMeta<typeof Table>;

export const BasicTable: Story<TableProps & PaginationProps> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <Context.Provider value={useMemo(() => ({ value, setValue } as TableContextType), [value])}>
      <Table {...args} />
    </Context.Provider>
  );
};

BasicTable.args = {
  'aria-label': 'Tabela com as minhas infrações, cabeçalhos com botões para ordenação',
  'tableHeaders': [
    { value: 'Infração', sorting: false },
    { value: 'N.º processo', sorting: true },
    { value: 'Data', sorting: true },
    { value: 'Veículo', sorting: true },
    { value: 'Local da infração', sorting: true },
    { value: 'Estado', sorting: false },
    { value: 'Coima', sorting: true },
    { value: 'Sanção acessória', sorting: true }
  ],
  'tableData': [
    {
      col_01: (
        <span className="text-medium-normal">
          <Icon icon="ama-circle-solid" className="me-8 d-none d-xl-inline" size="xxs" ariaHidden="true" />
          Muito grave
        </span>
      ),
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
      col_08: 860
    }
  ],
  'linesOptions': [
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
  'pagination': true,
  'itemsCounter': true,
  'pagesCounter': true,
  'nextAriaLabel': 'Próxima página da tabela',
  'previousAriaLabel': 'Página anterior da tabela',
  'lineOptionsLabel': 'Linhas por página:',
  'itemsCounterLabel': ['-', 'de', 'items'],
  'pagesCounterLabel': ['de', 'páginas'],
  'borderless': true,
  'striped': true,
  'hover': true,
  'mobileLegendRow': <Icon icon="ama-circle-solid" className="me-8" size="xxs" ariaHidden="true" />,
  'labelSeeLess': 'Ver menos',
  'labelSeeMore': 'Ver mais'
} as TableProps & PaginationProps;

BasicTable.argTypes = {};

BasicTable.storyName = 'Table';

export const NoDataTable: Story<TableProps & PaginationProps> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <Context.Provider value={useMemo(() => ({ value, setValue } as TableContextType), [value])}>
      <Table {...args} />
    </Context.Provider>
  );
};

NoDataTable.args = {
  'aria-label': 'Tabela com as minhas infrações, cabeçalhos com botões para ordenação',
  'tableHeaders': [
    { value: 'Infração', sorting: false },
    { value: 'N.º processo', sorting: true },
    { value: 'Data', sorting: true },
    { value: 'Veículo', sorting: true },
    { value: 'Local da infração', sorting: true },
    { value: 'Estado', sorting: false },
    { value: 'Coima', sorting: true },
    { value: 'Sanção acessória', sorting: true }
  ],
  'tableData': [],
  'linesOptions': [
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
  'pagination': true,
  'itemsCounter': true,
  'pagesCounter': true,
  'nextAriaLabel': 'Próxima página da tabela',
  'previousAriaLabel': 'Página anterior da tabela',
  'lineOptionsLabel': 'Linhas por página:',
  'itemsCounterLabel': ['-', 'de', 'items'],
  'pagesCounterLabel': ['de', 'páginas'],
  'noDataLabel': 'Não existem infrações',
  'borderless': true,
  'striped': true,
  'hover': true
} as TableProps & PaginationProps;

NoDataTable.argTypes = {};

NoDataTable.storyName = 'Table without data';

export const TotalTable: Story<TableProps & PaginationProps> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <Context.Provider value={useMemo(() => ({ value, setValue } as TableContextType), [value])}>
      <Table {...args} />
    </Context.Provider>
  );
};

TotalTable.args = {
  tableHeaders: [
    { value: 'Movimentos', sorting: false },
    { value: 'Pontos', sorting: false }
  ],
  tableData: [
    {
      moves: 'Saldo inicial',
      score: 12
    },
    {
      moves: '3 anos sem infrações',
      score: +3
    },
    {
      total: 'Total',
      score: 15
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
  noDataLabel: 'Não existem Movimentos',
  borderless: true,
  striped: false,
  hover: true,
  totalTable: true
} as TableProps & PaginationProps;

TotalTable.argTypes = {};

TotalTable.storyName = 'Total Table data';

export const ClickableRowsTable: Story<TableProps & PaginationProps> = (args) => {
  const [value, setValue] = useState(null);

  return (
    <BrowserRouter>
      <Context.Provider value={useMemo(() => ({ value, setValue } as TableContextType), [value])}>
        <Table {...args} />
      </Context.Provider>
    </BrowserRouter>
  );
};

ClickableRowsTable.args = {
  'aria-label': 'Tabela com as minhas infrações, cabeçalhos com botões para ordenação',
  'tableHeaders': [
    { value: 'Entidade', sorting: true },
    { value: 'Tipo de dados', sorting: true },
    { value: 'Último acesso', sorting: true },
    { value: '', sorting: false }
  ],
  'tableData': [
    {
      entity: 'Instituto dos Registos e Notariado',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: (
        <Link link="https://www.example.com" title="Abrir link" isExternal={true} className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>
      )
    },
    {
      entity: 'Segurança Social',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: (
        <Link link="https://www.example.com" title="Abrir link" isExternal={true} className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>
      )
    },
    {
      entity: 'Banco de Portugal',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: (
        <Link link="https://www.example.com" title="Abrir link" isExternal={true} className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>
      )
    },
    {
      entity: 'Instituto do Emprego e Formação Profissional',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: (
        <Link link="https://www.example.com" title="Abrir link" isExternal={true} className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>
      )
    }
  ],

  'linesOptions': [
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    }
  ],
  'noDataLabel': 'Não existem Movimentos',
  'borderless': true,
  'striped': true,
  'hover': true
} as unknown as TableProps & PaginationProps;

ClickableRowsTable.argTypes = {};

ClickableRowsTable.storyName = 'Clickable Table data';
