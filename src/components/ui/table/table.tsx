import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { paginationDataType, sortDataType, usePaginationDataType, useSortTableData } from '../../hooks';
import { Button } from '../buttons';
import { Icon } from '../icon';
import { Pagination, PaginationProps } from '../pagination';
import { useWindowSize } from '../../hooks/use-window-size/use-window-size';
import './table.scss';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<{ value: string | ReactNode; sorting: boolean }>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string | number | boolean | ReactNode }>;

  /** Table with/without pagination */
  pagination?: boolean;

  /** Label when no data */
  noDataLabel?: string;

  /** Total table */
  totalTable?: boolean;
}

export type TableContextType = {
  value: usePaginationDataType;
  setValue: (value: usePaginationDataType) => void;
} | null;

export const Context = React.createContext<TableContextType>(null);

const TableDesktop = ({
  className,
  tableHeaders,
  tableData,
  linesOptions,
  pagination = false,
  noDataLabel = 'No data found',
  totalTable = false,
  ...props
}: TableProps & PaginationProps) => {
  const {
    pagesCounter,
    itemsCounter,
    nextAriaLabel,
    previousAriaLabel,
    lineOptionsLabel,
    itemsCounterLabel,
    pagesCounterLabel,
    ...tableProps
  } = props;
  const [elementsPerPage, setElementsPerPage] = useState<paginationDataType[]>();
  const context = React.useContext<TableContextType>(Context);
  useEffect(() => {
    if (context) {
      setElementsPerPage(context.value?.currentData);
    }
  }, [context?.value]);

  const { items, requestSort, sortConfig } = useSortTableData(elementsPerPage || tableData, tableData, context?.value, null);
  const cssTable = classNames('ama-table', className, 'mb-0', totalTable && 'ama-table-total');
  const getClassNamesFor = (name: string) => {
    return sortConfig?.key === name ? sortConfig?.direction : undefined;
  };

  const renderThead = (item: Array<{ value: string | ReactNode; sorting: boolean }>, keys: string[]) => {
    return item?.map((data, i) => {
      return (
        <th key={uuidv4()} className="p-5 align-middle">
          <Button
            variant="neutral-dark"
            size="sm"
            onClick={() => requestSort(keys[i])}
            className={getClassNamesFor(keys[i]) ? `${getClassNamesFor(keys[i])} shadow-none` : 'shadow-none'}
            disabled={!data.sorting}
          >
            <span className="pe-8 text-medium-normal">{data.value}</span>
            {getClassNamesFor(keys[i]) === 'ascending' && data.sorting && <Icon icon="ama-expand" ariaHidden="true" size="sm" />}
            {getClassNamesFor(keys[i]) === 'descending' && data.sorting && <Icon icon="ama-collapse" ariaHidden="true" size="sm" />}

            {getClassNamesFor(keys[i]) !== 'ascending' && getClassNamesFor(keys[i]) !== 'descending' && data.sorting && (
              <span className="text-nowrap lh-1 text-medium-normal">
                <Icon icon="ama-collapse" ariaHidden="true" size="xs" />
                <Icon icon="ama-expand" ariaHidden="true" size="xs" />
              </span>
            )}
          </Button>
        </th>
      );
    });
  };

  const renderTd = (content: sortDataType) => {
    return Object.keys(content).map((k) => (
      <td className="text-medium-normal" key={uuidv4()}>
        {content[k]}
      </td>
    ));
  };

  const renderTr = (item: sortDataType[]) => {
    return item?.map((content: sortDataType) => {
      return (
        <tr key={uuidv4()} className="align-middle">
          {renderTd(content)}
        </tr>
      );
    });
  };

  const dataKeys = (content: Array<{ [key: string]: string | number | boolean | ReactNode }>) => {
    return Object.keys(Object.assign({}, ...content));
  };

  return (
    <>
      <BsTable {...tableProps} className={cssTable}>
        <thead>
          <tr>{renderThead(tableHeaders, dataKeys(tableData))}</tr>
        </thead>
        <tbody>
          {items && renderTr(items)}
          {items['length'] === 0 && (
            <tr>
              {tableHeaders.map((_value, index) => {
                return index === 0 ? (
                  <td className="text-medium-normal" key={uuidv4()}>
                    {noDataLabel}
                  </td>
                ) : (
                  <td className="text-medium-normal" key={uuidv4()}>
                    -
                  </td>
                );
              })}
            </tr>
          )}
        </tbody>
      </BsTable>
      {pagination && tableData && tableData.length > 0 && (
        <Pagination
          data={tableData}
          linesOptions={linesOptions}
          pagesCounter={pagesCounter}
          itemsCounter={itemsCounter}
          nextAriaLabel={nextAriaLabel}
          previousAriaLabel={previousAriaLabel}
          lineOptionsLabel={lineOptionsLabel}
          itemsCounterLabel={itemsCounterLabel}
          pagesCounterLabel={pagesCounterLabel}
        />
      )}
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
      {width >= 1280 && <TableDesktop {...props} />}
      {width < 1280 && <TableMobile {...props} />}
    </>
  );
};
