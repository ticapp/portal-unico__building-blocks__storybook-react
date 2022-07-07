import React from 'react';
import { usePlatform } from '../../hooks';
import { NextJsNavLink } from './nextjs-navlink';
import { ReactNavLink } from './react-navlink';

export function NavLink(props) {
  const { isNextJs } = usePlatform();

  const newProps = { ...props };
  delete newProps.ref;

  if (isNextJs) {
    return <NextJsNavLink {...newProps} />;
  }

  const { activeClassName } = newProps;
  delete newProps.exact;
  delete newProps.activeClassName;

  const reactProps = {
    ...newProps,
    to: props.href,
    className: ({ isActive }) => {
      return isActive ? `${newProps.className} ${activeClassName}` : newProps.className;
    }
  };

  return <ReactNavLink {...reactProps} />;
}
