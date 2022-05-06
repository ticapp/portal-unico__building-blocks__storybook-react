import classNames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UrlObject } from 'url';
import { LanguageSelector } from '../language-selector';
import { Logo } from '../logo';
import './header.scss';

declare type Url = string | UrlObject;

export interface HeaderProps {
  /** Additional class names for the component */
  className?: string;

  /** Path for logo image */
  logoSrc?: string;
  /** Alt text for logo image */
  logoAlt?: string;
  /** Homepage Link used when user clicks the image */
  homepageLink?: Url;
  /** Enable or disable clicks on logo image if current page is homepage */
  isHomepage?: boolean;

  /** Available language list */
  languages?: { [key: string]: string };
  /** Active language. Must exist in the languages list */
  activeLanguage?: string;
  /** Event fired when a new language is selected */
  onLanguageChange?: (newLang: string) => void;
}

const Header = ({
  className,

  logoSrc,
  logoAlt,
  homepageLink = '/',
  isHomepage = false,

  languages,
  activeLanguage,
  onLanguageChange,
}: HeaderProps) => {
  const classes = classNames('ama-header', 'py-3 px-4', className);

  const languageChangeHandler = (newLanguage: string) => {
    onLanguageChange?.(newLanguage);
  };

  return (
    <div className={classes}>
      <Container>
        <Row>
          <Col xs={10} md={8} className="text-start">
            <Logo
              src={logoSrc}
              alt={logoAlt}
              homepageLink={homepageLink}
              isHomepage={isHomepage}
            />
          </Col>
          <Col
            xs={2}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <LanguageSelector
              languages={languages}
              onLanguageChange={languageChangeHandler}
              active={activeLanguage}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Header };
