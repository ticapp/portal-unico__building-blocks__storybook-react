import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M16.5 15.4l-4.9-4.9-4.9 4.9-.7-.8L11.6 9l5.6 5.6z" />
    </svg>
  );
};
