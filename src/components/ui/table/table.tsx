import React from 'react';
import './table.scss';
import classNames from 'classnames';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useSortTableData } from '../../hooks';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<string>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string | number | boolean }>;
}

export const Table = ({ className, tableHeaders, tableData, ...props }: TableProps) => {
  const { items, requestSort, sortConfig } = useSortTableData(tableData, null);
  const cssTable = classNames('ama-table', className);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const renderThead = (item, keys) => {
    return item?.map((data, i) => {
      return (
        <th key={uuidv4()}>
          <button type='button' onClick={() => requestSort(keys[i])} className={getClassNamesFor(keys[i])}>
            {data}
          </button>
        </th>
      );
    });
  };

  const renderTr = (item) => {
    return item?.map((content) => {
      return <tr key={uuidv4()}>{renderTd(content)}</tr>;
    });
  };

  const renderTd = (content) => {
    return Object.keys(content).map((k) => <td key={uuidv4()}>{content[k]}</td>);
  };

  const dataKeys = (content) => {
    return Object.keys(Object.assign({}, ...content));
  };

  return (
    <BsTable {...props} className={cssTable} striped>
      <thead>
        <tr>{renderThead(tableHeaders, dataKeys(tableData))}</tr>
      </thead>
      <tbody>{renderTr(items)}</tbody>
    </BsTable>
  );
};
