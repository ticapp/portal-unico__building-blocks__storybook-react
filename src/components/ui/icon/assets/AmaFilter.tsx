import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <g clipPath="url(#clip0_406_40)">
        <path d="M18 28H14C13.4696 28 12.9609 27.7893 12.5858 27.4142C12.2107 27.0391 12 26.5304 12 26V18.41L4.59 11C4.21441 10.6266 4.00223 10.1196 4 9.59V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H26C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6V9.59C27.9978 10.1196 27.7856 10.6266 27.41 11L20 18.41V26C20 26.5304 19.7893 27.0391 19.4142 27.4142C19.0391 27.7893 18.5304 28 18 28ZM6 6V9.59L14 17.59V26H18V17.59L26 9.59V6H6Z" />
      </g>
      <defs>
        <clipPath id="clip0_406_40">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
