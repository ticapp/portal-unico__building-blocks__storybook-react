import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z" />
    </svg>
  );
};
