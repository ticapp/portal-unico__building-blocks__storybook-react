// import React from 'react';
// import { List } from './list';
// import { BrowserRouter } from 'react-router-dom';

// export const BasicList = () => {
//   return (
//     <BrowserRouter>
//       <List
//         listData={[
//           {
//             value: 'Contactos ePortugal (external Link)',
//             hasExternalLink: false,
//             link: '',
//             title: '',
//           },
//           {
//             value: 'Componente Logo (inside link)',
//             hasExternalLink: false,
//             link: '',
//             title: '',
//           },
//         ]}
//       ></List>
//     </BrowserRouter>
//   );
// };

// export const ListBulletsImg = () => {
//   return (
//     <BrowserRouter>
//       <List
//         listData={[
//           {
//             value: 'Contactos ePortugal (external Link)',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt/contactos',
//             title: 'external link',
//           },
//           {
//             value: 'Componente Logo (inside link)',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listStyleImageUrl='https://picsum.photos/14/14'
//       ></List>
//     </BrowserRouter>
//   );
// };

// export const ListLinkBulletsInside = () => {
//   return (
//     <BrowserRouter>
//       <List
//         listData={[
//           {
//             value: 'Contactos ePortugal (external Link)',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt/contactos',
//             title: 'external link',
//           },
//           {
//             value: 'Componente Logo (inside link)',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listStylePosition='inside'
//         listStyleType='square'
//       ></List>
//     </BrowserRouter>
//   );
// };

// export const ListLinkBulletsOutside = () => {
//   return (
//     <BrowserRouter>
//       <List
//         listData={[
//           {
//             value: 'Contactos ePortugal (external Link)',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt/contactos',
//             title: 'external link',
//           },
//           {
//             value: 'Componente Logo (inside link)',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listStylePosition='outside'
//         listStyleType='square'
//       ></List>
//     </BrowserRouter>
//   );
// };

// export const ListLinkBulletsNumbers = () => {
//   return (
//     <BrowserRouter>
//       <List
//         listData={[
//           {
//             value: 'Contactos ePortugal (external Link)',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt/contactos',
//             title: 'external link',
//           },
//           {
//             value: 'Componente Logo (inside link)',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listStyleType='decimal'
//       ></List>
//     </BrowserRouter>
//   );
// };
