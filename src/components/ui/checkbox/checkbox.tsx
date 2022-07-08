import classNames from 'classnames';
import React, { HTMLAttributes, MouseEvent, KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { Icon } from '../icon';
import './checkbox.scss';

export interface CheckboxProps extends HTMLAttributes<HTMLElement> {
  /** Add classes to the Checkbox component */
  className?: string;
  /** Set aria-label */
  ariaLabel?: string;
  /** If true the checkbox will appeared checked */
  checked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Text that will appear in front or behind the Checkbox */
  label: string;
  /** Callback function that is called when there is a state change */
  onCheckedChanged?: (state: boolean) => void;
  /** Label position in relation to checkbox */
  labelPosition?: 'before' | 'after';
  /** Chevron checkbox size */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export const Checkbox = ({
  className,
  ariaLabel,
  disabled = false,
  label,
  labelPosition = 'after',
  size = 'md',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked ?? false);
  const [focused, setFocused] = useState(false);
  const cssCheckbox = classNames('ama-checkbox', className);
  const labelId = useId();
  const checkboxId = useId();

  const focusRef = useRef<HTMLInputElement>(null);

  const focus = (e: MouseEvent | KeyboardEvent) => {
    if (!disabled) {
      setChecked(!checked);
      focusRef.current?.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (checked !== (props.checked ?? false)) {
      props.onCheckedChanged?.(checked);
    }
  }, [checked]);

  const handleSpace = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === ' ') {
      focus(e);
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
          id={checkboxId}
          onClick={focus}
          type="checkbox"
          checked={checked}
          ref={focusRef}
          onFocus={() => onFocusHandler(true)}
          onBlur={() => onFocusHandler(false)}
          disabled={disabled}
          aria-label={ariaLabel}
          onKeyDown={handleSpace}
          onChange={() => null}
        />
        <div className={`ordered-items ${labelPosition} d-flex align-items-center`}>
          <div className="icons" id={checkboxId} onMouseDown={focus} role="none">
            {iconBuilder()}
          </div>
          <label id={labelId} htmlFor={checkboxId}>
            {label}
          </label>
        </div>
      </Stack>
    </div>
  );
};
