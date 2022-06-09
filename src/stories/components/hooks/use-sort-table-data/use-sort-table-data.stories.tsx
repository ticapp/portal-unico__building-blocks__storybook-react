import { Story } from '@storybook/react';
import React from 'react';
import { usePaginationData, useSortTableData } from '../../../../components';

export default {
  title: 'Hooks/Use Sort Table Data'
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
  const { items, requestSort, sortConfig } = useSortTableData(data, data, pageData, null);

  return (
    <>
      <p>Items/Sorted items: {JSON.stringify(items)}</p>
      <button
        type="button"
        onClick={() => {
          requestSort('entity');
        }}
      >
        Sort by entity
      </button>
      <p>Direction: {sortConfig?.direction}</p>
    </>
  );
};
Example.storyName = 'Example';
