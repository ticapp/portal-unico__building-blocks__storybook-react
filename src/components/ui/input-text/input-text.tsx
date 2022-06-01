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
}



export const InputText = ({
    className = '',
    type = 'text',
    placeholder,
    label,
    isDisabled = false,
    ...rest
}: InputTextProps) => {

    const inputId = uuidv4();


    if (isDisabled) {
        const containerClassNames = classNames('ama-input-container-disabled', 'd-flex align-items-start justify-content-center flex-column', className);
        const inputTextClassNames = classNames('input-text-disabled', 'w-100 p-16')

        return (
            <span className={containerClassNames} >
                <label className='mb-8' htmlFor={inputId}>{label}</label>
                <input disabled className={inputTextClassNames} placeholder={placeholder} id={inputId} type='text' {...rest} />
            </span>
        )

    }
    else {
        const containerClassNames = classNames('ama-input-container', 'd-flex align-items-start justify-content-center flex-column', className);
        const inputTextClassNames = classNames('input-text', 'w-100 p-16')

        return (
            <span className={containerClassNames} >
                <label className='mb-8' htmlFor={inputId}>{label}</label>
                <input className={inputTextClassNames} placeholder={placeholder} id={inputId} type='text' {...rest} />
            </span>
        )
    }


}