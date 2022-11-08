import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="none">
      <rect x="2" y="2" width="28" height="28" fill="white" stroke="#00672F" strokeWidth="2" />
    </svg>
  );
};
