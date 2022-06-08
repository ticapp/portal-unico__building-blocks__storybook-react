import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1" y="1" width="28" height="28" fill="white" stroke="#C9C9C9" strokeWidth="2" />
      <path d="M12.75 21L6 14.25L7.0605 13.1895L12.75 18.8782L22.9395 8.6895L24 9.75L12.75 21Z" fill="#C9C9C9" />
    </svg>
  );
};
