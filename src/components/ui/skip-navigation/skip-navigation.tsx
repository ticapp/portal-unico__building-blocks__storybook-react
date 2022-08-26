import classNames from 'classnames';
import React, { DOMAttributes, useId } from 'react';
import { Link } from '../link';
import './skip-navigation.scss';

export interface SkipNavigationOptions {
  /** id of target to scroll, normally 'main' */
  idLink: string;

  /** content of component */
  content: string | React.ReactNode;
}

export interface SkipNavigationProps extends DOMAttributes<Element> {
  /** Additional classes to component */
  className?: string;

  /** Quick options on skipNavigation */
  options: SkipNavigationOptions[];

  /** aria-label to component */
  ariaLabel: string;
}

export function SkipNavigation({ className, ariaLabel, options }: SkipNavigationProps) {
  const cssSkipNavigation = classNames('ama-skipNavigation', className);

  const renderSkipNavLinks = (item: SkipNavigationOptions[]) => {
    return item?.map((nav) => {
      return (
        <li key={useId()}>
          <Link link={`#${nav.idLink}`} isExternal target="_self">
            {nav.content}
          </Link>
        </li>
      );
    });
  };

  return (
    <ul aria-label={ariaLabel} className={cssSkipNavigation}>
      {renderSkipNavLinks(options)}
    </ul>
  );
}
