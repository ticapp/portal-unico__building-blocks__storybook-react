/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { InputRadio } from './input-radio';

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
  //* * Set if is disabled */
  isDisabled?: boolean;
}

export const InputRadioGroup = ({ className, radiosData, ariaLabelledby, isDisabled }: InputRadioGroupProps) => {
  const [inputRadioValues, setInputRadioValues] = useState<Array<InputRadioData>>([]);
  const [inputRadioCheckedId, setInputRadioCheckedId] = useState<string>('');
  const inputRadioGroupClassName = classNames('ama-input-radio-group', className);

  useEffect(() => {
    const setInitialCheckedValue = radiosData.map((data) => {
      return {
        ...data,
        isChecked: false
      };
    });

    setInputRadioValues([...setInitialCheckedValue]);
  }, [radiosData]);

  const setRadioChecked = (radioId: string) => {
    const radioToCheckedIndex = inputRadioValues.findIndex((radio) => radio.id === radioId && !radio.isChecked);
    const oldRadioCheckedIndex = inputRadioValues.findIndex((radio) => radio.id !== radioId && radio.isChecked);

    if (inputRadioValues[radioToCheckedIndex]) {
      inputRadioValues[radioToCheckedIndex].isChecked = true;
      setInputRadioCheckedId(radioId);
    }
    if (inputRadioValues[oldRadioCheckedIndex]) {
      inputRadioValues[oldRadioCheckedIndex].isChecked = false;
    }

    setInputRadioValues([...inputRadioValues]);
  };

  const getInputCheckedIndex = () => {
    return inputRadioValues.findIndex((radio) => radio.id === inputRadioCheckedId);
  };

  const nextInputRadio = () => {
    const getAtualValue = getInputCheckedIndex();
    const existsNextInputRadio = inputRadioValues[getAtualValue + 1];

    if (!existsNextInputRadio) {
      setRadioChecked(inputRadioValues[0].id);
    } else if (existsNextInputRadio && !existsNextInputRadio.isDisabled) {
      setRadioChecked(inputRadioValues[getAtualValue + 1].id);
    } else {
      setRadioChecked(inputRadioValues[getAtualValue + 2].id);
    }
  };

  const previousInputRadio = () => {
    const getAtualValue = getInputCheckedIndex();
    const existsPreviousInputRadio = inputRadioValues[getAtualValue - 1];

    if (!existsPreviousInputRadio) {
      setRadioChecked(inputRadioValues[inputRadioValues.length - 1].id);
    } else if (existsPreviousInputRadio && !existsPreviousInputRadio.isDisabled) {
      setRadioChecked(inputRadioValues[getAtualValue - 1].id);
    } else {
      setRadioChecked(inputRadioValues[getAtualValue - 2].id);
    }
  };

  return (
    <div
      className={inputRadioGroupClassName}
      aria-activedescendant={inputRadioCheckedId}
      role="radiogroup"
      tabIndex={-1}
      aria-labelledby={ariaLabelledby}
      aria-label="input radio group"
    >
      {inputRadioValues &&
        inputRadioValues.map((radio, index) => (
          <InputRadio
            index={index}
            nextInputRadio={nextInputRadio}
            previousInputRadio={previousInputRadio}
            key={uuidv4()}
            setRadioChecked={setRadioChecked}
            inputRadioCheckedId={inputRadioCheckedId}
            inputId={radio.id}
            isDisabled={isDisabled}
            label={radio.label}
          />
        ))}
    </div>
  );
};
