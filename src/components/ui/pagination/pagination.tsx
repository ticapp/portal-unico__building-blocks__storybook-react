import React, { ReactNode, useContext, useLayoutEffect } from 'react';
import './pagination.scss';
import classNames from 'classnames';
import { Pagination as BsPagination, PaginationProps as BsPaginationProps } from 'react-bootstrap';
import { usePaginationData } from '../../hooks';
import { Context } from '../table/table';
import { Select, SelectOption } from '../select';
import { Icon } from '../icon';
import { TableContextType } from '../table';

export interface PaginationProps extends BsPaginationProps {
  /** Add classes to the Card component */
  className?: string;

  /** Lines Options */
  linesOptions?: SelectOption[];

  /** Data Info*/
  data?: Array<{ [key: string]: string | number | boolean | ReactNode }>;

  /** Show/Hide label items counter */
  itemsCounter?: boolean;

  /**Show/Hide label pages counter */
  pagesCounter?: boolean;
}

export const Pagination = ({ className, linesOptions = [], data = [], itemsCounter = true, pagesCounter = true, ...props }: PaginationProps) => {
  const cssPagination = classNames('ama-pagination', className);
  let pageData = usePaginationData(linesOptions[0].value, data);
  const context = useContext<TableContextType>(Context);

  useLayoutEffect(() => {
    if (context) {
      context.setValue(pageData);
    }
  }, [pageData?.currentPage, pageData?.contentPerPage]);

  return (
    <>
      <BsPagination {...props} className={cssPagination}>
        <li className='px-16 align-middle'>
          <label className='text-medium-normal' id='lines-per-page'>
            Linhas por página:
          </label>
          <Select
            className='lines-selector d-inline-flex'
            labelledby='lines-per-page'
            options={linesOptions}
            onChange={pageData?.linesOptionChangeHandler}
            active={linesOptions[0]}
            disabled={linesOptions.length <= 1}
            size='xs'
          />
        </li>
        <li className='px-16'>
          <div className='h-100 d-flex align-items-center'>
            {itemsCounter && (
              <span className='text-medium-normal px-8'>
                {pageData?.startIndex} - {pageData?.endIndex} de {data?.length} items
              </span>
            )}
            {pagesCounter && (
              <span className='text-medium-normal px-8'>
                {pageData?.currentPage} de {pageData?.totalPageCount} páginas
              </span>
            )}
          </div>
        </li>
        <BsPagination.Prev className='ms-auto' onClick={pageData?.gotToPreviousPage} disabled={pageData?.currentPage === 1}>
          <Icon icon='ama-chevron-left' aria-label='Anterior' size='xs'></Icon>
        </BsPagination.Prev>
        <BsPagination.Next onClick={pageData?.goToNextPage} disabled={pageData?.currentPage === pageData?.totalPageCount}>
          <Icon icon='ama-chevron-right' aria-label='Próximo' size='xs'></Icon>
        </BsPagination.Next>
      </BsPagination>
    </>
  );
};
