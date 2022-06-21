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
  //* *Set next input radio */
  nextInputRadio: () => void;
  //* *Set previous input radio */
  previousInputRadio: () => void;
}

export const InputRadio = ({
  className,
  label,
  inputId,
  isDisabled = false,
  index,
  nextInputRadio,
  previousInputRadio
}: InputRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [atualIndex, setAtualIndex] = useState(-1);

  const { inputRadioCheckedId, setRadioChecked } = useRadio();

  const inputRadioRef = useRef<HTMLInputElement>(null);

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
    if (event.key === 'ArrowLeft') {
      previousInputRadio();
    }

    if (event.key === 'ArrowRight') {
      nextInputRadio();
    }

    if (event.key === 'ArrowUp') {
      previousInputRadio();
    }
    if (event.key === 'ArrowDown') {
      nextInputRadio();
    }
  };

  useMemo(() => {
    if (!isDisabled) {
      if (isChecked && !isFocused) {
        setIcon(radioIcons.selected);
      }
      if (!isChecked && !isFocused) {
        setIcon(radioIcons.unselected);
      }
      if (isChecked && isFocused) {
        setIcon(radioIcons.selectedFocus);
      }
      if (!isChecked && isFocused) {
        setIcon(radioIcons.focus);
      }
    }

    if (isDisabled) {
      if (isChecked) {
        setIcon(radioIcons.disabledSelected);
      } else {
        setIsChecked(false);
        setIcon(radioIcons.disabled);
      }
    }
  }, [isChecked, isDisabled, isFocused]);

  useMemo(() => {
    if (isChecked) {
      setAtualIndex(0);

      return;
    }

    if (index === 0 && !inputRadioCheckedId) {
      setAtualIndex(0);

      return;
    }

    setAtualIndex(-1);
  }, [isChecked]);

  useEffect(() => {
    if (inputRadioCheckedId === inputId) {
      setIsChecked(true);
    }
  }, [inputRadioCheckedId]);

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
      tabIndex={atualIndex}
      onBlur={handleBlur}
      onFocus={handleFocus}
      aria-label="radio group"
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
