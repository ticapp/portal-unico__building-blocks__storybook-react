/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useState } from 'react';
import { Col, Container, Nav, Offcanvas, Row } from 'react-bootstrap';
import { UrlObject } from 'url';

import { v4 as uuidv4 } from 'uuid';
import { useWindowSize } from '../../hooks';
import { Button } from '../buttons';
import { Icon } from '../icon';
import { Logo } from '../logo';
import { Select, SelectOption } from '../select';

import './header.scss';
import { UserAreaOption } from '../user-area';
import { NavLink } from '../navlink';
import { HorizontalMenu, HorizontalMenuLink } from '../horizontal-menu';

declare type Url = string | UrlObject;

export interface HeaderProps {
  /** Additional class names for the component */
  className?: string;

  /** Path for logo image */
  logoSrc: string;
  /** Alt text for logo image */
  logoAlt?: string;
  /** Title for homepage link */
  homepageLinkTitle?: string;
  /** Homepage Link used when user clicks the image */
  homepageLink?: Url;
  /** Enable or disable clicks on logo image if current page is homepage */
  isHomepage?: boolean;

  /** label for language select */
  languageLabel?: string;
  /** Available language list */
  languages?: SelectOption[];
  /** Active language. Must exist in the languages list */
  activeLanguage?: SelectOption;
  /** Event fired when a new language is selected */
  onLanguageChange?: (val: SelectOption) => void;

  /** Options to be used in user area */
  options: UserAreaOption[];
  /** Links to render in navbar */
  links: HorizontalMenuLink[];

  /** Show or hide authentication menu options */
  isAuthenticated?: boolean;
  /** Username to display on user area dropdown */
  username?: string;
}

const Header = ({
  className = '',

  logoSrc = '',
  logoAlt = '',

  homepageLinkTitle = '',
  homepageLink = '/',
  isHomepage = false,

  languageLabel = 'Current language',
  languages,
  activeLanguage,
  onLanguageChange,

  options,
  links,

  isAuthenticated = false,
  username = 'Area Reservada'
}: HeaderProps) => {
  const { width } = useWindowSize();
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  const offCanvasCloseHandler = () => {
    setShowMenuOverlay(false);
  };

  const burgerClickHandler = () => {
    setShowMenuOverlay(true);
  };

  const enteredOffCanvasHandler = () => {
    const elems = document.querySelectorAll('#navigation-links .nav-link');
    if (elems) {
      (elems.item(0) as HTMLElement).focus();
    }
  };

  let parsedLanguages: SelectOption[] = [];
  let parsedActiveLanguage: SelectOption;
  if (!languages || !Array.isArray(languages)) {
    const defaultOption = {
      label: 'PT',
      value: 'pt',
      labelElement: (
        <span className="d-flex align-items-center">
          <span>PT</span>
          <Icon className="ms-8 marker" icon="ama-check" size="sm" />
        </span>
      )
    } as SelectOption;

    parsedLanguages.push(defaultOption);
    parsedActiveLanguage = defaultOption;
  } else {
    parsedLanguages = languages.map((l) => {
      if (l.labelElement) {
        return l;
      }
      return {
        ...l,
        labelElement: (
          <span className="d-flex align-items-center">
            <span>{l.label}</span>
            <Icon className="ms-8 marker" icon="ama-check" size="sm" />
          </span>
        )
      };
    });

    parsedActiveLanguage = parsedLanguages.find((pl) => pl.value === activeLanguage?.value) || parsedLanguages[0];
  }

  const [currentLanguage, setCurrentLanguage] = useState(parsedActiveLanguage);

  const languageChangeHandler = (val: SelectOption | SelectOption[]) => {
    if (!Array.isArray(val)) {
      onLanguageChange?.(val);
      setCurrentLanguage(val);
    }
  };

  const classes = classNames('ama-header', className, 'w-100 pt-0 pb-0 pt-md-24 pb-md-16');

  const buildUserAreaOption = (o: UserAreaOption) => {
    return (
      <li key={uuidv4()} role="menuitem">
        <NavLink className="nav-link" href={o.link}>
          <span className="nav-link-label">{o.label}</span>
        </NavLink>
      </li>
    );
  };

  const authenticatedOptions = options.filter((o) => o.authenticatedOption).map(buildUserAreaOption);

  const unauthenticatedOptions = options.filter((o) => !o.authenticatedOption).map(buildUserAreaOption);

  return (
    <header className={classes}>
      <Container>
        <Row>
          {width < 768 && (
            <Col className="d-flex justify-content-start py-16 m-0">
              <Button
                bsPrefix="ama-burger-button"
                onClick={burgerClickHandler}
                aria-label="Open Navigation Menu Overlay"
                aria-controls="navigation-menu-offcanvas"
              >
                <Icon icon="ama-burger" />
              </Button>
            </Col>
          )}

          {width >= 768 && (
            <>
              <Col className="d-flex justify-content-start p-0 m-0">
                <div className="ms-16 d-flex align-items-center">
                  <Logo
                    src={logoSrc}
                    alt={logoAlt}
                    width={225}
                    height={58}
                    title={homepageLinkTitle}
                    homepageLink={homepageLink}
                    isHomepage={isHomepage}
                  />
                </div>
              </Col>
              <Col className="d-flex justify-content-end p-0 m-0">
                <label className="d-none" id="label-for-language">
                  {languageLabel}
                </label>
                <Select
                  className="language-selector"
                  labelledby="label-for-language"
                  options={parsedLanguages}
                  onChange={languageChangeHandler}
                  active={currentLanguage}
                  disabled={parsedLanguages.length <= 1}
                  size="sm"
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
      <hr className="my-0 my-md-16" />
      {width >= 768 && (
        <Container>
          <Row>
            <Col className="p-0 m-0">
              <div className="mx-16">
                <HorizontalMenu isAuthenticated={isAuthenticated} username={username} options={options} links={links} />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {width < 768 && (
        <Offcanvas
          id="navigation-menu-offcanvas"
          aria-label="Navigation Menu Overlay"
          className="ama-header-offcanvas"
          show={showMenuOverlay}
          onHide={offCanvasCloseHandler}
          onEntered={enteredOffCanvasHandler}
        >
          <Offcanvas.Header>
            <Button
              aria-label="Close Navigation Menu Overlay"
              bsPrefix="ama-close-offcanvas-button"
              onClick={offCanvasCloseHandler}
              aria-controls="navigation-menu-offcanvas"
            >
              <Icon icon="ama-close" size="lg" ariaHidden />
            </Button>

            <label className="d-none" id="label-for-offcanvas-language">
              {languageLabel}
            </label>
            <Select
              className="offcanvas-language-selector"
              labelledby="label-for-offcanvas-language"
              options={parsedLanguages}
              onChange={languageChangeHandler}
              active={currentLanguage}
              disabled={parsedLanguages.length <= 1}
              size="sm"
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul role="menu" id="navigation-links" aria-label="Navigation Menu">
              {links &&
                links.map((l) => {
                  return (
                    <li key={`offcanvas-link-${uuidv4()}`} role="menuitem">
                      <NavLink activeClassName="active" className="nav-link" exact href={l.link}>
                        <span className="nav-link-label">{l.label}</span>
                      </NavLink>
                    </li>
                  );
                })}

              <li aria-hidden="true">
                <Nav.Item className="py-8 px-16">
                  <hr />
                </Nav.Item>
              </li>

              {isAuthenticated && authenticatedOptions}
              {!isAuthenticated && unauthenticatedOptions}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </header>
  );
};

export { Header };
