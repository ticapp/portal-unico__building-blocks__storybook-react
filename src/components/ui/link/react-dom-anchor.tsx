import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export type ReactDomAnchorType = LinkProps;

export function ReactDomAnchor(props: ReactDomAnchorType) {
  return <Link {...props} />;
}
