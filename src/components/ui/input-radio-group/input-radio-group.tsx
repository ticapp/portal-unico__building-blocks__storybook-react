/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRadio } from '../../../contexts/input-radio-group-context';
import { InputRadio } from '../input-radio/input-radio';
import './input-radio-group.scss';

export interface InputRadioData {
  id: string;
  isChecked?: boolean;
  label: string;
  isDisabled?: boolean;
}

export interface InputRadioGroupProps {
  /** Add classes to the InputRadio component */
  className?: string;
  // ** Set aria-labelledby */
  ariaLabelledby: string;
  //* * Set radios */
  radiosData: Array<InputRadioData>;
}

export const InputRadioGroup = ({ className, radiosData, ariaLabelledby }: InputRadioGroupProps) => {
  const inputRadioGroupClassName = classNames('ama-input-radio-group', className);

  const { addRadios, inputRadioCheckedId, inputRadioValues } = useRadio();

  useEffect(() => {
    addRadios(radiosData);
  }, []);

  return (
    <div
      className={inputRadioGroupClassName}
      aria-activedescendant={inputRadioCheckedId}
      role="radiogroup"
      tabIndex={0}
      aria-labelledby={ariaLabelledby}
    >
      {inputRadioValues &&
        inputRadioValues.map((radio) => <InputRadio key={uuidv4()} inputId={radio.id} isDisabled={radio.isDisabled} label={radio.label} />)}
    </div>
  );
};
