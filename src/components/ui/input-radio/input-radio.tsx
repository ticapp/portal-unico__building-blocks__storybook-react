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
  /** Set input name */
  name: string;
  /** Set if is disable */
  isDisabled?: boolean;
  /** Set if is checked */
  checkedRadio: string;
  //* * Set state */
  onClick: () => void;
}

export const InputRadio = ({ className, label, inputId, name, isDisabled = false, checkedRadio, onClick }: InputRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);

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

  const handleOnClick = () => {
    console.log('test');
    if (!isDisabled) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Space' && !isChecked && !isDisabled) {
      onClick();
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
    if (checkedRadio === name) {
      setIsChecked(true);
    }
  }, [checkedRadio]);

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });
  const containerIconClassName = classNames('radio-icon-container');

  return (
    <li
      id={inputId}
      className={inputContainerClassName}

      onKeyDown={handleKeyDown}
    >
      <div
        role="radio"
        onClick={() => handleOnClick()}
        aria-disabled={isDisabled}
        onBlur={handleBlur}
        onFocus={handleFocus}
        aria-checked={isChecked}
        tabIndex={0}
        className={containerIconClassName}
      >
        <Icon focusable icon={icon} className={iconClassName} />
      </div>

      <label className="input-labe mx-8" htmlFor={inputId}>
        {label}
      </label>
    </li>
  );
};
