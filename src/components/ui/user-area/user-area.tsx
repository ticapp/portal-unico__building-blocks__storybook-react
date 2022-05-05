// import { UseWindowResize } from '@ama-design-system/react.hooks.use-window-size';
// import { Icon } from '@ama-design-system/react.ui.icon';
// import { Link } from '@ama-design-system/react.ui.link';
// import classNames from 'classnames';
// import React, { FC, HTMLAttributes } from 'react';
// import './user-area.scss';

// export interface UserAreaProps extends HTMLAttributes<HTMLElement> {
//   /** Label to use bellow the icon*/
//   label?: string;
//   /** The icon name or src image to use */
//   icon?: string;
//   /** Defines if the user is authenticated. Affects the class name of the component */
//   isAuthenticated?: boolean;
//   /** Path for the user area */
//   url?: string;
//   /** If true, clicking on the link will open a new tab with the url specified in the url */
//   isExternal?: boolean;
//   /** Defines if external link will open in a new tab or in the same tab */
//   newTab?: boolean;
// }

// const UserArea: FC<UserAreaProps> = ({
//   label = 'Area reservada',
//   icon = 'ama-user',
//   url = '/',
//   isAuthenticated,
//   isExternal = false,
//   newTab = false,
// }: UserAreaProps) => {
//   const windowSize = UseWindowResize();

//   const classes = classNames('ama-user-area', {
//     authenticated: !!isAuthenticated,
//   });

//   return (
//     <div className={classes}>
//       <Link
//         link={url}
//         isExternal={isExternal}
//         target={newTab ? '_blank' : '_self'}
//       >
//         <span>
//           <Icon icon={icon} alt={label} aria-hidden="true" />
//         </span>
//         {windowSize.width >= 768 && <span>{label}</span>}
//       </Link>
//     </div>
//   );
// };

// export { UserArea };
