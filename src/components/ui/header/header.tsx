import React, { ReactNode, useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { UserArea, UserAreaOption } from './user-area';
import './header.scss';
import { Logo } from './logo';
import { CustomDropdown, CustomDropdownOption } from './customDropdown';
import { Icon } from '../icon';
import { useWindowSize } from '../../hooks';
import { Button } from '../buttons';

export interface HeaderProps {
  /** Path for logo image */
  logoSrc: string;
  /** Alt text for logo image */
  logoAlt?: string;
  /** Enable or disable clicks on logo image if current page is homepage */
  isHomepage?: boolean;
  /** Title for homepage link */
  homepageLinkTitle?: string;
  /** Homepage Link used when user clicks the image */
  homepageLink?: string;

  /** label for language select */
  languageLabel?: string;
  /** Available language list */
  languages?: CustomDropdownOption[];
  /** Active language. Must exist in the languages list */
  activeLanguage?: CustomDropdownOption;
  /** Event fired when a new language is selected */
  onLanguageChange?: (val: CustomDropdownOption) => void;

  /** Show or hide authentication menu options */
  isAuthenticated?: boolean;
  /** Username to display on user area dropdown */
  username?: string;
  /** Options to be used in user area */
  options?: UserAreaOption[];
  /** Callback to run whenever the user area option changes */
  onOptionChange?: (val: UserAreaOption) => void;

  /** Elements to render in mobile when burger menu is pressed */
  burgerMenuBody?: ReactNode;
  burgerMenuAriaLabel?: string;
  burgerOpenAriaLabel?: string;
  burgerCloseAriaLabel?: string;
}

const Header = ({
  logoSrc = '',
  logoAlt = '',

  isHomepage = false,
  homepageLink = '/',
  homepageLinkTitle = '',

  languageLabel = 'Current language',
  languages = [] as CustomDropdownOption[],

  activeLanguage,
  onLanguageChange,

  options = [] as UserAreaOption[],
  onOptionChange,

  isAuthenticated = false,
  username = 'Area Reservada',

  burgerMenuBody = false,
  burgerMenuAriaLabel = 'Navigation Menu Overlay',
  burgerOpenAriaLabel = 'Open Navigation Menu Overlay',
  burgerCloseAriaLabel = 'Close Navigation Menu Overlay'
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
    const elems = document.querySelectorAll('.nav-link');
    if (elems.length > 0) {
      (elems.item(0) as HTMLElement).focus();
    } else {
      const button = document.querySelectorAll('.ama-header-offcanvas .offcanvas-header .ama-close-offcanvas-button');
      if (button.length > 0) {
        (button.item(0) as HTMLButtonElement).focus();
      }
    }
  };

  return (
    <Container fluid className="ama-header m-0 p-0">
      <Container className="px-24 py-12 py-md-24">
        <Row className="d-flex align-items-center">
          <Col md={4}>
            <div className="d-flex align-items-center">
              <Button
                bsPrefix="ama-burger-button"
                className="d-block d-md-none flex-grow-0 align-items-center justify-content-center p-0 m-0"
                onClick={burgerClickHandler}
                aria-label={burgerOpenAriaLabel}
                aria-controls="navigation-menu-offcanvas"
              >
                <Icon icon="ama-burger" ariaHidden />
              </Button>
              <Logo
                className="flex-grow-1 d-flex justify-content-center justify-content-md-start"
                src={logoSrc}
                alt={logoAlt}
                isHomepage={isHomepage}
                homepageLink={homepageLink}
                title={homepageLinkTitle}
              />
            </div>
          </Col>
          <Col md={8} className="d-none d-md-block">
            <div className="d-flex justify-content-end align-items-center">
              <div className="language-selector-container">
                <CustomDropdown
                  showCheckMark
                  active={activeLanguage}
                  options={languages}
                  ariaLabel={languageLabel}
                  onChange={onLanguageChange}
                />
              </div>
              <div className="user-area-container ms-8">
                <UserArea options={options} onOptionChange={onOptionChange} isAuthenticated={isAuthenticated} username={username} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="m-0 p-0" />
      {width < 768 && (
        <Offcanvas
          id="navigation-menu-offcanvas"
          aria-label={burgerMenuAriaLabel}
          className="ama-header-offcanvas"
          show={showMenuOverlay}
          onHide={offCanvasCloseHandler}
          onEntered={enteredOffCanvasHandler}
        >
          <Offcanvas.Header className="d-flex justify-content-end px-24 py-12">
            <Button
              className="m-0 p-0 d-flex align-items-center justify-content-center"
              bsPrefix="ama-close-offcanvas-button"
              onClick={offCanvasCloseHandler}
              aria-label={burgerCloseAriaLabel}
              aria-controls="navigation-menu-offcanvas"
            >
              <Icon icon="ama-close" size="lg" ariaHidden />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body className="m-0 p-0">
            {!!burgerMenuBody && (
              <Row className="px-24 py-16">
                <Col>{burgerMenuBody}</Col>
              </Row>
            )}

            <Row>
              <Col className="d-flex lang-user-container">
                <div className="flex-grow-0 mobile-language-selector">
                  <CustomDropdown
                    showCheckMark
                    className="px-24 py-16"
                    active={activeLanguage}
                    options={languages}
                    ariaLabel={languageLabel}
                    onChange={onLanguageChange}
                  />
                </div>
                <div className="flex-grow-1 mobile-user-area">
                  <UserArea
                    className="px-24 py-16"
                    options={options}
                    onOptionChange={onOptionChange}
                    isAuthenticated={isAuthenticated}
                    username={username}
                  />
                </div>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </Container>
  );
};

export { Header };
