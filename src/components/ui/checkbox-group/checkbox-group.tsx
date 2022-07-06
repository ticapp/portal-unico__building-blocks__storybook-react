import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Checkbox, CheckboxProps } from '../checkbox/checkbox';

export interface CheckboxGroupProps extends HTMLAttributes<HTMLElement> {
  /** Set aria-labelledby */
  ariaLabelledby?: string;
  /**  Set aria-activedescendant */
  ariaActiveDescendant?: string;
  /** Data list of a checkbox in the group */
  data: CheckboxProps[];
  /** Callback function that is called when there is a state change */
  onCheckboxGroupChanged?: (checkboxList: CheckboxProps[]) => void;
}

export const CheckboxGroup = ({ ariaLabelledby, ariaActiveDescendant, data, onCheckboxGroupChanged }: CheckboxGroupProps) => {
  const [checkboxList, setcheckboxList] = useState(data);

  const updateCheckList = (index: number, state: boolean) => {
    setcheckboxList(() => {
      return checkboxList.map((item: CheckboxProps, i: number) => {
        if (index === i) {
          return { ...item, checked: state };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    onCheckboxGroupChanged?.(checkboxList);
  }, [checkboxList]);

  useEffect(() => {
    setcheckboxList(() => {
      return data.map((item: CheckboxProps) => {
        if (item.checked === undefined) {
          return { checked: false, ...item };
        }
        return item;
      });
    });
    return () => {
      setcheckboxList([]);
    };
  }, []);

  return (
    <div tabIndex={-1} aria-labelledby={ariaLabelledby} aria-label="checkbox group" aria-activedescendant={ariaActiveDescendant}>
      {data.map((val, index) => {
        return (
          <Checkbox
            key={Number(index)}
            onCheckedChanged={(state) => {
              updateCheckList(index, state);
            }}
            label={val.label}
            checked={val.checked}
            className={val.className}
            disabled={val.disabled}
            labelPosition={val.labelPosition}
            size={val.size}
          />
        );
      })}
    </div>
  );
};
