/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { FC, ReactNode, useId } from 'react';
import { usePathname } from '../../hooks';
import { NavLink } from '../navlink';

import './vertical-menu.scss';

export interface VerticalMenuLink {
  label: string;
  link?: string;
  labelElement?: ReactNode;
  children?: VerticalMenuLink[];
}

export interface VerticalMenuProps {
  /** Aria label for screen readers */
  ariaLabel?: string;
  /** List of available links to render */
  links: VerticalMenuLink[];
  /** On activate link */
  onActivate?: (item: VerticalMenuLink) => void;
}

const VerticalMenu: FC<VerticalMenuProps> = ({ ariaLabel = 'Vertical Navigation Menu', links = [], onActivate }: VerticalMenuProps) => {
  const uid = useId();

  const pathname = usePathname();

  const classes = classNames('ama-vertical-menu-desktop');

  const hasActiveDescendant = (parent: VerticalMenuLink): boolean => {
    if (!parent.children) {
      return parent.link === pathname;
    }

    return parent.children.some((s) => hasActiveDescendant(s));
  };

  const onClickHandler = (item: VerticalMenuLink) => {
    onActivate?.(item);
  };

  const buildMenuItem = (item: VerticalMenuLink, lvl: number, idx: number) => {
    const liClasses = classNames(`${hasActiveDescendant(item) ? 'parent-active' : ''}`, `${item.children ? 'with-children' : ''}`, 'mb-16');

    const liId = `${uid}-li-lvl-${lvl}-${idx}`;
    const subMenuId = `${uid}-sub-lvl-${lvl}-${idx}`;

    return (
      <li key={liId} className={liClasses} role="none">
        <div className="tree-item-container">
          {item.link && (
            <NavLink
              exact
              href={item.link}
              className={`${pathname.startsWith(item.link) ? 'active' : ''} vertical-nav-link`}
              activeClassName="active"
              role="treeitem"
              aria-owns={item.children ? subMenuId : ''}
              onClick={() => onClickHandler(item)}
            >
              <span className="label d-inline-flex align-items-center">{item.label}</span>
            </NavLink>
          )}

          {!item.link && (
            <span
              className="label d-inline-flex align-items-center"
              role="treeitem"
              tabIndex={0}
              aria-owns={item.children ? subMenuId : ''}
            >
              {item.label}
            </span>
          )}

          {item.children && (
            <ul className="ms-24" aria-label={item.label} id={subMenuId} role="group">
              {item.children.map((itemChildren, i) => buildMenuItem(itemChildren, lvl + 1, i))}
            </ul>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="ama-vertical-menu">
      <nav aria-label={ariaLabel} className={classes}>
        <ul aria-label={ariaLabel} role="tree" className="root">
          {links.map((verticalMenuItem, i) => buildMenuItem(verticalMenuItem, 0, i))}
        </ul>
      </nav>
    </div>
  );
};

export { VerticalMenu };
