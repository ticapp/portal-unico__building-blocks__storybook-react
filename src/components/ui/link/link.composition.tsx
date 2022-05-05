import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from './link';

export const BasicReactRouterDomLink = () => {
  return (
    <BrowserRouter>
      <Link link={'https://www.google.com'} isExternal={true} target='_blank'>Redirect To Google</Link>
    </BrowserRouter>
  );
};
