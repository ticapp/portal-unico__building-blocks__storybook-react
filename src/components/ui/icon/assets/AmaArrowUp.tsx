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
      <polygon points="16 4 6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4" />
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1" width="32" height="32" />
    </svg>
  );
};
