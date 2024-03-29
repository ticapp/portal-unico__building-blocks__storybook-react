import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 119-9 9 9 0 01-9 9zm-.5-6.8V5.7h1.2v8.5zm-.1 2.3h1.2v1.8h-1.2z" />
    </svg>
  );
};
