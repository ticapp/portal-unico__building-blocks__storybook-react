import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ReactDomAnchorType extends LinkProps {}

export function ReactDomAnchor(props: ReactDomAnchorType) {
  return <Link {...props}></Link>;
}
