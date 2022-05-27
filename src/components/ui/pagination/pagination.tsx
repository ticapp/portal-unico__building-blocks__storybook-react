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

  /** Lines per page */
  linesPage?: number;

  /** Lines Options */
  linesOptions?: SelectOption[];

  /**Data Info*/
  data?: Array<{ [key: string]: string | number | boolean }>;
}

export const Pagination = ({ className, linesOptions = [], linesPage = 3, data, ...props }: PaginationProps) => {
  const cssPagination = classNames('ama-pagination', className);
  let pageData = usePaginationData(linesPage, data);
  const { setValue } = useContext(Context) as any;

  useLayoutEffect(() => {
    if (setValue) {
      setValue(pageData);
    }
  }, [pageData.currentPage, pageData.contentPerPage]);

  return (
    <>
      <BsPagination {...props} className={cssPagination}>
        {/* Todo: div for help know numbers */}
        <li className='px-24'>
          <p>Lines: {pageData.contentPerPage}</p>
          <p>Current page: {pageData.currentPage}</p>
          <p>Total pages: {pageData.totalPageCount}</p>
          <p>Total items: {data?.length}</p>
          <p>
            Item of-to: {pageData.startIndex} - {pageData.endIndex}
          </p>
        </li>
        <li className='px-24'>
          <label className='' id='lines-per-page'>
            Linhas por página:{' '}
          </label>
          <Select
            className='lines-selector'
            labelledby='lines-per-page'
            options={linesOptions}
            onChange={pageData.linesOptionChangeHandler}
            active={linesOptions[0]}
            disabled={linesOptions.length <= 1}
          />
        </li>
        <BsPagination.Prev onClick={pageData.gotToPreviousPage} disabled={pageData.currentPage === 1} />
        <BsPagination.Next onClick={pageData.goToNextPage} disabled={pageData.currentPage === pageData.totalPageCount} />
      </BsPagination>
    </>
  );
};
