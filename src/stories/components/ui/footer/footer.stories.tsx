/* eslint-disable global-require */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Image } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from '../../../../components';
import { Footer, FooterProps } from '../../../../components/ui';

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

export const BasicFooter: Story<FooterProps> = () => {
  const args = {
    headerTitle01: 'Contactos e sites Públicos',
    contentInfo01: [
      { label: 'Centro de Contacto Cidadão (dias úteis: 9h - 18h)', value: '300 003 990 ou 210 489 010' },
      { label: 'Centro de Contacto Empresas (dias úteis: 9h - 18h)', value: '300 003 980 ou 210 489 011' }
    ],
    headerTitle02: 'Links úteis',
    headerTitle03: 'Redes sociais',
    classFooterCopyright: 'text-center',
    classFooterCol01: 'bg-brand-yellow-terciary',
    classFooterCol02: 'bg-brand-yellow-secondary border border-white border-bottom-0 border-top-0',
    classFooterCol03: 'bg-brand-yellow-main border-white border-top-0 border-bottom-0',
    styleBackgroundFooterColor: { background: 'linear-gradient(to left, #fbcf5f 25%, #f5c037 25%, #efb82e 50%)' },
    listDataCol01: [
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Contactos ePortugal</span>
          </>
        ),
        hasExternalLink: true,
        link: 'https://eportugal.gov.pt/contactos',
        title: 'external link'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal"> Linhas úteis </span>
          </>
        ),
        hasExternalLink: false,
        link: 'https://eportugal.gov.pt/utils',
        title: 'internal link'
      }
    ],
    listDataCol02: [
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">APP.GOV.PT </span>
          </>
        ),
        hasExternalLink: true,
        link: 'https://eportugal.gov.pt',
        title: 'external link'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Mapa do site </span>
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/mapa',
        title: 'internal link'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Termos e condições</span>
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/terms',
        title: 'internal link'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Sobre o portal </span>
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/about',
        title: 'internal link'
      }
    ],
    listDataCol03: [
      {
        value: <Icon ariaHidden="true" icon="ama-twitter" alt="AMA Twitter" />,
        hasExternalLink: true,
        link: 'https://twitter.com',
        title: 'Twitter'
      },
      {
        value: <Icon ariaHidden="true" icon="ama-facebook" alt="AMA Facebook" />,
        hasExternalLink: true,
        link: 'https://facebook.com',
        title: 'facebook'
      },
      {
        value: <Icon ariaHidden="true" icon="ama-linkedin" alt="AMA Linkedin" />,
        hasExternalLink: true,
        link: 'https://www.linkedin.com/',
        title: 'linkedin'
      }
    ],
    listDataRowImagesLink: [
      {
        value: <Image src={require('../../../../assets/img/simplex.png')} alt="Simplex" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Simplex'
      },
      {
        value: <Image src={require('../../../../assets/img/rp.png')} alt="Portal do Governo" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Portal do Governo'
      },
      {
        value: <Image src={require('../../../../assets/img/ama.png')} alt="Agência para a Modernização Administrativa" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Agência para a Modernização Administrativa'
      },
      {
        value: <Image src={require('../../../../assets/img/ue.png')} alt="Fundos Europeus Estruturais e de Investimento" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Fundos Europeus Estruturais e de Investimento'
      },
      {
        value: <Image src={require('../../../../assets/img/compete2020.png')} alt="Compete2020" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Compete2020'
      },
      {
        value: <Image src={require('../../../../assets/img/pt2020.png')} alt="Portugal2020" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Portugal2020'
      },
      {
        value: <Image src={require('../../../../assets/img/eu.png')} alt="A sua Europa" />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'A sua Europa'
      }
    ],
    listDataCol01Type: 'none',
    listDataCol02Type: 'none'
  } as FooterProps;

  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};
BasicFooter.storyName = 'Basic Footer';
