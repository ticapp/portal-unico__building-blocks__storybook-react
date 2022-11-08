import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M14 16L24 6L25.4 7.4L16.8 16L25.4 24.6L24 26L14 16Z" />
      <path d="M10 4H8V28H10V4Z" />
    </svg>
  );
};
