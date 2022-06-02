import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { UrlObject } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '../link';

export interface ListProps extends HTMLAttributes<HTMLElement> {
  /** Data to fill List options */
  listData?: Array<{ value: React.ReactNode; hasExternalLink?: boolean; link: string | UrlObject; title?: string; ariaLabel?: string }>;

  /** Bullets types */
  listStyleType?:
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-roman'
    | 'upper-roman'
    | 'lower-greek'
    | 'lower-latin'
    | 'upper-latin'
    | 'armenian'
    | 'georgian'
    | 'lower-alpha'
    | 'none';

  /** Bullets url images */
  listStyleImageUrl?: string;

  /** Bullets position */
  listStylePosition?: 'inside' | 'outside';

  /** Css class */
  className?: string;
}

export function List({
  listData = [
    {
      value: 'Option value',
      hasExternalLink: true,
      link: 'url',
      title: 'title'
    }
  ],
  listStyleType = 'disc',
  listStyleImageUrl,
  listStylePosition = 'outside',
  className
}: ListProps) {
  const cssList = classNames('ama-list', className);
  const listOptions = listData?.map((option) => (
    <li
      key={uuidv4()}
      style={{ listStyle: `${listStyleType} ${listStyleImageUrl ? `url(${listStyleImageUrl})` : ''} ${listStylePosition}` }}
    >
      {option.hasExternalLink ? (
        <Link link={option.link} isExternal target="_blank" title={option.title}>
          {option.value}
        </Link>
      ) : (
        <Link link={option.link} title={option.title}>
          {option.value}
        </Link>
      )}
    </li>
  ));
  return <ul className={cssList}>{listOptions}</ul>;
}
