import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M10 26V24H22.59L6 7.41L7.41 6L24 22.59V10H26V26H10Z" />
    </svg>
  );
};
