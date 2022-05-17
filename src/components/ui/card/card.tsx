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

  /** Is a external link? */
  isExternal?: boolean;

  /** Accessibility title for link */
  title?: string;

  /** Link label */
  linkLabel?: string;

  /** Icon link */
  linkIcon?: string;

  /** theme card*/
  cardTheme?: 'ama-card-light' | 'ama-card-brand-green-main ' | string;

  /** All card as clickable area */
  stretchedLink?: boolean;
}

export const Card = ({
  className,
  children,
  preTitle,
  mainTitle,
  description,
  contentIcon = '',
  content,
  link = '',
  isExternal,
  title,
  linkLabel,
  linkIcon = '',
  cardTheme = 'ama-card-brand-green-main',
  stretchedLink = false,
  ...props
}: CardProps) => {
  const cssCard = classNames('ama-card', className, cardTheme);
  return (
    <BsCard className={cssCard} {...props}>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} xl={12}>
            {preTitle && <div className='fs-14 lh-24 fw-normal'>{preTitle}</div>}
          </Col>
          {mainTitle && description && (
            <Col xs={12} md={12} xl={12}>
              {mainTitle && <h3 className='fs-20 lh-32 fw-800 font-lato-bold'>{mainTitle}</h3>}
              {description && <p className='fs-14 lh-24 fw-normal'>{description}</p>}
            </Col>
          )}
          <Col
            xs={12}
            md={12}
            xl={12}
            className='ama-card-
          content'
          >
            {contentIcon && content && (
              <div className='d-flex align-items-center'>
                <Icon icon={contentIcon} ariaHidden='true' />
                <span className='fs-28 lh-40 fw-800 font-lato-bold'>{content}</span>
              </div>
            )}
            {children}
          </Col>
          {linkLabel && (
            <Col xs={6} md={6} xl={6}>
              <Link link={link} title={title} isExternal={isExternal} className={'fs-16 lh-28 fw-700 font-lato-bold' + stretchedLink ? '' : 'stretched-link'}>
                {linkLabel}
              </Link>
            </Col>
          )}
          {linkIcon && (
            <Col xs={{ span: 6, offset: 6 }} md={{ span: 6, offset: 6 }} xl={{ span: 6, offset: 6 }} className='text-end'>
              <Link link={link} title={title} isExternal={isExternal} className={stretchedLink ? '' : 'stretched-link'}>
                <Icon icon={linkIcon} ariaHidden='true' />
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </BsCard>
  );
};
