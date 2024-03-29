import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M9.6 20.4V13.2H14.4V20.4H20.4V10.8H24L12 0L0 10.8H3.6V20.4H9.6Z" />
    </svg>
  );
};
