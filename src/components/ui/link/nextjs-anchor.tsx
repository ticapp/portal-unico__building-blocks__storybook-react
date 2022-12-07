import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export interface NextJSAnchorProps extends LinkProps {
  role?: string;
  children?: ReactNode;
  className?: string;
  target?: string;
}

export function NextJSAnchor({ children, href = '/', role, className, target, ...props }: NextJSAnchorProps) {
  return (
    <Link href={href} {...props}>
      <a role={role} className={className} target={target}>
        {children}
      </a>
    </Link>
  );
}
