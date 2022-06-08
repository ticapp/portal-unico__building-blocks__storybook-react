import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="0.5" width="31" height="31" stroke="#06571C" />
      <rect x="2" y="2" width="28" height="28" fill="white" stroke="#00672F" stroke-width="2" />
    </svg>
  );
};    
