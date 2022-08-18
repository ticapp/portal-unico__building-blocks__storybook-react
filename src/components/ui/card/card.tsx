import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Card as BsCard, CardProps as BsCardProps, Col, Container, Row } from 'react-bootstrap';
import { Icon } from '../icon';
import { Link } from '../link';
import './card.scss';

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

  /** Content Icon name */
  contentIcon?: string;

  /** Content */
  content?: ReactNode | string;

  /** Content class, add extra class that only works on light theme */
  contentClass?: 'card-info' | 'card-success' | 'card-alert';

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

  /** theme card */
  cardTheme?: 'ama-card-light' | string;

  /** All card as clickable area */
  stretchedLink?: boolean;

  /** Type of link */
  isLinkLabel?: boolean;

  /** Card with/without link */
  cardHasLink?: boolean;
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
  cardTheme = 'ama-card-light',
  stretchedLink = false,
  isLinkLabel = true,
  cardHasLink = true,
  contentClass = 'card-info',
  ...props
}: CardProps) => {
  const cssCard = classNames('ama-card', className, cardTheme);
  const cssContent = classNames('ama-card-content', contentClass, 'mt-16 mt-xl-24');
  return (
    <BsCard className={cssCard} {...props} border="light">
      <Container fluid className="d-flex align-items-start justify-content-between flex-column h-100 p-24 p-xl-32">
        <Row>
          {preTitle && (
            <Col xs={12} md={12} xl={12}>
              <div className="text-medium-normal mb-8">{preTitle}</div>
            </Col>
          )}

          {(mainTitle || description) && (
            <Col xs={12} md={12} xl={12}>
              {mainTitle && <h3 className="h4-bold">{mainTitle}</h3>}
              {description && <p className="text-medium-normal m-0">{description}</p>}
            </Col>
          )}
          {(children || (contentIcon && content)) && (
            <Col xs={12} md={12} xl={12} className={cssContent}>
              {contentIcon && content && (
                <div className="d-flex align-items-center">
                  <Icon icon={contentIcon} ariaHidden="true" />
                  <span className="h4-bold ms-8">{content}</span>
                </div>
              )}
              {children}
            </Col>
          )}

          {!isLinkLabel && cardHasLink && (
            <Col xs={{ span: 6, offset: 6 }} md={{ span: 6, offset: 6 }} xl={{ span: 6, offset: 6 }} className="text-end mt-16 mt-xl-24">
              <Link link={link} title={title} isExternal={isExternal} className={stretchedLink ? 'stretched-link' : ''}>
                <Icon icon={linkIcon} ariaHidden="true" />
              </Link>
            </Col>
          )}
        </Row>
        <Row>
          {isLinkLabel && cardHasLink && (
            <Col xs={6} md={6} xl={6} className="mt-16 mt-xl-24 w-100">
              <Link
                link={link}
                title={title}
                isExternal={isExternal}
                className={stretchedLink ? 'text-big-bold stretched-link' : 'text-big-bold'}
              >
                {linkLabel}
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </BsCard>
  );
};
