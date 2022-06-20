/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRadio } from '../../../contexts/input-radio-group-context';
import { useOutsideElementClick } from '../../hooks';
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
  /** Set component index */
  index?: number;
}

export const InputRadio = ({ className, label, inputId, isDisabled = false, index }: InputRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { inputRadioCheckedId, setRadioChecked } = useRadio();

  const inputRadioRef = useRef(null);

  function handleOutsideClick() {
    setIsFocused(false);
  }

  useOutsideElementClick(inputRadioRef, () => handleOutsideClick());

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
    setIsFocused(true);
    if (!isDisabled && !isChecked) {
      setRadioChecked(inputId);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOnClick = (id: string) => {
    if (!isDisabled && !isChecked) {
      setRadioChecked(id);
    }
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space' && !isChecked && !isDisabled) {
      setRadioChecked(inputId);
    }
  };

  useMemo(() => {
    if (!isFocused && !isDisabled) {
      isChecked ? setIcon(radioIcons.selected) : setIcon(radioIcons.unselected);
    }

    if (isFocused && !isDisabled) {
      isChecked ? setIcon(radioIcons.selectedFocus) : setIcon(radioIcons.focus);
    }

    if (isDisabled) {
      if (isChecked) {
        setIsChecked(true);
        setIcon(radioIcons.disabledSelected);
      } else {
        setIsChecked(false);
        setIcon(radioIcons.disabled);
      }
    }
  }, [isChecked, isDisabled, isFocused]);

  useEffect(() => {
    if (inputRadioCheckedId === inputId) {
      setIsFocused(true);
      setIsChecked(true);
    }
  }, [inputRadioCheckedId]);

  const verifyIndex = () => {
    if (isChecked) {
      return 0;
    }
    if (index === 0 && !inputRadioCheckedId) {
      return 0;
    }

    return -1;
  };

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });

  return (
    <div
      id={inputId}
      className={inputContainerClassName}
      ref={inputRadioRef}
      onKeyDown={handleKeyDown}
      onClick={() => handleOnClick(inputId)}
      aria-checked={isChecked}
      tabIndex={verifyIndex()}
      onBlur={handleBlur}
      onFocus={handleFocus}
      role="radio"
      aria-disabled={isDisabled}
    >
      <Icon icon={icon} className={iconClassName} />
      <label className="input-label mx-8" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};
