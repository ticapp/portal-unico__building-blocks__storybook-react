import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserArea, UserAreaOption } from './user-area';
import './header.scss';
import { Logo } from './logo';
import { CustomDropdown, CustomDropdownOption } from './customDropdown';

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
  username = 'Area Reservada'
}) => {
  return (
    <Container fluid className="ama-header m-0 p-0">
      <Container className="upper-lvl px-0 px-md-16 pb-0 pb-md-16">
        <Row>
          <Col className="px-16" xs={12} md={2}>
            <Logo src={logoSrc} alt={logoAlt} isHomepage={isHomepage} homepageLink={homepageLink} title={homepageLinkTitle} />
          </Col>
          <hr className="d-block d-md-none m-0 mt-16 p-0 " />
          <Col xs={12} md={10} className="d-flex justify-content-between justify-content-md-end align-items-center p-16">
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
          </Col>
        </Row>
      </Container>
      <hr className="m-0 p-0" />
    </Container>
  );
};

export { Header };
