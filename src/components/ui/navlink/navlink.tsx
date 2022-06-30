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

  const reactProps = {
    ...newProps,
    to: props.href
  };

  return <ReactNavLink {...reactProps} />;
}
