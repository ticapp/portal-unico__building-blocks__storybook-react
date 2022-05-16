import React, { ReactNode } from 'react';
import './card.scss';
import classNames from 'classnames';
import { Card as BsCard, CardProps as BsCardProps, Col, Container, Row } from 'react-bootstrap';
import { Icon } from '../icon';
import { Link } from '../link';

export interface CardProps extends BsCardProps {
  /** Add classes to the Card component */
  className?: string;

  /** Inner childs of the component to be rendered */
  children?: ReactNode;

  /** Pre-title string, used to categorized */
  preTitle?: string;

  /** Main title */
  mainTitle?: string;

  /** Subtitle */
  description?: string;

  /**Content Icon name */
  contentIcon?: string;

  /**Content */
  content?: ReactNode | string;

  /** Link */
  link?: string;

  /** Accessibility title for link */
  title?: string;

  /** Link label */
  linkLabel?: string;

  /** Icon link */
  linkIcon?: string;
}

export const Card = ({ className, children, preTitle, mainTitle, description, contentIcon = '', content, link = '', title, linkLabel, linkIcon = '', ...props }: CardProps) => {
  const cssCard = classNames('ama-card', className);
  return (
    <BsCard className={cssCard} {...props}>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} xl={12}>
            {preTitle && <div className='fs-14 lh-24 fw-normal'>{preTitle}</div>}
          </Col>
          {mainTitle && description && (
            <Col xs={12} md={12} xl={12}>
              {mainTitle && <h3 className='fs-20 lh-32 fw-800'>{mainTitle}</h3>}
              {description && <p className='fs-14 lh-24 fw-normal'>{description}</p>}
            </Col>
          )}
          <Col xs={12} md={12} xl={12}>
            {contentIcon && content && (
              <div>
                <Icon icon={contentIcon} ariaHidden='true' />
                <span>{content}</span>
              </div>
            )}
            {children}
          </Col>
          <Col xs={6} md={6} xl={6}>
            <Link link={link} title={title}>
              {linkLabel}
            </Link>
          </Col>
          <Col xs={6} md={6} xl={6}>
            <Link link={link} title={title}>
              <Icon icon={linkIcon} ariaHidden='true' />
            </Link>
          </Col>
        </Row>
      </Container>
    </BsCard>
  );
};
