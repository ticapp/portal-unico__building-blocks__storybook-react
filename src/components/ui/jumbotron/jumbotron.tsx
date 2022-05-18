import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface JumbotronProps {
  /** Add classes to the Jumbotron component */
  className?: string;

  /** Inner childs of the component to be rendered */
  children?: ReactNode;
}

export const Jumbotron = ({ className, children, ...props }: JumbotronProps) => {
  const cssJumbotron = classNames('ama-jumbotron', className);
  return (
    <Jumbotron className={cssJumbotron} {...props}>
      {children}
    </Jumbotron>
  );
};
