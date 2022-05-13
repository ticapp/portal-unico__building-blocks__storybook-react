import classNames from 'classnames';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { UrlObject } from 'url';
import { useWindowSize } from '../../hooks';
import { Icon } from '../icon';
import { Logo } from '../logo';
import { Select, SelectOption } from '../select';
import './header.scss';

declare type Url = string | UrlObject;

export interface HeaderProps {
  /** Additional class names for the component */
  className?: string;

  /** Path for logo image */
  logoSrc?: string;
  /** Alt text for logo image */
  logoAlt?: string;
  /** Title for homepage link */
  homepageLinkTitle?: string;
  /** Homepage Link used when user clicks the image */
  homepageLink?: Url;
  /** Enable or disable clicks on logo image if current page is homepage */
  isHomepage?: boolean;

  /** Available language list */
  languages?: SelectOption[];
  /** Active language. Must exist in the languages list */
  activeLanguage?: SelectOption;
  /** Event fired when a new language is selected */
  onLanguageChange?: (val: SelectOption | SelectOption[]) => void;
  /** Event fired when mobile menu drawer is clicked */
  onMenuClick?: () => void;
}

const Header = ({
  className,

  logoSrc,
  logoAlt,

  homepageLinkTitle,
  homepageLink = '/',
  isHomepage = false,

  languages = [],
  activeLanguage,
  onLanguageChange,

  onMenuClick,
}: HeaderProps) => {
  const { width } = useWindowSize();

  const classes = classNames('ama-header', className);

  const languageChangeHandler = (val: SelectOption | SelectOption[]) => {
    onLanguageChange?.(val);
  };

  const burgerClickHandler = () => {
    onMenuClick?.();
  };

  if (!languages.length) {
    languages.push({
      label: 'PT',
      value: 'pt',
    } as SelectOption);
  }

  return (
    <Container fluid className={classes}>
      <Row className="d-flex align-items-center justify-content-between">
        <Col className="d-flex justify-content-start">
          {width < 768 && (
            <Button variant="link" onClick={burgerClickHandler}>
              <Icon icon="ama-burger" />
            </Button>
          )}

          {width >= 768 && (
            <Logo
              src={logoSrc}
              alt={logoAlt}
              width={225}
              height={58}
              title={homepageLinkTitle}
              homepageLink={homepageLink}
              isHomepage={isHomepage}
            />
          )}
        </Col>
        <Col className="d-flex justify-content-end">
          <label className="d-none" id="label-for-language">Current language</label>
          <Select
            className="language-selector"
            labelledby="label-for-language"
            options={languages}
            onChange={languageChangeHandler}
            active={activeLanguage || languages[0]}
            disabled={languages.length <= 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export { Header };
