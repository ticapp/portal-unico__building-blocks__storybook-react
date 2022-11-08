import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="none">
      <rect x="1" y="1" width="28" height="28" fill="white" stroke="#C9C9C9" strokeWidth="2" />
    </svg>
  );
};
