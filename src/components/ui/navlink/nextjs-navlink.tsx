import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function NextJsNavLink({
  href,
  exact = false,
  activeClassName = 'active',
  children,
  ...props
}) {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  props.className += `${isActive ? activeClassName : ''}`;

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
