import { ComponentMeta, Story } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Icon, PaginationProps, Table, TableContextType, TableProps, Button, Link } from '../../../../components/ui';
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
      col01: (
        <span className="text-medium-normal">
          <Icon icon="ama-circle-solid" className="me-8 d-none d-xl-inline" size="xxs" ariaHidden="true" />
          Muito grave
        </span>
      ),
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
      col08: 860
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
  'labelSeeLess': ['Ver menos', ' items da lista'],
  'labelSeeMore': ['Ver mais', ' items da lista'],
  'ariaLabelPaginationNav': 'Paginação da tabela',
  'titleMobileDL': 'Lista de infrações'
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
  'hover': true,
  'mobileLegendRow': <Icon icon="ama-circle-solid" className="me-8" size="xxs" ariaHidden="true" />,
  'labelSeeLess': ['Ver menos', ' items da lista'],
  'labelSeeMore': ['Ver mais', ' items da lista'],
  'ariaLabelPaginationNav': 'Paginação da tabela',
  'titleMobileDL': 'Lista de infrações'
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
  'aria-label': 'Tabela com os meus movimentos, cabeçalhos com botões para ordenação',
  'tableHeaders': [
    { value: 'Movimentos', sorting: false },
    { value: 'Pontos', sorting: false }
  ],
  'tableData': [
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
  'noDataLabel': 'Não existem Movimentos',
  'borderless': true,
  'striped': false,
  'hover': true,
  'totalTable': true,
  'titleMobileDL': 'Lista de movimentos'
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
  'aria-label': 'Tabela com os acessos das entidades, cabeçalhos com botões para ordenação',
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
      url: [
        <Link link="https://www.example.com" title="Abrir link" isExternal className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>,
        <>
          <Button
            className="shadow-none w-100"
            variant="outline-brand-green-main"
            iconName="ama-arrow-right"
            iconDirection="right"
            size="lg"
            href="www.google.pt"
          >
            Ver detalhes
          </Button>
          <hr />
        </>
      ]
    },
    {
      entity: 'Segurança Social',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: [
        <Link link="https://www.example.com" title="Abrir link" isExternal className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>,
        <>
          <Button
            className="shadow-none w-100"
            variant="outline-brand-green-main"
            iconName="ama-arrow-right"
            iconDirection="right"
            size="lg"
            href="www.google.pt"
          >
            Ver detalhes
          </Button>
          <hr />
        </>
      ]
    },
    {
      entity: 'Banco de Portugal',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: [
        <Link link="https://www.example.com" title="Abrir link" isExternal className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>,
        <>
          <Button
            className="shadow-none w-100"
            variant="outline-brand-green-main"
            iconName="ama-arrow-right"
            iconDirection="right"
            size="lg"
            href="www.google.pt"
          >
            Ver detalhes
          </Button>
          <hr />
        </>
      ]
    },
    {
      entity: 'Instituto do Emprego e Formação Profissional',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36',
      url: [
        <Link link="https://www.example.com" title="Abrir link" isExternal className="stretched-link">
          <Icon icon="ama-arrow-right" ariaHidden="true" size="sm" />
        </Link>,
        <>
          <Button
            className="shadow-none w-100"
            variant="outline-brand-green-main"
            iconName="ama-arrow-right"
            iconDirection="right"
            size="lg"
            href="www.google.pt"
          >
            Ver detalhes
          </Button>
          <hr />
        </>
      ]
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
  'pagination': true,
  'itemsCounter': true,
  'pagesCounter': true,
  'nextAriaLabel': 'Próxima página da tabela',
  'previousAriaLabel': 'Página anterior da tabela',
  'lineOptionsLabel': 'Linhas por página:',
  'itemsCounterLabel': ['-', 'de', 'items'],
  'pagesCounterLabel': ['de', 'páginas'],
  'noDataLabel': 'Não existem entidades',
  'borderless': true,
  'striped': true,
  'hover': true,
  'labelSeeLess': ['Ver menos', ' items da lista'],
  'labelSeeMore': ['Ver mais', ' items da lista'],
  'ariaLabelPaginationNav': 'Paginação da tabela',
  'titleMobileDL': 'Lista de entidades'
} as TableProps & PaginationProps;

ClickableRowsTable.argTypes = {};

ClickableRowsTable.storyName = 'Clickable Table data';
