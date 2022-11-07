import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M11.6 15.4L6 9.8l.7-.8 4.9 4.9L16.5 9l.7.8z" />
    </svg>
  );
};
