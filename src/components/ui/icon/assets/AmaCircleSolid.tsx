import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <circle cx="16" cy="16" r="14" />
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill="none" />
    </svg>
  );
};
