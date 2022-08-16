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
    classFooterCol02: 'bg-brand-yellow-secondary',
    classFooterCol03: 'bg-brand-yellow-main',
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
        title: 'abre numa nova janela'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal"> Linhas úteis </span>
          </>
        ),
        hasExternalLink: true,
        link: 'https://eportugal.gov.pt/linhas-uteis',
        title: 'abre numa nova janela'
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
        link: 'https://www.app.gov.pt',
        title: 'abre numa nova janela'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Mapa do site </span>
          </>
        ),
        hasExternalLink: false,
        link: 'https://eportugal.gov.pt/mapa-do-site',
        title: 'abre numa nova janela'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Termos e condições</span>
          </>
        ),
        hasExternalLink: false,
        link: 'https://eportugal.gov.pt/termos-e-condicoes',
        title: 'abre numa nova janela'
      },
      {
        value: (
          <>
            <Icon ariaHidden="true" icon="ama-arrow-right" className="col-1 me-10" size="sm" />
            <span className="col-11 text-medium-normal">Sobre o portal </span>
          </>
        ),
        hasExternalLink: false,
        link: 'https://eportugal.gov.pt/sobre',
        title: 'abre numa nova janela'
      }
    ],
    listDataCol03: [
      {
        value: <Icon ariaHidden="true" icon="ama-twitter" alt="AMA Twitter" size="sm" />,
        hasExternalLink: true,
        link: 'https://www.twitter.com/ama_gov_pt',
        title: 'Página da Agência para a Modernização Administrativa no Twitter'
      },
      {
        value: <Icon ariaHidden="true" icon="ama-facebook" alt="AMA Facebook" size="sm" />,
        hasExternalLink: true,
        link: 'https://www.facebook.com/ama.gov.pt',
        title: 'Página da Agência para a Modernização Administrativa no Facebook'
      },
      {
        value: <Icon ariaHidden="true" icon="ama-linkedin" alt="AMA Linkedin" size="sm" />,
        hasExternalLink: true,
        link: 'https://www.linkedin.com/company/ama-gov-pt/',
        title: 'Página da Agência para a Modernização Administrativa no Linkedin'
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
