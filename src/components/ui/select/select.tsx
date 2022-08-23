import classNames from 'classnames';
import React from 'react';
import { FormSelect, FormSelectProps } from 'react-bootstrap';
import './select.scss';

export interface SelectProps extends FormSelectProps {
  /** Aditional classnames */
  className?: string;
}

const Select = ({ className, ...props }: SelectProps) => {
  const classes = classNames('ama-select', className);
  return <FormSelect className={classes} {...props} />;
};

export { Select };
