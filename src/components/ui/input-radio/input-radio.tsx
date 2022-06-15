/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useRadio } from '../../../contexts/input-radio-group-context';
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
}

export const InputRadio = ({ className, label, inputId, isDisabled = false }: InputRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { inputRadioCheckedId, setRadioChecked } = useRadio();

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
    event.preventDefault();
    if (event.code === 'Space' && !isChecked && !isDisabled) {
      setRadioChecked(inputId);
    }
  };

  const handleIcon = () => {
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
  };

  useEffect(() => {
    if (inputRadioCheckedId === inputId) {
      setIsChecked(true);
    }
  }, [inputRadioCheckedId]);

  useEffect(() => {
    handleIcon();
  }, [, isChecked, isDisabled]);

  const inputContainerClassName = classNames('ama-input-radio-container', 'd-flex align-items-center justify-content-start', className);
  const iconClassName = classNames('radio-icon', { disabled: isDisabled });

  return (
    <div
      id={inputId}
      className={inputContainerClassName}
      onKeyDown={handleKeyDown}
      onClick={() => handleOnClick(inputId)}
      aria-checked={isChecked}
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
