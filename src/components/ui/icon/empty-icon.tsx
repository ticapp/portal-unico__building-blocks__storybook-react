import * as React from 'react';

export const EmptyIcon = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...newProps}>
      {props.title && <title>{props.title}</title>}
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};
