import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export interface NextJSAnchorProps extends LinkProps {
  role?: string;
  children?: ReactNode;
}

export function NextJSAnchor({
  children,
  href = '/',
  role,
  ...props
}: NextJSAnchorProps) {
  return (
    <Link href={href} {...props}>
      <a role={role}>{children}</a>
    </Link>
  );
}
