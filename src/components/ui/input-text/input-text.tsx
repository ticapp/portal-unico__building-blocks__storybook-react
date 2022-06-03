import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './input-text.scss';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Add classes to the InputText component */
    className?: string;
    /** Set the placeholder of input */
    placeholder: string;
    /** Set the value of input */
    value: string;
    /** Set input label */
    label?: string;
    /** Set if is disable */
    isDisabled?: boolean;
    /** Set input name */
    name: string;
}

const InputTextDisabled = ({ className, placeholder, label, name, ...rest }: InputTextProps) => {
    const inputId = uuidv4();

    const containerClassNames = classNames('ama-input-container-disabled', 'd-flex align-items-start justify-content-center flex-column', className);
    const inputTextClassNames = classNames('input-text-disabled', 'w-100 p-16')

    return (
        <span className={containerClassNames} >
            {label && <label className='mb-8' htmlFor={inputId}>{label}</label>}
            <input name={name} disabled className={inputTextClassNames} placeholder={placeholder} id={inputId} type='text' {...rest} />
        </span>
    )

}

const InputTextEnabled = ({ className, placeholder, label, name, ...rest }: InputTextProps) => {
    const inputId = uuidv4();

    const containerDisabledClassNames = classNames('ama-input-container', 'd-flex align-items-start justify-content-center flex-column', className);
    const inputTextDisabledClassNames = classNames('input-text', 'w-100 p-16')

    return (
        <span className={containerDisabledClassNames}>
            {label && <label className='mb-8' htmlFor={inputId}>{label}</label>}
            <input name={name} className={inputTextDisabledClassNames} placeholder={placeholder} id={inputId} type='text' {...rest} />
        </span>
    )
}
export const InputText = ({
    className = '',
    type = 'text',
    placeholder,
    label,
    name,
    isDisabled = false,
    ...rest
}: InputTextProps) => {


    if (isDisabled) {
        return (
            <InputTextDisabled {...rest} label={label} name={name} placeholder={placeholder} />
        )
    }
    else {
        return (
            <InputTextEnabled {...rest} label={label} name={name} placeholder={placeholder} />
        )
    }


}