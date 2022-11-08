import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Checkbox, CheckboxProps } from '../checkbox/checkbox';

export interface CheckboxGroupProps extends HTMLAttributes<HTMLElement> {
  /** Set aria-labelledby */
  ariaLabelledby?: string;
  /** Set aria-activedescendant */
  ariaActiveDescendant?: string;
  /** Set aria-label */
  ariaLabel?: string;
  /** Data list of a checkbox in the group */
  data: CheckboxProps[];
  /** Callback function that is called when there is a state change */
  onCheckboxGroupChanged?: (checkboxList: CheckboxProps[]) => void;
}

export const CheckboxGroup = ({ ariaLabelledby, ariaActiveDescendant, ariaLabel, data, onCheckboxGroupChanged }: CheckboxGroupProps) => {
  const [checkboxList, setCheckboxList] = useState(data);

  const updateCheckList = (index: number, state: boolean) => {
    setCheckboxList((list: CheckboxProps[]) => {
      const newList = [...list];
      newList[index].checked = state;
      return newList;
    });
  };

  useEffect(() => {
    onCheckboxGroupChanged?.(checkboxList);
  }, [checkboxList]);

  useEffect(() => {
    if (data !== checkboxList) {
      setCheckboxList(() => {
        return data.map((item: CheckboxProps) => {
          if (item.checked === undefined) {
            return { ...item, checked: false };
          }
          return item;
        });
      });
    }
  }, [data]);

  const newProps = {};

  if (ariaLabelledby) {
    newProps['aria-labelledby'] = ariaLabelledby;
  }

  if (ariaLabel) {
    newProps['aria-label'] = ariaLabel;
  }

  if (ariaActiveDescendant) {
    newProps['aria-activedescendant'] = ariaActiveDescendant;
  }

  return (
    <div tabIndex={-1} {...newProps}>
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
