import classNames from 'classnames';
import React, { useId } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, ButtonProps, Icon, Link } from '../../ui';
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
  const cssErrorPage = classNames('bg-neutral-light', 'd-flex align-items-center justify-content-center flex-column m-0 p-40', className);

  return (
    <Container fluid className="ama-error-page px-0 py-80">
      <Row>
        <Col className={cssErrorPage}>
          <Icon icon="ama-warning-circle" className="mb-16 error-icon" />
          <h4 className="mb-16 text-uppercase fc-semantic-alerts">{title}</h4>
          <span className="mb-0">{subtitle}</span>
          {link && (
            <Link link={link.url} className="link link-dark">
              {link.title}
            </Link>
          )}
        </Col>
      </Row>
      {buttons.length > 0 && (
        <Row className="mt-32">
          <Col className="d-flex justify-content-center error-actions-container">
            {buttons.map((bArgs) => {
              const classes = `error-action ${bArgs.className}`;
              return <Button key={useId()} {...bArgs} className={classes} />;
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};
