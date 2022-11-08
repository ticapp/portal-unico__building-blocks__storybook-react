import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M13.9 5.4l-.7.7 5.3 5.4H3v1h15.5l-5.3 5.4.7.7 6.6-6.6zM19 12z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};
