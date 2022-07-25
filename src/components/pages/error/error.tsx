import classNames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Button, ButtonProps, Link } from '../../ui';
import './error.scss';

export interface ErrorProps {
  /** Additional class to component */
  className?: string;

  /** Data to fill content */
  title: string;

  /** Subtitle */
  subtitle: string;

  /** Link to click */
  link?: {
    title: string;
    url: string;
  };

  /** Buttons for multiple actions */
  buttons?: ButtonProps[];
}

export const ErrorPage = ({ className, title, subtitle, link, buttons = [] }: ErrorProps) => {
  const cssErrorPage = classNames(
    'bg-brand-green-main fc-neutral-white',
    'd-flex align-items-center justify-content-center flex-column m-0 pt-48 pb-32',
    className
  );

  return (
    <Container fluid className="ama-error-page p-0">
      <Row>
        <Col className={cssErrorPage}>
          <h1 className="font-family-lato mb-32 text-uppercase">{title}</h1>
          <span className="mb-0">{subtitle}</span>

          {link && (
            <Link link={link.url} className="link fc-neutral-white">
              {link.title}
            </Link>
          )}
        </Col>
      </Row>

      {buttons.length > 0 && (
        <Row className="mt-32 ">
          <Col className="d-flex justify-content-center error-actions-container">
            {buttons.map((bArgs) => {
              const classes = `error-action ${bArgs.className}`;
              return <Button key={uuidv4()} {...bArgs} className={classes} />;
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};
