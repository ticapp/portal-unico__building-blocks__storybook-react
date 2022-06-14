/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UseRadio } from '../../../contexts/input-radio-group-context';
import { InputRadio } from '../input-radio/input-radio';
import './input-radio-group.scss';

export interface InputRadioData {
  id: string;
  isChecked: boolean;
  label: string;
  isDisabled?: boolean;
  onClick: (e: string) => void;
}

export interface InputRadioGroupProps {
  /** Add classes to the InputRadio component */
  className?: string;
  //* * Set Radio checked */
  radioCheckedId: string;
  // ** Set aria-labelledby */
  ariaLabelledby: string;
  //* * Set radios */
  radiosData: Array<InputRadioData>;
}

export const InputRadioGroup = ({ className, radiosData, radioCheckedId, ariaLabelledby }: InputRadioGroupProps) => {
  const inputRadioGroupClassName = classNames('ama-input-radio-group', className);

  const { inputRadioChecked, setRadioChecked, addRadios } = UseRadio();

  useEffect(() => {
    addRadios(radiosData);
  }, []);

  return (
    <div
      className={inputRadioGroupClassName}
      aria-activedescendant={radioCheckedId}
      role="radiogroup"
      tabIndex={0}
      aria-labelledby={ariaLabelledby}
    >
      {inputRadioChecked &&
        inputRadioChecked.map((radio) => (
          <InputRadio
            key={uuidv4()}
            inputId={radio.id}
            isChecked={radio.isChecked}
            onClick={() => setRadioChecked(radio.id)}
            isDisabled={radio.isDisabled}
            label={radio.label}
          />
        ))}
    </div>
  );
};
