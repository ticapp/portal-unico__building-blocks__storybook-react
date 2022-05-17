import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { Select, SelectOption } from '../select';
import './user-area.scss';

export interface UserAreaProps extends HTMLAttributes<HTMLElement> {
  /** Label to use bellow the icon*/
  label?: string;
  /** The icon name or src image to use */
  icon?: string;
  /** Defines if the user is authenticated. Affects the class name of the component */
  isAuthenticated?: boolean;
  /** Authenticated user options */
  authenticatedOptions: SelectOption[];
  /** Anonymous user options */
  anonymousOptions: SelectOption[];
  /** To be called whenever an option is selected */
  onMenuAction?: (val: SelectOption | SelectOption[]) => void;
}

const UserArea: FC<UserAreaProps> = ({
  label = 'Area reservada',
  icon = 'ama-user',
  isAuthenticated,
  authenticatedOptions,
  anonymousOptions,
  onMenuAction,
}: UserAreaProps) => {
  const classes = classNames(
    'ama-user-area',
    {
      authenticated: !!isAuthenticated,
    },
    'd-inline-flex align-items-center justify-content-center position-relative'
  );

  return (
    <div className={classes}>
      <span>
        <Icon icon={icon} alt={label} ariaHidden={true} />
        <span className="ms-10 bg-neutral-white">{label}</span>
        <span aria-hidden="true" className="spacing d-inline-block h-100">
          &nbsp;
        </span>
      </span>
      <div className="drop-down-container w-100 h-100 z-dropdown position-absolute top-0 bottom-0 right-0">
        <label id="user-area-options-label" className="d-none">
          User Area Options
        </label>
        <Select
          labelledby="user-area-options-label"
          size={'sm'}
          className="user-area-options"
          options={isAuthenticated ? authenticatedOptions : anonymousOptions}
          onChange={onMenuAction}
        />
      </div>
    </div>
  );
};

export { UserArea };
