import React, { ReactNode } from 'react';
import './pagination.scss';
import classNames from 'classnames';
import { Pagination as BsPagination, PaginationProps as BsPaginationProps } from 'react-bootstrap';

export interface PaginationProps extends BsPaginationProps {
  /** Add classes to the Card component */
  className?: string;

  /** Lines per page */
  linesPage: 5 | 10 | 50;
}

export const Pagination = ({ className, ...props }: PaginationProps) => {
  const cssPagination = classNames('ama-pagination', className);
  return (
    <BsPagination {...props} className={cssPagination}>
      <BsPagination.Prev />
      <BsPagination.Next />
    </BsPagination>
  );
};
