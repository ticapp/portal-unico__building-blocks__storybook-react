import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  const cssStyle = `
        .cls-1 {
            fill: none;
        }
    `;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <defs>
        <style>{cssStyle}</style>
      </defs>
      <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
      <path d="M11.5,11A2.5,2.5,0,1,0,14,13.5,2.48,2.48,0,0,0,11.5,11Z" />
      <path d="M20.5,11A2.5,2.5,0,1,0,23,13.5,2.48,2.48,0,0,0,20.5,11Z" />
      <path d="M16,24a8,8,0,0,0,6.85-3.89l-1.71-1a6,6,0,0,1-10.28,0l-1.71,1A8,8,0,0,0,16,24Z" />
    </svg>
  );
};
