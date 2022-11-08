/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable global-require */
import { ComponentMeta, Story } from '@storybook/react';
import React, { useId, useState } from 'react';
import { Image } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {
  CustomDropdownOption,
  Footer,
  FooterProps,
  Header,
  HeaderProps,
  Icon,
  InputTag,
  UserAreaOption,
  VerticalMenu,
  VerticalMenuLink
} from '../../../../components';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    isHomepage: { control: 'boolean' }
  }
} as ComponentMeta<typeof Header>;

export const HeaderExample: Story<HeaderProps> = (props) => {
  const options = [
    {
      authenticatedOption: false,
      value: 'login',
      icon: 'ama-login',
      label: 'Entrar no portal'
    },
    {
      authenticatedOption: false,
      value: 'register',
      icon: 'ama-add-user',
      label: 'Criar registo'
    },

    {
      authenticatedOption: true,
      value: 'user-area',
      icon: 'ama-user',
      label: 'Area Reservada'
    },
    {
      authenticatedOption: true,
      value: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão'
    }
  ] as UserAreaOption[];

  const languages = [
    {
      label: 'PT',
      value: 'pt'
    },
    {
      label: 'ES',
      value: 'es'
    },
    {
      label: 'EN',
      value: 'en'
    }
  ] as CustomDropdownOption[];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const languageChangeHandler = (val) => {
    console.log(val);
    setCurrentLanguage(val);
  };

  const onOptionChange = (val: UserAreaOption) => {
    console.log(val);
  };

  const links: VerticalMenuLink[] = [
    {
      label: 'link 1-1',
      link: '/example-lvl1-link1'
    },
    {
      label: 'link 1-2',
      children: [
        {
          label: 'link 2-1',
          link: '/example-lvl2-link1'
        },
        {
          label: 'link 2-2',
          link: '/example-lvl2-link2'
        },
        {
          label: 'link 2-3',
          children: [
            {
              label: 'link 3-1',
              link: '/example-lvl3-link1'
            },
            {
              label: 'link 3-2',
              link: '/example-lvl3-link2'
            }
          ]
        }
      ]
    },
    {
      label: 'link 1-3',
      link: '/example-lvl1-link3'
    },
    {
      label: 'link 1-4',
      link: '/example-lvl1-link4'
    }
  ];

  const onActivatedLink = () => {
    setBurgerMenuVisible(false);
  };

  const onBurgerVisibilityChangeHandler = (visible: boolean) => {
    setBurgerMenuVisible(visible);
  };

  return (
    <BrowserRouter>
      <Header
        isHomepage={props.isHomepage}
        logoSrc="/logo.svg"
        logoAlt="Homepage"
        isAuthenticated={props.isAuthenticated}
        username="Area reservada"
        homepageLink="/"
        languages={languages}
        activeLanguage={currentLanguage}
        options={options}
        onOptionChange={onOptionChange}
        onLanguageChange={languageChangeHandler}
        burgerMenuVisible={burgerMenuVisible}
        onBurgerVisibilityChange={onBurgerVisibilityChangeHandler}
        burgerMenuBody={<VerticalMenu links={links} onActivate={onActivatedLink} />}
      />
    </BrowserRouter>
  );
};
HeaderExample.storyName = 'Header example';

export const HeaderFooterExample: Story<HeaderProps> = (props) => {
  const options = [
    {
      authenticatedOption: false,
      value: 'login',
      icon: 'ama-login',
      label: 'Entrar no portal'
    },
    {
      authenticatedOption: false,
      value: 'register',
      icon: 'ama-add-user',
      label: 'Criar registo'
    },

    {
      authenticatedOption: true,
      value: 'user-area',
      icon: 'ama-user',
      label: 'Area Reservada'
    },
    {
      authenticatedOption: true,
      value: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão'
    }
  ] as UserAreaOption[];

  const languages = [
    {
      label: 'PT',
      value: 'pt'
    },
    {
      label: 'ES',
      value: 'es'
    },
    {
      label: 'EN',
      value: 'en'
    }
  ] as CustomDropdownOption[];

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
    classFooterCol02: 'bg-brand-yellow-secondary border border-white border-bottom-0',
    classFooterCol03: 'bg-brand-yellow-main border-white border-top',
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
        hasExternalLink: true,
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

  const inputTagOptions = [
    { label: 'John Doe', id: useId() },
    { label: 'Anna Doe', id: useId() },
    { label: 'Mark Doe', id: useId() },
    { label: 'Billy Doe', id: useId() },
    { label: 'Martha Doe', id: useId() },
    { label: 'Daisy Doe', id: useId() },
    { label: 'Jane Doe', id: useId() }
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const languageChangeHandler = (val) => {
    setCurrentLanguage(val);
  };

  const onOptionChange = (val: UserAreaOption) => {
    console.log(val);
  };

  return (
    <BrowserRouter>
      <Header
        isHomepage={props.isHomepage}
        logoSrc="/logo.svg"
        logoAlt="Homepage"
        isAuthenticated={props.isAuthenticated}
        username="Area reservada"
        homepageLink="/"
        languages={languages}
        activeLanguage={currentLanguage}
        options={options}
        onOptionChange={onOptionChange}
        onLanguageChange={languageChangeHandler}
      />

      <label htmlFor="input-tag-id-1">My Options</label>
      <InputTag inputId="input-tag-id-1" labeledBy="my-label" options={inputTagOptions} />

      <Footer {...args} />
    </BrowserRouter>
  );
};
HeaderFooterExample.storyName = 'Header Footer example';
