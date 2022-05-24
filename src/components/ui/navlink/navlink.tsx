import React from 'react';
import { NextJsNavLink } from './nextjs-navlink';
import { ReactNavLink } from './react-navlink';

export function NavLink(props) {
  const newProps = { ...props };
  delete newProps.ref;

  if (!window) {
    return <NextJsNavLink {...newProps} />;
  }

  const reactProps = {
    ...newProps,
    to: props.href,
  };

  return <ReactNavLink {...reactProps} />;
}
