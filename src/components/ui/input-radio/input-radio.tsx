/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
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
  checkedRadio: string;
  //* * Set state */
  onClick: (e: string) => void;
  //* * Set tabIndex */
  tabIndex: number;
}

export const InputRadio = ({ className, label, inputId, isDisabled = false, tabIndex, checkedRadio, onClick }: InputRadioProps) => {
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

  const verifyTabIndex = useMemo(() => {
    if (tabIndex === 0) {
      return 1;
    }
    if (tabIndex >= 1) {
      return tabIndex + 1;
    }
    return tabIndex;
  }, [tabIndex]);

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

  const handleKeyDown = (e) => {
    if (e.code === 'Space' && !isChecked && !isDisabled) {
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
    if (checkedRadio === inputId) {
      setIsChecked(true);
    }
  }, [checkedRadio]);

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });

  return (
    <div
      id={inputId}
      className={inputContainerClassName}
      onKeyDown={handleKeyDown}
      onClick={() => handleOnClick(inputId)}
      aria-checked={isChecked}
      tabIndex={verifyTabIndex}
      onBlur={handleBlur}
      onFocus={handleFocus}
      role="radio"
    >
      <Icon focusable icon={icon} className={iconClassName} />

      <label className="input-labe mx-8" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};
