import React, { useContext, useLayoutEffect } from 'react';
import './pagination.scss';
import classNames from 'classnames';
import { Pagination as BsPagination, PaginationProps as BsPaginationProps } from 'react-bootstrap';
import { usePaginationData } from '../../hooks';
import { Context } from '../table/table';
import { Select, SelectOption } from '../select';

export interface PaginationProps extends BsPaginationProps {
  /** Add classes to the Card component */
  className?: string;

  /** Lines Options */
  linesOptions?: SelectOption[];

  /**Data Info*/
  data?: Array<{ [key: string]: string | number | boolean }>;
}

export const Pagination = ({ className, linesOptions = [], data, ...props }: PaginationProps) => {
  const cssPagination = classNames('ama-pagination', className);
  let pageData = usePaginationData(linesOptions[0].value, data);
  const { setValue } = useContext(Context) as any;

  useLayoutEffect(() => {
    if (setValue) {
      setValue(pageData);
    }
  }, [pageData.currentPage, pageData.contentPerPage]);

  return (
    <>
      <BsPagination {...props} className={cssPagination}>
        <li className='px-24'>
          <label className='' id='lines-per-page'>
            Linhas por página({pageData.contentPerPage} ):{' '}
          </label>
          <Select
            className='lines-selector d-inline-flex'
            labelledby='lines-per-page'
            options={linesOptions}
            onChange={pageData.linesOptionChangeHandler}
            active={linesOptions[0]}
            disabled={linesOptions.length <= 1}
          />
        </li>
        <li className='px-24'>
          {pageData.startIndex} - {pageData.endIndex} de {data?.length} items
        </li>
        <li className='px-24'>
          {pageData.currentPage} de {pageData.totalPageCount} páginas
        </li>
        <BsPagination.Prev onClick={pageData.gotToPreviousPage} disabled={pageData.currentPage === 1} />
        <BsPagination.Next onClick={pageData.goToNextPage} disabled={pageData.currentPage === pageData.totalPageCount} />
      </BsPagination>
    </>
  );
};
