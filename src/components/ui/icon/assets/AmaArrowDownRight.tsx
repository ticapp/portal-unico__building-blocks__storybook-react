import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' {...props}>
      <path d='M10 26V24H22.59L6 7.41L7.41 6L24 22.59V10H26V26H10Z' />
    </svg>
  );
};
