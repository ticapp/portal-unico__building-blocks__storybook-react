import React, { DOMAttributes } from 'react';
import classNames from 'classnames';
import { Link } from '../link';
import { Icon } from '../icon';
import './skip-navigation.scss';

export interface SkipNavigationProps extends DOMAttributes<Element> {
  /** Additonal classes to component */
  className?: string;

  /** aria-label to component */
  ariaLabel: string;

  /** id of target to scroll, normally 'main' */
  idLink: string;

  /** content of component */
  content: string | React.ReactNode;
}

export function SkipNavigation({ className, ariaLabel, idLink, content }: SkipNavigationProps) {
  const cssSkipNavigation = classNames('ama-skipNavigation', className);
  return (
    <div aria-label={ariaLabel} className={cssSkipNavigation}>
      <Link link={`#${idLink}`} isExternal target="_self">
        <Icon icon="ama-download" /> {content}
      </Link>
    </div>
  );
}
