/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { useNavigateTo } from '../..';
import { Icon } from '../icon';
import { Select, SelectOption } from '../select';
import './user-area.scss';

export interface UserAreaOption {
  /** Specifies if the option is visible if user is authenticated */
  authenticatedOption: boolean;
  /** Link to be redirected when activated */
  link: string;
  /** Icon to be rendered along label */
  icon?: string;
  /** Readable text of the option */
  label: string;
}

export interface UserAreaProps extends HTMLAttributes<HTMLElement> {
  /** Username to set */
  username?: string;
  /** The icon name or src image to use */
  icon?: string;
  /** Defines if the user is authenticated. Affects the class name of the component */
  isAuthenticated?: boolean;
  /** Options configuration to display in the user area dropdown menu */
  options: UserAreaOption[];
}

const UserArea: FC<UserAreaProps> = ({ username = 'Area reservada', icon = 'ama-user', isAuthenticated, options }: UserAreaProps) => {
  const classes = classNames(
    'ama-user-area',
    {
      authenticated: !!isAuthenticated
    },
    'd-flex align-items-center justify-content-center position-relative'
  );

  const { navigateTo } = useNavigateTo();

  const buildOption = (o: UserAreaOption) => {
    return {
      label: o.label,
      value: o.label,
      labelElement: o.link && (
        <span className="user-area-option">
          {o.icon && <Icon className="option-icon" icon={o.icon} />}
          <span className="option-label">{o.label}</span>
        </span>
      )
    } as SelectOption;
  };

  const authenticatedOptions = options.filter((o) => o.authenticatedOption).map(buildOption);
  const anonymousOptions = options.filter((o) => !o.authenticatedOption).map(buildOption);

  const handleSelection = (val: SelectOption | SelectOption[]) => {
    if (!Array.isArray(val)) {
      const selectedOption = options.find((o) => o.label === val.value);
      if (selectedOption) {
        navigateTo(selectedOption.link);
      }
    }
  };

  return (
    <div className={classes}>
      <div className="drop-down-header w-100 d-flex align-items-center justify-content-between">
        <Icon size="md" icon={icon} alt={username} ariaHidden />
        <span className="h5-bold">{username}</span>
        <span aria-hidden="true" className="spacing h-100">
          &nbsp;
        </span>
      </div>
      <div className="drop-down-container w-100 h-100 position-absolute top-0 bottom-0 right-0">
        <label id="user-area-options-label" className="d-none">
          User Area Options
        </label>
        <Select
          labelledby="user-area-options-label"
          size="sm"
          className="user-area-options h5-bold"
          options={isAuthenticated ? authenticatedOptions : anonymousOptions}
          onChange={handleSelection}
        />
      </div>
    </div>
  );
};

export { UserArea };
