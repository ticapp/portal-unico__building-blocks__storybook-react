// import { Icon } from '@ama-design-system/react.ui.icon';
// import { Link } from '@ama-design-system/react.ui.link';
// import classNames from 'classnames';
// import React from 'react';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import './page-error.scss';

// export type PageErrorProps = {
//   /** Additional class to component */
//   className?: string;
//   /** Error title */
//   title?: string;
//   /** Error message */
//   message?: string;
//   /** Info necessary to render the navigation button. Can be internal route or an external link */
//   link?: {
//     url?: string;
//     isExternal?: boolean;
//     target?: string;
//     label?: string;
//   };
// };

// export function PageError({
//   title = 'Error',
//   message = 'An error occurred. Try again later...',
//   link,
//   className,
// }: PageErrorProps) {
//   const classes = classNames('ama-page-error', className);

//   return (
//     <div className={classes}>
//       <Container>
//         <Row className="d-flex flex-column-reverse flex-md-row pt-3">
//           <Col xs={12} md={8}>
//             <h1 className="text-center text-md-start">{title}</h1>
//             <p className="text-center text-md-start">{message}</p>
//           </Col>
//           <Col
//             xs={12}
//             md={4}
//             className="d-flex justify-content-center"
//           >
//             <Icon size="xl" icon="ama-error" />
//           </Col>
//         </Row>
//         {link && (
//           <Row className="d-flex justify-content-center pt-3">
//             <Col xs={12} md={3}>
//               <Button
//                 variant="primary" className='w-100'
//               >
//                 <Link
//                   link={link.url || '/'}
//                   isExternal={link.isExternal || false}
//                   target={link.target || '_self'}
//                 >
//                   <Icon icon="ama-arrow-left-circle" />
//                   <span className="back-label">{link.label || 'Back'}</span>
//                 </Link>
//               </Button>
//             </Col>
//           </Row>
//         )}
//       </Container>
//     </div>
//   );
// }
