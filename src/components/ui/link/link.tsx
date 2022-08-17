import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UrlObject } from 'url';
import { usePlatform } from '../../hooks';
import './link.scss';
import { NextJSAnchor, NextJSAnchorProps } from './nextjs-anchor';
import { ReactDomAnchor, ReactDomAnchorType } from './react-dom-anchor';

declare type Url = string | UrlObject;

export interface LinkProps {
  /** Link url */
  link: Url;
  /** Defines if opens in current tab or in a new tab. Use values "_self" or "_blank" */
  target?: string;
  /** Defines if the link is an external link */
  isExternal?: boolean;
  /** Anchor title */
  title?: string;
  /** Additional class names */
  className?: string;
  /** Inner childs of the component to be rendered */
  children?: ReactNode;
  /** Replace the current history state instead of adding a new url into the stack. Defaults to false */
  replace?: boolean;
  /** Scroll to the top of the page after a navigation. Defaults to true */
  scroll?: boolean;
  /** Set link role */
  role?: string;
  /** Set link tab-index */
  tabIndex?: number;
  /** Themes for Link */
  linkTheme?: string;
}

export function Link({
  children,
  link,
  target = '_self',
  isExternal = false,
  title = '',
  className = '',
  replace = false,
  scroll,
  role,
  tabIndex = 0,
  linkTheme = 'ama-link-brand-green-main'
}: LinkProps) {
  const classes = classNames('ama-link', linkTheme, className);

  const { isNextJs } = usePlatform();

  const renderNextJSAnchor = (props) => {
    return <NextJSAnchor {...props}>{children}</NextJSAnchor>;
  };

  const renderReactDomAnchor = (props: ReactDomAnchorType) => {
    return <ReactDomAnchor {...props}>{children}</ReactDomAnchor>;
  };

  if (isNextJs) {
    const nextJsLinkProps = {
      href: link,
      children,
      target,
      title,
      className: classes,
      replace,
      scroll,
      role,
      tabIndex
    };

    return renderNextJSAnchor(nextJsLinkProps as NextJSAnchorProps);
  }

  if (!isExternal) {
    const internalReactDomLinkProps = {
      to: link,
      children,
      target,
      title,
      className: classes,
      replace,
      scroll,
      role,
      tabIndex
    };

    return renderReactDomAnchor(internalReactDomLinkProps as ReactDomAnchorType);
  }

  return (
    <a href={link.toString()} target={target} title={title} className={classes} tabIndex={tabIndex}>
      {children}
    </a>
  );
}
