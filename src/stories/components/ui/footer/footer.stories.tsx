import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer, FooterProps } from '../../../../components/ui';
import { Icon } from '../../../../components';
import { Image } from 'react-bootstrap';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const BasicFooter: Story<FooterProps> = () => {
  const args = {
    headerTitle_01: 'Contactos e sites Públicos',
    contentInfo_01: [
      { label: 'Centro de Contacto Cidadão (dias úteis: 9h - 18h)', value: '300 003 990 ou 210 489 010' },
      { label: 'Centro de Contacto Empresas (dias úteis: 9h - 18h)', value: '300 003 980 ou 210 489 010' },
    ],
    headerTitle_02: 'Links úteis',
    headerTitle_03: 'Redes sociais',
    classFooterCopyright: 'text-center fw-bold',
    classFooterCol_01: 'bg-brand-yellow-terciary',
    classFooterCol_02: 'bg-brand-yellow-secondary border border-white border-1',
    classFooterCol_03: 'bg-brand-yellow-main border border-white border-1',
    listDataCol_01: [
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Contactos ePortugal
          </>
        ),
        hasExternalLink: true,
        link: 'https://eportugal.gov.pt/contactos',
        title: 'external link',
      },
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Sites e Apps públicos,
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/logo',
        title: 'internal link',
      },
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Linhas úteis
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/logo',
        title: 'internal link',
      },
    ],
    listDataCol_02: [
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            APP.GOV.PT
          </>
        ),
        hasExternalLink: true,
        link: 'https://eportugal.gov.pt',
        title: 'external link',
      },
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Acessibilidade
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/logo',
        title: 'internal link',
      },
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Linhas úteis
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/logo',
        title: 'internal link',
      },
      {
        value: (
          <>
            <Icon ariaHidden='true' icon='ama-arrow-right' />
            Termos e condições
          </>
        ),
        hasExternalLink: false,
        link: '/react/ui/logo',
        title: 'internal link',
      },
    ],
    listDataCol_03: [
      {
        value: <Icon ariaHidden='true' icon='ama-facebook' alt='AMA Facebook' />,
        hasExternalLink: true,
        link: 'https://facebook.com',
        title: 'facebook',
      },
      {
        value: <Icon ariaHidden='true' icon='ama-twitter' alt='AMA Twitter' />,
        hasExternalLink: true,
        link: 'https://twitter.com',
        title: 'Twitter',
      },
      {
        value: <Icon ariaHidden='true' icon='ama-linkedin' alt='AMA Linkedin' />,
        hasExternalLink: true,
        link: 'https://www.linkedin.com/',
        title: 'linkedin',
      },
    ],
    listDataRowImagesLink: [
      {
        value: <Image src={require('../../../../assets/img/rp.png')} alt='Portal do Governo' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Portal do Governo',
      },
      {
        value: <Image src={require('../../../../assets/img/ama.png')} alt='Agência para a Modernização Administrativa' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Agência para a Modernização Administrativa',
      },
      { value: <Image src={require('../../../../assets/img/simplex.png')} alt='Simplex' />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'Simplex' },
      { value: <Image src={require('../../../../assets/img/eugo.png')} alt='Rede EUGO' />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'Rede EUGO' },
      {
        value: <Image src={require('../../../../assets/img/net.png')} alt='Sistema de Informação do Mercado Interno (IMI)' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Sistema de Informação do Mercado Interno (IMI)',
      },
      {
        value: <Image src={require('../../../../assets/img/compete2020.png')} alt='Compete2020' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Compete2020',
      },
      {
        value: <Image src={require('../../../../assets/img/pt2020.png')} alt='Portugal2020' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Portugal2020',
      },
      {
        value: <Image src={require('../../../../assets/img/ue.png')} alt='Fundos Europeus Estruturais e de Investimento' />,
        hasExternalLink: true,
        link: 'https://www.portugal.gov.pt/',
        title: 'Fundos Europeus Estruturais e de Investimento',
      },
      { value: <Image src={require('../../../../assets/img/eu.png')} alt='A sua Europa' />, hasExternalLink: true, link: 'https://www.portugal.gov.pt/', title: 'A sua Europa' },
    ],
    listDataCol_01_Type: 'none',
    listDataCol_02_Type: 'none',
  } as FooterProps;

  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};
BasicFooter.storyName = 'Basic Footer';
