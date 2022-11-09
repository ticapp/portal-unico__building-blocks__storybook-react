import classNames from 'classnames';
import React, { ReactNode, useContext, useId } from 'react';
import { useIsomorphicLayoutEffect, usePaginationData } from '../../hooks';

import { Icon } from '../icon';
import { Select } from '../select';

import { TableContextType } from '../table';
import { Context } from '../table/table';
import './pagination.scss';

export interface PaginationProps {
  /** Add classes to the Card component */
  className?: string;

  /** Aria-label navigation  */
  ariaLabelPaginationNav?: string;

  /** Lines Options */
  linesOptions: string[] | number[];

  /** Data Info */
  data?: Array<{ [key: string]: string | number | boolean | ReactNode }>;

  /** Show/Hide label items counter */
  itemsCounter?: boolean;

  /** Show/Hide label pages counter */
  pagesCounter?: boolean;

  /** Next button aria-label */
  nextAriaLabel?: string;

  /** Previous button aria-label */
  previousAriaLabel?: string;

  /** Label for linesOptions */
  lineOptionsLabel?: string;

  /** Items counter label */
  itemsCounterLabel?: Array<string>;

  /** Pages counter label */
  pagesCounterLabel?: Array<string>;
}

export const Pagination = ({
  className,
  linesOptions = [],
  data = [],
  itemsCounter = true,
  pagesCounter = true,
  nextAriaLabel = 'Próxima página da tabela',
  previousAriaLabel = 'Página anterior da tabela',
  lineOptionsLabel,
  itemsCounterLabel = ['-', 'de', 'items'],
  pagesCounterLabel = ['de', 'páginas'],
  ariaLabelPaginationNav = 'Paginação'
}: PaginationProps) => {
  const cssPagination = classNames('ama-pagination d-flex align-items-center', className);
  const pageData = usePaginationData(linesOptions[0] || (data.length as string | number), data);
  const context = useContext<TableContextType>(Context);

  useIsomorphicLayoutEffect(() => {
    if (context) {
      context.setValue(pageData);
    }
  }, [pageData?.currentPage, pageData?.contentPerPage, pageData?.currentData]);

  return (
    <nav aria-label={ariaLabelPaginationNav}>
      <ul className={cssPagination}>
        <li className="d-flex align-items-center justify-content-center px-16 align-middle">
          {lineOptionsLabel && (
            <label className="text-medium-normal" id="lines-per-page" htmlFor="ama-lines-selector">
              {lineOptionsLabel}
            </label>
          )}

          <Select
            id="ama-lines-selector"
            className="lines-selector d-inline-flex"
            aria-labelledby="lines-per-page"
            onChange={pageData?.linesOptionChangeHandler}
            disabled={linesOptions.length <= 1}
            defaultValue={linesOptions[0]}
          >
            {linesOptions &&
              linesOptions.map((o) => (
                <option key={useId()} value={o}>
                  {o}
                </option>
              ))}
          </Select>
        </li>
        <li className="d-flex align-items-center justify-content-center px-16">
          <div className="h-100 d-flex align-items-center">
            {itemsCounter && (
              <span className="text-medium-normal px-8">
                {pageData?.startIndex}
                {itemsCounterLabel[0]}
                {pageData?.endIndex} {itemsCounterLabel[1]} {data?.length} {itemsCounterLabel[2]}
              </span>
            )}
            {pagesCounter && (
              <span className="text-medium-normal px-8">
                {pageData?.currentPage} {pagesCounterLabel[0]} {pageData?.totalPageCount} {pagesCounterLabel[1]}
              </span>
            )}
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-center ms-auto">
          <button type="button" onClick={pageData?.gotToPreviousPage} disabled={pageData?.currentPage === 1}>
            <Icon icon="ama-chevron-left" size="xs" alt={previousAriaLabel} />
          </button>
        </li>
        <li className="d-flex align-items-center justify-content-center">
          <button type="button" onClick={pageData?.goToNextPage} disabled={pageData?.currentPage === pageData?.totalPageCount}>
            <Icon icon="ama-chevron-right" size="xs" alt={nextAriaLabel} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
