import * as React from 'react';
export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M26 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM6 26V6H26V26H6Z" />
      <path d="M14 21.5L9 16.54L10.59 15L14 18.35L21.41 11L23 12.58L14 21.5Z" />
    </svg>
  );
};