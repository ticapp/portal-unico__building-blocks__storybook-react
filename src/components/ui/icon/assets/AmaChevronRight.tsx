import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" />
    </svg>
  );
};
