// import React from 'react';
// import { Footer } from './footer';
// import { Image } from 'react-bootstrap';
// import { Icon } from '@ama-design-system/react.ui.icon';
// import { BrowserRouter } from 'react-router-dom';
// const rp = require('./images/rp.png');

// export const BasicFooter = () => {
//   return (
//     <BrowserRouter>
//       <Footer
//         headerTitle_01='Contactos e sites Públicos'
//         contentInfo_01={[
//           { label: 'Centro de Contacto Cidadão (dias úteis: 9h - 18h)', value: '300 003 990 ou 210 489 010' },
//           { label: 'Centro de Contacto Empresas (dias úteis: 9h - 18h)', value: '300 003 980 ou 210 489 010' },
//         ]}
//         headerTitle_02='Links úteis'
//         headerTitle_03='Redes sociais'
//         classFooterCopyright='text-center fw-bold'
//         classFooterCol_01='p-5'
//         classFooterCol_02='p-5'
//         classFooterCol_03='p-5'
//         listDataCol_01={[
//           {
//             value: 'Contactos ePortugal',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt/contactos',
//             title: 'external link',
//           },
//           {
//             value: 'Sites e Apps públicos',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//           {
//             value: 'Linhas úteis',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listDataCol_02={[
//           {
//             value: 'APP.GOV.PT',
//             hasExternalLink: true,
//             link: 'https://eportugal.gov.pt',
//             title: 'external link',
//           },
//           {
//             value: 'Acessibilidade',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//           {
//             value: 'Mapa do site',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//           {
//             value: 'Termos e condições',
//             hasExternalLink: false,
//             link: '/react/ui/logo',
//             title: 'internal link',
//           },
//         ]}
//         listDataCol_03={[
//           {
//             value: <Icon icon='ama-facebook' alt='AMA Facebook' aria-hidden='true' />,
//             hasExternalLink: true,
//             link: 'https://facebook.com',
//             title: 'facebook',
//           },
//           {
//             value: <Icon icon='ama-twitter' alt='AMA Twitter' aria-hidden='true' />,
//             hasExternalLink: true,
//             link: 'https://twitter.com',
//             title: 'Twitter',
//           },
//           {
//             value: <Icon icon='ama-linkedin' alt='AMA Linkedin' aria-hidden='true' />,
//             hasExternalLink: true,
//             link: 'https://www.linkedin.com/',
//             title: 'linkedin',
//           },
//         ]}
//         listDataRowImagesLink={[
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//           { value: <Image src={rp} />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'República Portuguesa' },
//         ]}
//       ></Footer>
//     </BrowserRouter>
//   );
// };
