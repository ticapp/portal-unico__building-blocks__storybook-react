import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigateTo, usePathname, useWindowSize } from '../../hooks';
import { NavLink } from '../navlink';
import { Select, SelectOption } from '../select';
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
}

const VerticalMenuMobile: FC<VerticalMenuProps> = ({ ariaLabel, links }: VerticalMenuProps) => {
  const flatLinks = (link: VerticalMenuLink, lvl: number) => {
    if (!link.children) {
      return { ...link, lvl };
    }

    return [{ ...link, lvl }].concat(link.children.map((innerLink) => flatLinks(innerLink, lvl + 1)).flat());
  };

  const flatLinkArray = links.map((l) => flatLinks(l, 0)).flat();

  const selectOptions = flatLinkArray.map((l) => {
    return {
      label: l.label,
      value: l.link || uuidv4(),
      disabled: !l.link,
      labelElement: (
        <span className={`ps-${l.lvl * 24}`}>
          {l.link && (
            <NavLink exact href={l.link} className="vertical-nav-link w-100" tabIndex={-1}>
              <span className="label d-inline-flex align-items-center">{l.label}</span>
            </NavLink>
          )}

          {!l.link && (
            <span className="label d-inline-flex align-items-center" tabIndex={-1}>
              {l.label}
            </span>
          )}
        </span>
      )
    } as SelectOption;
  });

  const pathname = usePathname();
  const activeLinkIndex = flatLinkArray.findIndex((l) => l.link === pathname);
  const { navigateTo } = useNavigateTo();

  const selectChangeHandler = (val) => {
    if (!Array.isArray(val)) {
      const newActive = flatLinkArray.find((l) => l.link === val.value);
      if (newActive && newActive.link) {
        navigateTo(newActive.link);
      }
    }
  };

  const classes = classNames('ama-vertical-menu-mobile');
  return (
    <div className={classes}>
      <label id="label-for-navigation-select" className="d-none">
        {ariaLabel}
      </label>
      <Select
        labelledby="label-for-navigation-select"
        options={selectOptions}
        active={selectOptions[activeLinkIndex]}
        onChange={selectChangeHandler}
      />
    </div>
  );
};

const VerticalMenuDesktop: FC<VerticalMenuProps> = ({ ariaLabel, links }: VerticalMenuProps) => {
  const pathname = usePathname();

  const classes = classNames('ama-vertical-menu-desktop');

  const hasActiveDescendant = (parent: VerticalMenuLink): boolean => {
    if (!parent.children) {
      return parent.link === pathname;
    }

    return parent.children.some((s) => hasActiveDescendant(s));
  };

  const buildMenuItem = (item: VerticalMenuLink, lvl: number) => {
    const liClasses = classNames(`${hasActiveDescendant(item) ? 'parent-active' : ''}`, `${item.children ? 'with-children' : ''}`, 'mb-16');

    const liId = uuidv4();
    const subMenuId = uuidv4();

    return (
      <li key={liId} className={liClasses} role="none">
        <div className="tree-item-container">
          {item.link && (
            <NavLink
              exact
              href={item.link}
              className="vertical-nav-link"
              activeClassName="active"
              role="treeitem"
              aria-owns={item.children ? subMenuId : ''}
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
              {item.children.map((itemChildren) => buildMenuItem(itemChildren, lvl + 1))}
            </ul>
          )}
        </div>
      </li>
    );
  };

  return (
    <nav aria-label={ariaLabel} className={classes}>
      <ul aria-label={ariaLabel} role="tree" className="root">
        {links.map((verticalMenuItem) => buildMenuItem(verticalMenuItem, 0))}
      </ul>
    </nav>
  );
};

const VerticalMenu: FC<VerticalMenuProps> = ({ ariaLabel = 'Vertical Navigation Menu', links = [] }: VerticalMenuProps) => {
  const { width } = useWindowSize();

  const classes = classNames('ama-vertical-menu');

  return (
    <div className={classes}>
      {width >= 768 && <VerticalMenuDesktop ariaLabel={ariaLabel} links={links} />}

      {width < 768 && <VerticalMenuMobile ariaLabel={ariaLabel} links={links} />}
    </div>
  );
};

export { VerticalMenu };
