// import classNames from 'classnames';
import classNames from 'classnames';
import React, { HTMLAttributes, useState, useRef } from 'react';
import { Stack } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '../icon';
import './checkbox.scss';

export interface CheckboxProps extends HTMLAttributes<HTMLElement> {
  /** Adds a class to the Checkbox component */
  className?: string;
  /** If true the checkbox will appeared checked */
  checked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Text that will appear in front or behind the Checkbox */
  label: string;
  /** Label position in relation to checkbox */
  labelPosition?: 'before' | 'after';
  /** Chevron checkbox size */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export const Checkbox = ({ className, disabled = false, label, labelPosition = 'after', size = 'md', ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked ?? false);
  const [focused, setFocused] = useState(false);
  const cssCheckbox = classNames('ama-checkbox', className);
  const labelId = uuidv4();
  const checkboxId = uuidv4();

  const focusRef: any = useRef(null);

  const focus = (e: any) => {
    if (!disabled) {
      setChecked(!checked);
      focusRef.current.focus();
      e.preventDefault();
    }
  };

  const onFocusHandler = (focusState: boolean) => {
    if (!disabled) {
      setFocused(focusState);
    }
  };

  const iconBuilder = () => {
    if (disabled) {
      return checked ? (
        <Icon icon="ama-checkbox-checked-disabled" alt="checkbox" size={size} />
      ) : (
        <Icon icon="ama-checkbox-disabled" alt="checkbox" size={size} />
      );
    }
    if (focused) {
      return checked ? (
        <Icon icon="ama-checkbox-checked-focus" alt="checkbox" size={size} />
      ) : (
        <Icon icon="ama-checkbox-focus" alt="checkbox" size={size} />
      );
    }
    return checked ? (
      <Icon icon="ama-checkbox-checked" alt="checkbox" size={size} />
    ) : (
      <Icon icon="ama-checkbox" alt="checkbox" size={size} />
    );
  };

  return (
    <div className={cssCheckbox}>
      <Stack direction="horizontal">
        <input
          type="checkbox"
          checked={checked}
          ref={focusRef}
          onFocus={() => onFocusHandler(true)}
          onBlur={() => onFocusHandler(false)}
          disabled={disabled}
          aria-label="checkbox"
        />
        {labelPosition === 'before' && (
          <label id={labelId} htmlFor={checkboxId}>
            {label}
          </label>
        )}
        <div className="icons" id={checkboxId} onMouseDown={focus} role="none">
          {iconBuilder()}
        </div>
        {labelPosition === 'after' && (
          <label id={labelId} htmlFor={checkboxId}>
            {label}
          </label>
        )}
      </Stack>
    </div>
  );
};
