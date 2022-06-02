import React, { HTMLAttributes } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import './footer.scss';
import { UrlObject } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../list';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Add classes to the Footer component */
  className?: string;

  /** Add classes in Footer component info section */
  classFooterSectionInfo?: string;

  /** Add classes for copyright */
  classFooterCopyright?: string;

  /** Add classes column 01 */
  classFooterCol_01?: string;

  /** Add classes column 02 */
  classFooterCol_02?: string;

  /** Add classes column 03 */
  classFooterCol_03?: string;

  /** 1st column header of footer */
  headerTitle_01?: string;

  /** 2nd column header of footer */
  headerTitle_02?: string;

  /** 3rd column header of footer */
  headerTitle_03?: string;

  /** Footer 1st column content array */
  contentInfo_01?: Array<{ [key: string]: string }>;

  /** copyright content */
  copyrightContent?: string;

  /** Data for the 1st column list - see List docs */
  listDataCol_01?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Data for the 2nd column list - see List docs */
  listDataCol_02?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Data for the 3rd column list - see List docs */
  listDataCol_03?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Data for footer image list - see List docs */
  listDataRowImagesLink?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Type of bullets of listDataCol_01 */
  listDataCol_01_Type?:
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-roman'
    | 'upper-roman'
    | 'lower-greek'
    | 'lower-latin'
    | 'upper-latin'
    | 'armenian'
    | 'georgian'
    | 'lower-alpha'
    | 'none';

  /** Type of bullets of listDataCol_02 */
  listDataCol_02_Type?:
    | 'disc'
    | 'circle'
    | 'square'
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-roman'
    | 'upper-roman'
    | 'lower-greek'
    | 'lower-latin'
    | 'upper-latin'
    | 'armenian'
    | 'georgian'
    | 'lower-alpha'
    | 'none';
}

export const Footer = ({
  className,
  classFooterSectionInfo,
  classFooterCopyright,
  classFooterCol_01,
  classFooterCol_02,
  classFooterCol_03,
  headerTitle_01 = 'header_01',
  contentInfo_01 = [{ label: 'label_01', value: 'value_01' }],
  headerTitle_02 = 'header_02',
  headerTitle_03 = 'header_03',
  copyrightContent = `© ${new Date().getFullYear()} AMA - Todos os direitos reservados.`,
  listDataCol_01,
  listDataCol_02,
  listDataCol_03,
  listDataRowImagesLink,
  listDataCol_01_Type,
  listDataCol_02_Type
}: FooterProps) => {
  const cssFooter = classNames('ama-footer', className);
  const cssFooterSectionInfo = classNames('ama-footer-section-info', classFooterSectionInfo);
  const cssFooterCopyright = classNames('ama-footer-copyright', classFooterCopyright);
  const cssFooterCol_01 = classNames('ama-footer-section-info-col-01', classFooterCol_01, 'pb-34');
  const cssFooterCol_02 = classNames('ama-footer-section-info-col-02', classFooterCol_02, 'pb-34', 'pl-30');
  const cssFooterCol_03 = classNames('ama-footer-section-info-col-03', classFooterCol_03, 'pb-34', 'pl-30');
  const cssLogos = classNames('ama-footer-logos');

  const renderContentInfo_01 = () => {
    return contentInfo_01?.map((content) => {
      return (
        <div className="ama-footer-section-info-detail" key={uuidv4()}>
          <p>{content.label}</p>
          <p className="strong">{content.value}</p>
        </div>
      );
    });
  };

  return (
    <footer className={cssFooter}>
      <Container fluid>
        <Row className={cssFooterSectionInfo}>
          <Col xs={12} md={6} xl={6} className={cssFooterCol_01}>
            <Row>
              <h2 className="mb-34">{headerTitle_01}</h2>
              <Col xs={12} md={8} xl={8}>
                {renderContentInfo_01()}
              </Col>
              <Col xs={12} md={4} xl={4}>
                <List listData={listDataCol_01} listStyleType={listDataCol_01_Type} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} xl={3} className={cssFooterCol_02}>
            <Row>
              <h2 className="mb-34">{headerTitle_02}</h2>
              <Col>
                <List listData={listDataCol_02} listStyleType={listDataCol_02_Type} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} xl={3} className={cssFooterCol_03}>
            <Row>
              <h2 className="mb-36">{headerTitle_03}</h2>
              <Col xs={9} md={6} xl={6}>
                <List listData={listDataCol_03} listStyleType="none" className="px-0 d-flex justify-content-between" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className={cssLogos}>
            <List
              listData={listDataRowImagesLink}
              listStyleType="none"
              className="px-0 d-grid d-md-flex flex-md-wrap justify-content-between mb-0"
            />
          </Col>
        </Row>
        <Row>
          <Col className={cssFooterCopyright}>{copyrightContent}</Col>
        </Row>
      </Container>
    </footer>
  );
};
