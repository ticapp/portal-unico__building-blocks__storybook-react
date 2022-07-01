import classNames from 'classnames';
import React, { FC } from 'react';
import { Image } from 'react-bootstrap';
import { UrlObject } from 'url';
import { Link } from '../link';

declare type Url = string | UrlObject;

export interface LogoProps {
  /** Image source path */
  src: string;
  /** Image alt text */
  alt?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;

  /** If true, the logo image is not rendered inside a link for the homepage */
  isHomepage?: boolean;
  /** Link title */
  title?: string;
  /** Homepage link */
  homepageLink?: Url;
}

const Logo: FC<LogoProps> = ({
  src,
  alt = 'Página inicial',
  width,
  height,
  title = 'Voltar a página de entrada',
  homepageLink = '/',
  isHomepage = false
}: LogoProps) => {
  const classes = classNames('ama-logo', 'd-flex', isHomepage ? '' : 'h1', 'mb-0');
  return (
    <>
      {isHomepage && (
        <h1 className={classes}>
          <Image src={src} alt={alt} width={width} height={height} />
        </h1>
      )}
      {!isHomepage && (
        <div className={classes}>
          <Link link={homepageLink} title={title}>
            <Image src={src} alt={alt} width={width} height={height} />
          </Link>
        </div>
      )}
    </>
  );
};

export { Logo };
