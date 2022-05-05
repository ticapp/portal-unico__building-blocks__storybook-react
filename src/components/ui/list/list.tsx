// import React, { HTMLAttributes } from 'react';
// import { Link } from '@ama-design-system/react.ui.link';
// import './list.scss';
// import classNames from 'classnames';

// export interface ListProps extends HTMLAttributes<HTMLElement> {
//   /** Data to fill List options */
//   listData?: Array<{ value: string | React.FC | JSX.Element; hasExternalLink?: boolean; link?: string; title?: string; ariaLabel?: string }>;

//   /** Bullets types*/
//   listStyleType?:
//     | 'disc'
//     | 'circle'
//     | 'square'
//     | 'decimal'
//     | 'decimal-leading-zero'
//     | 'lower-roman'
//     | 'upper-roman'
//     | 'lower-greek'
//     | 'lower-latin'
//     | 'upper-latin'
//     | 'armenian'
//     | 'georgian'
//     | 'lower-alpha'
//     | 'none';

//   /** Bullets url images */
//   listStyleImageUrl?: string;

//   /** Bullets position */
//   listStylePosition?: 'inside' | 'outside';

//   /** Css class */
//   classList?: string;
// }

// export function List({
//   listData = [
//     {
//       value: 'Option value',
//       hasExternalLink: true,
//       link: 'url',
//       title: 'title',
//     },
//   ],
//   listStyleType = 'disc',
//   listStyleImageUrl,
//   listStylePosition = 'outside',
//   classList,
// }: ListProps) {
//   const cssList = classNames('ama-list', classList);
//   const listOptions = () => {
//     return listData?.map((option) => {
//       return (
//         <li key={'list' + option.value} style={{ listStyle: listStyleType + ' ' + (listStyleImageUrl ? 'url(' + listStyleImageUrl + ')' : '') + ' ' + listStylePosition }}>
//           {option.hasExternalLink ? (
//             <Link link={option.link} isExternal={true} target='_blank' title={option.title}>
//               {option.value}
//             </Link>
//           ) : (
//             <Link link={option.link} title={option.title}>
//               {option.value}
//             </Link>
//           )}
//         </li>
//       );
//     });
//   };
//   return <ul className={cssList}>{listOptions()}</ul>;
// }
