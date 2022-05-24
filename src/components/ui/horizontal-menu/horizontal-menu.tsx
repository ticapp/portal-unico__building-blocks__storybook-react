import classNames from 'classnames';
import React, { FC } from 'react';
import { useWindowSize } from '../../hooks';
import { NavLink } from '../../ui';
import { Icon } from '../icon';
import { UserArea, UserAreaProps } from '../user-area';
import './horizontal-menu.scss';

export interface HorizontalMenuLink {
  id: string;
  label: string;
  link: string;
}

export interface HorizontalMenuProps extends UserAreaProps {
  /** Additional class names */
  className?: string;
  /** Aria label for the menu */
  ariaLabel?: string;
  /** Homepage url */
  homepageLink?: string;
  /** List of menu items */
  links?: HorizontalMenuLink[];
}

const HorizontalMenu: FC<HorizontalMenuProps> = ({
  className = '',
  ariaLabel = 'Menu Principal',
  homepageLink = '/',
  links = [],
  username = '',
  isAuthenticated = false,
  options,
  icon = 'ama-home',
}: HorizontalMenuProps) => {
  const classes = classNames(
    'ama-horizontal-menu',
    className,
    'd-flex justify-content-between'
  );

  const { width } = useWindowSize();

  return (
    <div className={classes}>
      <nav aria-label={ariaLabel}>
        <ul
          role="menubar"
          aria-label={ariaLabel}
          className="h-100 d-flex justify-content-start align-items-center m-0"
        >
          <li role="none">
            <NavLink
              exact={true}
              href={homepageLink}
              className="navbar-brand d-flex justify-content-start align-items-center m-0"
              activeClassName="active"
              role="menuitem"
            >
              <Icon alt="Homepage" icon={icon} />
            </NavLink>
          </li>

          <li role="none">
            <ul
              role="none"
              className="h-100 w-100 d-flex justify-content-between align-items-center m-0"
            >
              {links &&
                links.map((l: HorizontalMenuLink) => {
                  return (
                    <li key={l.id} role="none">
                      <NavLink
                        exact={true}
                        href={l.link}
                        className="nav-link py-0 px-8 d-flex justify-content-start align-items-center"
                        activeClassName="active"
                        role="menuitem"
                      >
                        <span className="label">{l.label}</span>
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </li>
        </ul>
      </nav>

      {width >= 768 && (
        <div>
          <UserArea
            username={username}
            options={options}
            isAuthenticated={isAuthenticated}
          />
        </div>
      )}
    </div>
  );
};

export { HorizontalMenu };
