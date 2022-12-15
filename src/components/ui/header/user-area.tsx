import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { Icon } from '../icon';
import { CustomDropdown, CustomDropdownOption } from './customDropdown';

export interface UserAreaOption {
  /** Specifies if the option is visible if user is authenticated */
  authenticatedOption: boolean;
  /** Link to be redirected when activated */
  value: string;
  /** Icon to be rendered along label */
  icon: string;
  /** Readable text of the option */
  label: string;
}

export interface UserAreaProps {
  /** Additional classnames */
  className?: string;
  /** Username to set */
  username?: string;
  /** Defines if the user is authenticated. Affects the class name of the component */
  isAuthenticated?: boolean;

  /** List of available user options */
  options: UserAreaOption[];

  /** Callback to execute if option changed */
  onOptionChange?: (val: UserAreaOption) => void;
  /** Aria label to apply to the dropdown */
  dropdownAriaLabel?: string;
}

const UserArea: FC<UserAreaProps> = ({
  className = '',
  username = 'Área reservada',
  isAuthenticated = false,
  options = [],
  onOptionChange,
  dropdownAriaLabel = 'Opções da Área Reservada'
}: UserAreaProps) => {
  const [activeOptionList, setActiveOptionList] = useState([] as UserAreaOption[]);

  useEffect(() => {
    setActiveOptionList(options.filter((o) => o.authenticatedOption === isAuthenticated));
  }, [isAuthenticated]);

  const onDropdownChangeHandler = (opt: CustomDropdownOption) => {
    if (onOptionChange) {
      const selectedOption = options.find((o) => o.value === opt.value);
      if (selectedOption) {
        onOptionChange(selectedOption);
      }
    }
  };

  const buildOption = (o: UserAreaOption) => {
    return {
      value: o.value,
      children: (
        <>
          <Icon className="option-icon" icon={o.icon} ariaHidden />
          <span className="option-label ms-10">{o.label}</span>
        </>
      )
    } as CustomDropdownOption;
  };

  const classes = classNames('ama-user-area', className);

  return (
    <CustomDropdown
      className={classes}
      dropdownControls={
        <>
          <Icon className="me-8" size="md" icon="ama-user-thin" alt={username} ariaHidden />
          <span>{username}</span>
        </>
      }
      ariaLabel={dropdownAriaLabel}
      options={activeOptionList.map((o) => buildOption(o))}
      onChange={onDropdownChangeHandler}
    />
  );
};

export { UserArea };
