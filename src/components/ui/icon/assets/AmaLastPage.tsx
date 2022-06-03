import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 16L7.99998 26L6.59998 24.6L15.2 16L6.59998 7.4L7.99998 6L18 16Z" />
      <path d="M24 4H22V28H24V4Z" />
    </svg>
  );
};
