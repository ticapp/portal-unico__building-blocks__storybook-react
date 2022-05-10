import React from 'react';
import classNames from 'classnames';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './404.scss';
import { Icon, Link } from '../../ui';

export interface Page404Props {
  /** Additional class to component */
  classPage404?: string;

  /** Data to fill content */
  pageInfo: { title: string; description?: string; button: { link: string; isExternal: boolean; target: string; label: string } };
}

export const Page404 = ({ classPage404, pageInfo }: Page404Props) => {
  const cssPage404 = classNames('ama-page404', classPage404);

  return (
    <div className={cssPage404}>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={6} className='px-128 py-128'>
            <h1>{pageInfo.title}</h1>
            {pageInfo.description && <p className='fs-64 lh-72'>{pageInfo.description}</p>}
            <Button variant='brand-yellow-main'>
              <Link link={pageInfo.button.link} isExternal={pageInfo.button.isExternal} target={pageInfo.button.target}>
                <Icon icon='ama-arrow-right-circle' />
                {pageInfo.button.label}
              </Link>
            </Button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <Icon size='xl' icon='ama-warning-circle' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
