/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Icon } from '../icon';
import './input-radio.scss';

export interface InputRadioProps {
  /** Add classes to the InputRadio component */
  className?: string;
  /** Set input label */
  label?: string;
  /** Set id */
  inputId: string;
  /** Set if is disable */
  isDisabled?: boolean;
  /** Set if is checked */
  isChecked: boolean;
  //* * Set state */
  onClick: (e: string) => void;
}

export const InputRadio = ({ className, label, inputId, isChecked, isDisabled = false, onClick }: InputRadioProps) => {
  const [radioIsChecked, setRadioIsChecked] = useState(isChecked);

  const radioIcons = {
    disabled: 'ama-radio-disabled-unselected',
    selected: 'ama-radio-selected',
    unselected: 'ama-radio-unselected',
    disabledSelected: 'ama-radio-disabled-selected',
    focus: 'ama-radio-focus',
    selectedFocus: 'ama-radio-selected-focus'
  };

  const [icon, setIcon] = useState(radioIcons.focus);

  const handleFocus = () => {
    if (isChecked && !isDisabled) {
      setIcon(radioIcons.selectedFocus);
    } else if (!isChecked && !isDisabled) {
      setIcon(radioIcons.focus);
    }
  };

  const handleBlur = () => {
    if (isChecked && !isDisabled) {
      setIcon(radioIcons.selected);
    } else if (!isChecked && !isDisabled) {
      setIcon(radioIcons.unselected);
    }
  };

  const handleOnClick = (e: string) => {
    if (!isDisabled) {
      onClick(e);
    }
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.code === 'Space' && !isChecked && !isDisabled) {
      onClick(inputId);
    }
  };

  useEffect(() => {
    if (isDisabled) {
      setIcon(isChecked ? radioIcons.disabledSelected : radioIcons.disabled);
    } else if (isChecked) {
      setIcon(radioIcons.selected);
    } else {
      setIcon(radioIcons.unselected);
    }
  }, [isChecked, isDisabled]);

  useEffect(() => {
    if (isChecked) {
      setRadioIsChecked(true);
      setIcon(radioIcons.selected);
    } else {
      setRadioIsChecked(false);
      setIcon(radioIcons.unselected);
    }
  }, []);

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });

  return (
    <div
      id={inputId}
      className={inputContainerClassName}
      onKeyDown={handleKeyDown}
      onClick={() => handleOnClick(inputId)}
      aria-checked={radioIsChecked}
      tabIndex={0}
      onBlur={handleBlur}
      onFocus={handleFocus}
      role="radio"
    >
      <Icon icon={icon} className={iconClassName} />

      <label className="input-labe mx-8" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};
