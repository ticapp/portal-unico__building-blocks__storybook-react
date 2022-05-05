import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export interface NextJSAnchorProps extends LinkProps {
  children?: ReactNode;
}

export function NextJSAnchor({
  children,
  href = '/',
  ...props
}: NextJSAnchorProps) {
  return (
    <Link href={href} {...props}>
      <a>{children}</a>
    </Link>
  );
}
