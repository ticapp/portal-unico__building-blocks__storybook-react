/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React from 'react';
import './input-radio-group.scss';

export interface InputRadioGroupProps {
  /** Add classes to the InputRadio component */
  className?: string;
  /** Add children */
  children?: React.ReactNode;
  //** Set Radio checked */
  radioCheckedId: string;
  // ** Set aria-labelledby */
  ariaLabelledby: string;
}

export const InputRadioGroup = ({ className, children,  radioCheckedId, ariaLabelledby }: InputRadioGroupProps) => {


  const inputRadioGroupClassName = classNames('ama-input-radio-group', className);

  return (
    <ul 
      className={inputRadioGroupClassName}
      aria-activedescendant={radioCheckedId}
      role="radiogroup"
      tabIndex={0}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </ul>
  );
};
