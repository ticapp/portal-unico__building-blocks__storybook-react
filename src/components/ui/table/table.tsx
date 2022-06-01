import React, { ReactNode, useEffect, useState } from 'react';
import './table.scss';
import classNames from 'classnames';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { paginationDataType, usePaginationDataType, useSortTableData } from '../../hooks';
import { Pagination, PaginationProps } from '../pagination';
import { Icon } from '../icon';
import { Button } from '../buttons';
import { useWindowSize } from './../../hooks/use-window-size/use-window-size';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<{ value: string | ReactNode; sorting: boolean }>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string | number | boolean | ReactNode }>;

  /** Table with/without pagination */
  pagination?: boolean;
}

export type TableContextType = {
  value: usePaginationDataType;
  setValue: (value: usePaginationDataType) => void;
} | null;

export const Context = React.createContext<TableContextType>(null);

const TableDesktop = ({ className, tableHeaders, tableData, linesOptions, pagination = false, ...props }: TableProps & PaginationProps) => {
  const { pagesCounter, itemsCounter, ...tableProps } = props;
  const [elementsPerPage, setElementsPerPage] = useState<paginationDataType[]>();
  const context = React.useContext<TableContextType>(Context);
  useEffect(() => {
    if (context) {
      setElementsPerPage(context.value?.currentData);
    }
  }, [context?.value]);

  const { items, requestSort, sortConfig } = useSortTableData(elementsPerPage || tableData, tableData, context?.value, null);
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
            disabled={!data.sorting}
          >
            <span className='pe-8 text-medium-normal'>{data.value}</span>
            {getClassNamesFor(keys[i]) === 'ascending' && data.sorting && <Icon icon='ama-expand' ariaHidden='true' size='sm'></Icon>}
            {getClassNamesFor(keys[i]) === 'descending' && data.sorting && <Icon icon='ama-collapse' ariaHidden='true' size='sm'></Icon>}

            {getClassNamesFor(keys[i]) !== 'ascending' && getClassNamesFor(keys[i]) !== 'descending' && data.sorting && (
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
      <BsTable {...tableProps} className={cssTable} borderless striped hover>
        <thead>
          <tr>{renderThead(tableHeaders, dataKeys(tableData))}</tr>
        </thead>
        <tbody>{renderTr(items)}</tbody>
      </BsTable>
      {pagination && <Pagination data={tableData} linesOptions={linesOptions} pagesCounter={pagesCounter} itemsCounter={itemsCounter}></Pagination>}
    </>
  );
};

const TableMobile = () => {
  return <div>Mobile</div>;
};

export const Table = ({ ...props }: TableProps & PaginationProps) => {
  const { width } = useWindowSize();

  return (
    <>
      {width >= 1280 && <TableDesktop {...props}></TableDesktop>}
      {width < 1280 && <TableMobile {...props}></TableMobile>}
    </>
  );
};
