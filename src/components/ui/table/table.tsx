import React from 'react';
import './table.scss';
import classNames from 'classnames';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<string>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string }>;
}

export const Table = ({ className, tableHeaders, tableData, ...props }: TableProps) => {
  const cssTable = classNames('ama-table', className);

  const renderThead = (item) => {
    return item?.map((content) => {
      return <th key={uuidv4()}>{content}</th>;
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

  return (
    <BsTable {...props} className={cssTable} striped>
      <thead>
        <tr>{renderThead(tableHeaders)}</tr>
      </thead>
      <tbody>{renderTr(tableData)}</tbody>
    </BsTable>
  );
};
