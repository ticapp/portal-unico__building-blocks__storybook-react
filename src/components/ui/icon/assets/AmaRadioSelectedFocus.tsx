import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5Z"
        fill="white"
        stroke="#06571C"
      />
      <path
        d="M28 15C28 22.1797 22.1797 28 15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15Z"
        fill="white"
        stroke="#00672F"
        strokeWidth="2"
      />
      <path
        d="M15 25C20.5228 25 25 20.5228 25 15C25 9.47715 20.5228 5 15 5C9.47715 5 5 9.47715 5 15C5 20.5228 9.47715 25 15 25Z"
        fill="#00672F"
      />
    </svg>
  );
};
