import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M28.21 11.18H19l-3.14-3.14H7.79c-1.59 0-2.89 1.3-2.89 2.89v14.14c0 1.59 1.3 2.89 2.89 2.89h20.42c1.59 0 2.89-1.29 2.89-2.89v-11c0-1.59-1.3-2.89-2.89-2.89zm1.82 2.89v11c0 1.01-.82 1.83-1.82 1.83H7.79c-1.01 0-1.82-.82-1.82-1.83V10.93c0-1.01.82-1.82 1.82-1.82h7.63l3.14 3.14h9.65c1.01 0 1.82.82 1.82 1.82z" />
    </svg>
  );
};
