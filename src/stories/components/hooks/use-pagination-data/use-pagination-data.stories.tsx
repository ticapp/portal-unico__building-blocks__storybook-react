import { Story } from '@storybook/react';
import React from 'react';
import { Select, usePaginationData } from '../../../../components';

export default {
  title: 'Hooks/Use Pagination Data'
};

export const Example: Story = () => {
  const data = [
    {
      entity: 'Instituto dos Registos e Notariado',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36'
    },
    {
      entity: 'Segurança Social',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36'
    },
    {
      entity: 'Banco de Portugal',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36'
    },
    {
      entity: 'Instituto do Emprego e Formação Profissional',
      dataType: 'Completos',
      lastAccess: '29/05/2002-14:36'
    }
  ];
  const pageData = usePaginationData(5, data);
  const linesOptions = [
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    }
  ];

  return (
    <>
      <p>Conteúdo por página: {pageData?.contentPerPage}</p>
      <p>Total de páginas: {pageData?.totalPageCount}</p>
      <p>Página atual: {pageData?.currentPage}</p>
      <p>
        Item {pageData?.startIndex} de {pageData?.endIndex}
      </p>
      <p>Dados: {JSON.stringify(pageData?.currentData)}</p>
      <button type="button" onClick={pageData?.gotToPreviousPage}>
        Previous
      </button>
      <button type="button" onClick={pageData?.goToNextPage}>
        Next
      </button>
      <Select
        id="ama-lines-selector"
        className="lines-selector d-inline-flex"
        labelledby="lines-per-page"
        options={linesOptions}
        onChange={pageData?.linesOptionChangeHandler}
        active={linesOptions[0]}
        disabled={linesOptions.length <= 1}
        size="xs"
      />
    </>
  );
};
Example.storyName = 'Example';
