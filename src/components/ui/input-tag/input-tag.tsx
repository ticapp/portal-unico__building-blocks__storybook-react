import classNames from 'classnames';
import React from 'react';
import { Select } from '../..';
import { SelectOption } from '../select';
import './input-tag.scss';

export interface InputTagOption {
  /** Value of the autocomplete option */
  value: string;
  /** Label of the autocomplete option */
  label: string;
}

export interface InputTagProps {
  /** Add classes to the Accordion component */
  className?: string;
  /** Set input label */
  labeledBy?: string;
  /** Set the placeholder of input */
  placeholder?: string;
  /** Set autocomplete options */
  options: InputTagOption[];
  /** On change event */
  onChange?: (val: InputTagOption[]) => void;
}

export const InputTag = ({ className, labeledBy, placeholder, options, onChange }: InputTagProps) => {
  const classes = classNames('ama-autocomplete', className);

  const onSelectChangeHandler = (val: SelectOption | SelectOption[]) => {
    if (!Array.isArray(val)) {
      return;
    }

    onChange?.(
      val.map(
        (v) =>
          ({
            label: v.label,
            value: v.value
          } as InputTagOption)
      )
    );
  };

  const selectOptions = options.map(
    (o) =>
      ({
        ...o
      } as SelectOption)
  );

  return (
    <Select
      multiSelection
      className={classes}
      labelledby={labeledBy}
      placeholder={placeholder}
      searchable={false}
      options={selectOptions}
      onChange={onSelectChangeHandler}
    />
  );
};
