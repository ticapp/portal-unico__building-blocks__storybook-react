/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';
import './input-radio.scss';

export interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Add classes to the InputRadio component */
  className?: string;
  /** Set the value of input */
  value: string;
  /** Set input label */
  label?: string;
  /** Set id */
  inputId: string;
  /** Set input name */
  name: string;
  /** Set if is disable */
  isDisabled?: boolean;
}

export const InputRadio = ({ className, value, label, inputId, name, isDisabled, ...rest }: InputRadioProps) => {
  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);

  return (
    <div className={inputContainerClassName}>
      <input {...rest} disabled={isDisabled} className="input-radio me-8" type="radio" name={name} id={inputId} value={value} />
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};
