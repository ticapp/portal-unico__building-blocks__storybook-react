/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
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
  isChecked?: boolean;
  //* * Set state */
  onClick: () => void;
}

export const InputRadio = ({ className, label, inputId, name, isDisabled = false, isChecked = false, onClick }: InputRadioProps) => {
  const radioIcons = {
    disabled: 'ama-radio-disabled-unselected',
    selected: 'ama-radio-selected',
    unselected: 'ama-radio-unselected',
    disabledSelected: 'ama-radio-disabled-selected',
    focus: 'ama-radio-focus',
    selectedFocus: 'ama-radio-selected-focus'
  };

  const [icon, setIcon] = useState(radioIcons.focus);

  const radioRef = useRef(null);

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
    if (!isDisabled) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Space') {
      if (!isChecked) {
        onClick();
      }
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

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });

  return (
    <div onFocus={() => handleFocus()} onBlur={() => handleBlur()} className={inputContainerClassName}>
      <div
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        onClick={handleOnClick}
        aria-hidden="true"
        aria-disabled={isDisabled}
        ref={radioRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <input
          readOnly
          disabled={isDisabled}
          checked={isChecked}
          className="input-radio me-8 d-none"
          type="radio"
          name={name}
          id={inputId}
        />
        <Icon focusable icon={icon} className={iconClassName} />
        <label className="input-label mx-8" htmlFor={inputId}>
          {label}
        </label>
      </div>
    </div>
  );
};
