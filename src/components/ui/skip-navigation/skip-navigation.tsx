// import React, { DOMAttributes } from 'react';
// import { Link } from '@ama-design-system/react.ui.link';
// import { Icon } from '@ama-design-system/react.ui.icon';
// import classNames from 'classnames';
// import './skip-navigation.scss';

// export interface SkipNavigationProps extends DOMAttributes<Element> {
//   /** Additonal classes to component */
//   classSkipNavigation?: string;

//   /** aria-label to component */
//   ariaLabel: string;

//   /** id of target to scroll, normally 'main' */
//   idLink: string;

//   /** content of component */
//   content: string | React.ReactNode;
// }

// export function SkipNavigation({ classSkipNavigation, ariaLabel, idLink, content }: SkipNavigationProps) {
//   const cssSkipNavigation = classNames('ama-skipNavigation', classSkipNavigation);
//   return (
//     <div aria-label={ariaLabel} className={cssSkipNavigation}>
//       <Link link={'#' + idLink} isExternal={true} target='_self'>
//         <Icon icon='ama-download' /> {content}
//       </Link>
//     </div>
//   );
// }
