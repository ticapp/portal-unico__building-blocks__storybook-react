import React, { ReactNode } from 'react';
import { UrlObject } from 'url';
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
}

export function Link({
  children,
  link,
  target = '_self',
  isExternal = false,
  title = '',
  className = '',
  replace = false,
  scroll = true,
}: LinkProps) {
  const isNextJS = !window;

  const renderNextJSAnchor = (props) => {
    return <NextJSAnchor {...props}>{children as any}</NextJSAnchor>;
  };

  const renderReactDomAnchor = (props: ReactDomAnchorType) => {
    return <ReactDomAnchor {...props}>{children as any}</ReactDomAnchor>;
  };

  if (isNextJS) {
    const nextJsLinkProps = {
      href: link,
      children,
      target,
      title,
      className,
      replace,
      scroll,
    };

    return renderNextJSAnchor(nextJsLinkProps as NextJSAnchorProps);
  }

  if (!isExternal) {
    const reactDomLinkProps = {
      to: link,
      children,
      target,
      title,
      className,
      replace,
      scroll,
    };

    return renderReactDomAnchor(reactDomLinkProps as ReactDomAnchorType);
  }

  const reactDomLinkProps = {
    to: '',
    component: () => {
      return (
        <a href={link.toString()} target={target} title={title}>
          {children}
        </a>
      );
    },
    target,
    title,
    className,
    replace,
    scroll,
  };

  return renderReactDomAnchor(reactDomLinkProps as ReactDomAnchorType);
}
