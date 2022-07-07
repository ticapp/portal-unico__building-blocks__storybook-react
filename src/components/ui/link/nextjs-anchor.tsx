import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export interface NextJSAnchorProps extends LinkProps {
  role?: string;
  children?: ReactNode;
  className?: string;
}

export function NextJSAnchor({ children, href = '/', role, className, ...props }: NextJSAnchorProps) {
  return (
    <Link href={href} {...props}>
      <a role={role} className={className}>
        {children}
      </a>
    </Link>
  );
}
