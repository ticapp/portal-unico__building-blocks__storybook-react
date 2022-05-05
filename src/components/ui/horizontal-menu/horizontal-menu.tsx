// import { Icon } from '@ama-design-system/react.ui.icon';
// import { Link } from '@ama-design-system/react.ui.link';
// import classNames from 'classnames';
// import React, { FC } from 'react';
// import { UrlObject } from 'url';
// import './horizontal-menu.scss';

// declare type Url = string | UrlObject;

// export interface HorizontalMenuLink {
//   id: string;
//   label: string;
//   link: string;
//   active: boolean;
// }

// export interface HorizontalMenuProps {
//   /** Additional class names */
//   className?: string;
//   /** Aria label for the menu */
//   ariaLabel?: string;
//   /** Homepage url */
//   homepageLink?: Url;
//   /** List of menu items */
//   links?: HorizontalMenuLink[];
// }

// const HorizontalMenu: FC<HorizontalMenuProps> = ({
//   className,
//   ariaLabel = 'Menu Principal',
//   homepageLink = '/',
//   links = [],
// }: HorizontalMenuProps) => {
//   const classes = classNames('ama-horizontal-menu', className);

//   return (
//     <nav className={classes} aria-label={ariaLabel}>
//       <ul
//         role="menu"
//         className="h-100 d-flex justify-content-start align-items-center m-0"
//       >
//         <li className="me-3">
//           <Link link={homepageLink}>
//             <Icon icon="ama-pa" />
//           </Link>
//         </li>
//         {links &&
//           links.map((l: HorizontalMenuLink) => {
//             return (
//               <li className="me-3" key={l.id}>
//                 <Link link={l.link} className={l.active ? 'active': ''}>
//                   {l.label}
//                 </Link>
//               </li>
//             );
//           })}
//       </ul>
//     </nav>
//   );
// };

// export { HorizontalMenu };

