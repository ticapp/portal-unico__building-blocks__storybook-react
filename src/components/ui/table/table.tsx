import classNames from 'classnames';
import React, { ReactNode, useEffect, useId, useState } from 'react';
import { Table as BsTable, TableProps as BsTableProps } from 'react-bootstrap';
import {
  paginationDataType,
  sortDataType,
  useIsomorphicLayoutEffect,
  usePaginationDataType,
  useSortTableData,
  useWindowSize
} from '../../hooks';

import { Button } from '../buttons';
import { Icon } from '../icon';
import { Pagination, PaginationProps } from '../pagination';
import { ResponsiveWrapper } from '../responsive-wrapper';
import './table.scss';

export interface TableProps extends BsTableProps {
  /** Add classes to the Table component */
  className?: string;

  /** Array string names of headers table */
  tableHeaders: Array<{ value: string | ReactNode; sorting: boolean }>;

  /** Array of data table */
  tableData: Array<{ [key: string]: string | number | boolean | ReactNode | Array<ReactNode> }>;

  /** Table with/without pagination */
  pagination?: boolean;

  /** Label when no data */
  noDataLabel?: string;

  /** Total table */
  totalTable?: boolean;

  /** Mobile table row with legend */
  mobileLegendRow?: ReactNode | string | number;

  /** Label See More */
  labelSeeMore?: Array<string>;

  /** Label See Less */
  labelSeeLess?: Array<string>;

  /** title mobile description list */
  titleMobileDL?: string;
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
    ariaLabelPaginationNav,
    ...tableProps
  } = props;

  delete tableProps.mobileLegendRow;
  delete tableProps.labelSeeMore;
  delete tableProps.labelSeeLess;
  delete tableProps.titleMobileDL;

  const uid = useId();
  const [elementsPerPage, setElementsPerPage] = useState<paginationDataType[]>();
  const context = React.useContext<TableContextType>(Context);
  useEffect(() => {
    if (context) {
      setElementsPerPage(context.value?.currentData);
    }
  }, [context?.value]);

  let logicItems;
  if (tableData?.length === 0 || elementsPerPage?.length === 0) {
    logicItems = tableData;
  } else {
    logicItems = elementsPerPage;
  }

  const { items, requestSort, sortConfig } = useSortTableData(logicItems, tableData, context?.value, null);
  const cssTable = classNames('ama-table', className, 'mb-0', totalTable && 'ama-table-total');
  const getClassNamesFor = (name: string) => {
    return sortConfig?.key === name ? sortConfig?.direction : undefined;
  };

  const getAriaSort = (direction, isSorting) => {
    if (isSorting) {
      if (direction === 'ascending') return 'ascending';
      if (direction === 'descending') return 'descending';
    }
    return 'other';
  };

  const renderThead = (item: Array<{ value: string | ReactNode; sorting: boolean }>, keys: string[]) => {
    return item?.map((data, i) => {
      return (
        <th
          // eslint-disable-next-line react/no-array-index-key
          key={`${uid}-th-${i}`}
          scope="col"
          className={`${data.sorting ? 'py-0' : 'py-16'} px-8 align-middle`}
          aria-sort={getAriaSort(getClassNamesFor(keys[i]), data.sorting)}
        >
          {data.sorting && (
            <Button
              variant="neutral-dark"
              size="sm"
              autoFocus={
                (getClassNamesFor(keys[i]) === 'ascending' && data.sorting) || (getClassNamesFor(keys[i]) === 'descending' && data.sorting)
              }
              onClick={() => {
                requestSort(keys[i]);
              }}
              className={getClassNamesFor(keys[i]) ? `${getClassNamesFor(keys[i])} shadow-none px-0 py-16` : 'shadow-none px-0 py-16'}
              disabled={!data.sorting}
              data-column-index={i}
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
          )}
          {!data.sorting && <span className="text-medium-normal">{data.value}</span>}
        </th>
      );
    });
  };

  const renderTd = (content: sortDataType) => {
    return Object.keys(content)?.map((k, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <td className="text-medium-normal" key={`${uid}-${index}-td`}>
        {React.isValidElement(content[k]?.[0]) ? content[k]?.[0] : content[k]}
      </td>
    ));
  };

  const renderTr = (item: sortDataType[]) => {
    return item?.map((content: sortDataType, index: number) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={`${uid}-${index}-tr`} className="align-middle position-relative">
          {renderTd(content)}
        </tr>
      );
    });
  };

  const dataKeys = (content: Array<{ [key: string]: string | number | boolean | ReactNode }>) => {
    return content ? Object.keys(Object.assign({}, ...content)) : [];
  };

  return (
    <>
      <BsTable {...tableProps} className={cssTable}>
        <thead>
          <tr>{renderThead(tableHeaders, dataKeys(tableData))}</tr>
        </thead>
        <tbody>
          {items && renderTr(items)}
          {items && items['length'] === 0 && (
            <tr className="align-middle position-relative">
              {tableHeaders?.map((_value, index) => {
                return (
                  <td className="text-medium-normal" key={`${uid + index}td`}>
                    {index > 0 ? '-' : noDataLabel}
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
          ariaLabelPaginationNav={ariaLabelPaginationNav}
        />
      )}
    </>
  );
};

const TableMobile = ({ ...props }: TableProps) => {
  const {
    className,
    tableHeaders,
    tableData,
    noDataLabel,
    totalTable,
    mobileLegendRow = null,
    labelSeeMore = 'Ver mais',
    labelSeeLess = 'Ver menos',
    titleMobileDL = 'Lista'
  } = { ...props };
  const uid = useId();
  const cssTableMobile = classNames('ama-table-mobile', className, totalTable && 'ama-table-mobile-total');
  const totalItems = tableData?.length;
  const [seeMore, setSeeMore] = useState<boolean>(true);
  const [itemsShown, setItemsShown] = useState<number>(totalTable ? totalItems : 2);
  const [seeMoreItems, setSeeMoreItems] = useState<number>(totalItems);

  const checkLinkButton = (element, key) => {
    if (React.isValidElement(element[1])) {
      return (
        <React.Fragment key={`${uid}datalist${key}`}>
          <dt className="d-none">{tableHeaders[key].value}</dt>
          <dd className="col-12 m-0 p-16 position-relative">{element[1]}</dd>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={`${uid}datalist${key}`}>
        <dt className="col-6 m-0 p-16">{tableHeaders[key].value}</dt>
        <dd className="col-6 m-0 p-16 position-relative">{element}</dd>
      </React.Fragment>
    );
  };

  const dataListItem = tableData?.map((item, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={`${uid}-legend-${index}`}>
        {mobileLegendRow && (
          <dt className="p-16" aria-hidden>
            {mobileLegendRow}
          </dt>
        )}
        {Object.entries(item)?.map((value, key) => {
          if (key === Object.entries(item).length - 1) {
            return checkLinkButton(value[1], key);
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${uid}-datalist-first-${index}${key}`}>
              <dt className="col-6 m-0 p-16">{tableHeaders[key].value}</dt>
              <dd className="col-6 m-0 p-16 position-relative">{value[1]}</dd>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  });

  const [dataShown, setDataShown] = useState<ReactNode[]>(dataListItem?.slice(0, itemsShown));

  const getItems = () => {
    if (seeMore) {
      setDataShown(dataListItem?.slice(0, itemsShown));
      return dataListItem?.slice(0, itemsShown);
    }
    setDataShown(dataListItem?.slice(0, 2));
    return dataListItem?.slice(0, 2);
  };

  const toggle = () => {
    getItems();
  };

  useIsomorphicLayoutEffect(() => {
    if (seeMore) {
      setSeeMoreItems(seeMoreItems - 2);
      setItemsShown(itemsShown + 2);
    } else {
      setSeeMoreItems(totalItems - 2);
      setItemsShown(4);
    }
    if (totalItems <= itemsShown) {
      setSeeMore(!seeMore);
    }
  }, [dataShown]);

  return (
    <div className={cssTableMobile}>
      <dl className="row" title={titleMobileDL}>
        {dataShown?.length > 0 && dataShown}
        {dataShown?.length === 0 &&
          tableHeaders?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${uid}-no-data-${index}`}>
              <dt className="col-6 m-0 p-16">{item.value}</dt>
              <dd className="col-6 m-0 p-16 position-relative">{index > 0 ? '-' : noDataLabel}</dd>
            </React.Fragment>
          ))}
      </dl>

      {dataShown?.length > 0 && !totalTable && (
        <Button className="shadow-none mx-auto" variant="link" onClick={toggle}>
          {seeMore ? `${labelSeeMore[0]} (${seeMoreItems})  ` : `${labelSeeLess[0]}`}
          <span className="visually-hidden"> {labelSeeLess[1]}</span>
        </Button>
      )}
    </div>
  );
};

export const Table = (props: TableProps & PaginationProps) => {
  const { width } = useWindowSize();
  return (
    <>
      <ResponsiveWrapper condition={width >= 1280}>
        <TableDesktop {...props} />
      </ResponsiveWrapper>

      <ResponsiveWrapper condition={width < 1280}>
        <TableMobile {...props} />
      </ResponsiveWrapper>
    </>
  );
};
