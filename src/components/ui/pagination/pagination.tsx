import React, { useContext, useLayoutEffect } from 'react';
import './pagination.scss';
import classNames from 'classnames';
import { Pagination as BsPagination, PaginationProps as BsPaginationProps } from 'react-bootstrap';
import { usePaginationData } from '../../hooks';
import { Context } from '../table/table';

export interface PaginationProps extends BsPaginationProps {
  /** Add classes to the Card component */
  className?: string;

  /** Lines per page */
  linesPage?: 5 | 10 | 50 | number;

  /**Data Info*/
  data: Array<{ [key: string]: string | number | boolean }>;
}

export const Pagination = ({ className, linesPage = 2, data, ...props }: PaginationProps) => {
  const cssPagination = classNames('ama-pagination', className);
  const pageData = usePaginationData(linesPage, data);
  const { setValue } = useContext(Context) as any;
  useLayoutEffect(() => {
    if (setValue) {
      setValue(pageData);
    }
  }, [pageData.currentPage]);
  return (
    <>
      <BsPagination {...props} className={cssPagination}>
        {/* Todo: div for help know numbers */}
        <div>
          <p>Lines: {pageData.contentPerPage}</p>
          <p>Current page: {pageData.currentPage}</p>
          <p>Total pages: {pageData.totalPageCount}</p>
          <p>Total items: {data.length}</p>
          <p>
            Item of-to: {pageData.startIndex} - {pageData.endIndex}
          </p>
        </div>
        <BsPagination.Prev onClick={pageData.gotToPreviousPage} disabled={pageData.currentPage === 1} />
        <BsPagination.Next onClick={pageData.goToNextPage} disabled={pageData.currentPage === pageData.totalPageCount} />
      </BsPagination>
    </>
  );
};
