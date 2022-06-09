import classNames from 'classnames';
import React, { InputHTMLAttributes, Ref } from 'react';
import './input-text.scss';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Add classes to the InputText component */
  className?: string;
  /** Set the placeholder of input */
  placeholder?: string;
  /** Set the value of input */
  value?: string;
  /** Set input label */
  label?: string;
  /** Set input label id */
  labeledBy?: string;
  /** Set if is disable */
  isDisabled?: boolean;
  /** Set input name */
  name?: string;
  /** Set input id */
  inputId?: string;
  //* * Set input type */
  type?: string;
}

const InnerInputText = (
  { className, placeholder, label, inputId, name, type = 'text', isDisabled = false, labeledBy, ...rest }: InputTextProps,
  ref: Ref<HTMLInputElement>
) => {
  const containerDisabledClassNames = classNames(
    'ama-input-container',
    'd-flex align-items-start justify-content-center flex-column',
    className,
    { disabled: isDisabled }
  );

  const inputTextDisabledClassNames = classNames('input-text', 'w-100 p-16');

  return (
    <div className={containerDisabledClassNames}>
      {label && (
        <label className="mb-8" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        disabled={isDisabled}
        name={name}
        className={inputTextDisabledClassNames}
        placeholder={placeholder}
        aria-labelledby={labeledBy}
        id={inputId}
        type={type}
        {...rest}
      />
    </div>
  );
};

export const InputText = React.forwardRef(InnerInputText);
