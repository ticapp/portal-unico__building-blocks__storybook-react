// import React from 'react';
// import { Icon } from '@ama-design-system/react.ui.icon';
// import classNames from 'classnames';
// import './scroll-top.scss';

// export type ScrollTopProps = {
//   /** Additional class names */
//   className?: string;
// };

// export function ScrollTop({ className }: ScrollTopProps) {
//   const classes = classNames('ama-scroll-top', className,
//     "d-flex",
//     "justify-content-center",
//     "align-items-center",
//     "rounded-circle"
//   );

//   const onClickHandler = () => {
//     if (window && window.scrollTo) {
//       window && window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className={classes} onClick={onClickHandler}>
//       <Icon icon="ama-collapse" />
//     </div>
//   );
// }
