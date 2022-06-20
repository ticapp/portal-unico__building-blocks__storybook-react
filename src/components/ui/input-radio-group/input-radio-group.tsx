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

  const { addRadios, inputRadioCheckedId, inputRadioValues, setRadioChecked } = useRadio();

  useEffect(() => {
    addRadios(radiosData);
  }, []);

  const getInputCheckedIndex = () => {
    return inputRadioValues.findIndex((radio) => radio.id === inputRadioCheckedId);
  };

  function handleKeyDown(event) {
    const existsNextInputRadio = inputRadioValues[getInputCheckedIndex() + 1];
    const existsPreviousInputRadio = inputRadioValues[getInputCheckedIndex() - 1];

    if (event.key === 'ArrowLeft') {
      const getAtualValue = getInputCheckedIndex();

      if (!existsPreviousInputRadio) {
        setRadioChecked(inputRadioValues[inputRadioValues.length].id);
      } else if (!existsPreviousInputRadio.isDisabled) {
        setRadioChecked(inputRadioValues[getAtualValue - 1].id);
      } else {
        setRadioChecked(inputRadioValues[getAtualValue - 2].id);
      }
    }

    if (event.key === 'ArrowRight') {
      const getAtualValue = getInputCheckedIndex();

      if (!existsNextInputRadio) {
        setRadioChecked(inputRadioValues[0].id);
      } else if (!existsNextInputRadio.isDisabled) {
        setRadioChecked(inputRadioValues[getAtualValue + 1].id);
      } else {
        setRadioChecked(inputRadioValues[getAtualValue + 2].id);
      }
    }

    if (event.key === 'ArrowUp') {
      const getAtualValue = getInputCheckedIndex();

      if (!existsPreviousInputRadio) {
        setRadioChecked(inputRadioValues[inputRadioValues.length - 1].id);
      } else if (!existsPreviousInputRadio.isDisabled) {
        setRadioChecked(inputRadioValues[getAtualValue - 1].id);
      } else {
        setRadioChecked(inputRadioValues[getAtualValue - 2].id);
      }
    }
    if (event.key === 'ArrowDown') {
      const getAtualValue = getInputCheckedIndex();

      if (!existsNextInputRadio) {
        setRadioChecked(inputRadioValues[0].id);
      } else if (!existsNextInputRadio.isDisabled) {
        setRadioChecked(inputRadioValues[getAtualValue + 1].id);
      } else {
        setRadioChecked(inputRadioValues[getAtualValue + 2].id);
      }
    }
  }

  return (
    <div
      className={inputRadioGroupClassName}
      aria-activedescendant={inputRadioCheckedId}
      role="radiogroup"
      onFocus={() => {
        setRadioChecked(inputRadioValues[0].id);
      }}
      tabIndex={0}
      aria-labelledby={ariaLabelledby}
      onKeyDown={handleKeyDown}
    >
      {inputRadioValues &&
        inputRadioValues.map((radio, index) => (
          <InputRadio key={uuidv4()} tabIndex={index} inputId={radio.id} isDisabled={radio.isDisabled} label={radio.label} />
        ))}
    </div>
  );
};
