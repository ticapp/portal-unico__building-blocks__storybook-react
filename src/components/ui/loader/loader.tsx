import React from 'react';
import './loader.scss';
import classNames from 'classnames';

export interface LoaderProps {
  /** Add classes to the Footer component */
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  const cssLoader = classNames('ama-loader', className);
  return <div className={cssLoader} />;
};
