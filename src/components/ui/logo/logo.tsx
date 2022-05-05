// import { Link } from '@ama-design-system/react.ui.link';
// import classNames from 'classnames';
// import React, { FC } from 'react';
// import { UrlObject } from 'url';
// import { DefaultLogo } from './DefaultLogo';
// import './logo.scss';

// declare type Url = string | UrlObject;

// export interface LogoProps {
//   /** Image source path */
//   src?: string;
//   /** Image alt text */
//   alt?: string;
//   /** If true, the logo image is not rendered inside a link for the homepage */
//   isHomepage?: boolean;
//   /** Homepage link */
//   homepageLink?: Url;
// }

// const Logo: FC<LogoProps> = ({
//   src,
//   alt = 'Página inicial',
//   homepageLink = '/',
//   isHomepage = false,
// }: LogoProps) => {
//   const classes = classNames('ama-logo');

//   const currentImage = !src ? (
//     <DefaultLogo alt={alt} />
//   ) : (
//     <img src={src} alt={alt}></img>
//   );

//   //  Necessario os dois porque a distinção está
//   return (
//     <div className={classes}>
//       {isHomepage && currentImage}
//       {!isHomepage && <Link link={homepageLink}>{currentImage}</Link>}
//     </div>
//   );
// };

// export { Logo };
