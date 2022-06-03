import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 6H4V8H28V6Z" />
      <path d="M28 24H4V26H28V24Z" />
      <path d="M28 12H4V14H28V12Z" />
      <path d="M28 18H4V20H28V18Z" />
    </svg>
  );
};
