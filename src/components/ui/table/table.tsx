import React, { ReactNode, useEffect, useState } from 'react';
import './table.scss';
import classNames from 'classnames';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useSortTableData } from '../../hooks';
import { Pagination, PaginationProps } from '../pagination';
import { Icon } from '../icon';
import { Button } from '../buttons';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<string>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string | number | boolean | ReactNode }>;
}

export const Context = React.createContext({ value: null, setValue: null as any });

export const Table = ({ className, tableHeaders, tableData, linesOptions, ...props }: TableProps & PaginationProps) => {
  const [elementsPerPage, setElementsPerPage] = useState();
  const { value } = React.useContext(Context) as any;
  useEffect(() => {
    if (value) {
      setElementsPerPage(value.currentData);
    }
  }, [value]);

  const { items, requestSort, sortConfig } = useSortTableData(elementsPerPage || tableData, tableData, value, null);
  const cssTable = classNames('ama-table', className, 'mb-0');
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const renderThead = (item, keys) => {
    return item?.map((data, i) => {
      return (
        <th key={uuidv4()} className='p-5 align-middle'>
          <Button
            variant='neutral-dark'
            size='sm'
            onClick={() => requestSort(keys[i])}
            className={getClassNamesFor(keys[i]) ? getClassNamesFor(keys[i]) + ' shadow-none' : 'shadow-none'}
          >
            <span className='pe-8 text-medium-normal'>{data}</span>
            {getClassNamesFor(keys[i]) === 'ascending' && <Icon icon='ama-expand' ariaHidden='true'></Icon>}
            {getClassNamesFor(keys[i]) === 'descending' && <Icon icon='ama-collapse' ariaHidden='true'></Icon>}

            {getClassNamesFor(keys[i]) !== 'ascending' && getClassNamesFor(keys[i]) !== 'descending' && (
              <span className='text-nowrap lh-1 text-medium-normal'>
                <Icon icon='ama-collapse' ariaHidden='true' size='xs'></Icon>
                <Icon icon='ama-expand' ariaHidden='true' size='xs'></Icon>
              </span>
            )}
          </Button>
        </th>
      );
    });
  };

  const renderTr = (item) => {
    return item?.map((content) => {
      return (
        <tr key={uuidv4()} className='align-middle'>
          {renderTd(content)}
        </tr>
      );
    });
  };

  const renderTd = (content) => {
    return Object.keys(content).map((k) => (
      <td className='text-medium-normal' key={uuidv4()}>
        {content[k]}
      </td>
    ));
  };

  const dataKeys = (content) => {
    return Object.keys(Object.assign({}, ...content));
  };

  return (
    <>
      <BsTable {...props} className={cssTable} borderless striped hover>
        <thead>
          <tr>{renderThead(tableHeaders, dataKeys(tableData))}</tr>
        </thead>
        <tbody>{renderTr(items)}</tbody>
      </BsTable>
      <Pagination data={tableData} linesOptions={linesOptions}></Pagination>
    </>
  );
};
