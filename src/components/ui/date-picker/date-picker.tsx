import classNames from 'classnames';
import React from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import './date-picker.scss';

export interface DatePickerProps extends FormControlProps {
  /** Additional classes for date picker */
  className?: string;
}

export const DatePicker = ({ className = '', ...props }: DatePickerProps) => {
  const classes = classNames('ama-date-picker', className);
  return <Form.Control {...props} type="date" className={classes} />;
};
