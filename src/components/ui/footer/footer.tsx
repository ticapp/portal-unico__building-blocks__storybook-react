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
  classFooterCol01?: string;

  /** Add classes column 02 */
  classFooterCol02?: string;

  /** Add classes column 03 */
  classFooterCol03?: string;

  /** 1st column header of footer */
  headerTitle01?: string;

  /** 2nd column header of footer */
  headerTitle02?: string;

  /** 3rd column header of footer */
  headerTitle03?: string;

  /** Footer 1st column content array */
  contentInfo01?: Array<{ [key: string]: string }>;

  /** copyright content */
  copyrightContent?: string;

  /** Data for the 1st column list - see List docs */
  listDataCol01?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Data for the 2nd column list - see List docs */
  listDataCol02?: Array<{
    value: React.ReactNode;
    hasExternalLink?: boolean;
    link: string | UrlObject;
    title?: string;
    ariaLabel?: string;
  }>;

  /** Data for the 3rd column list - see List docs */
  listDataCol03?: Array<{
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
  listDataCol01Type?:
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
  listDataCol02Type?:
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

  /** Footer background colors extra max-width */
  styleBackgroundFooterColor?: React.CSSProperties;
}

export const Footer = ({
  className,
  classFooterSectionInfo,
  classFooterCopyright,
  classFooterCol01,
  classFooterCol02,
  classFooterCol03,
  headerTitle01 = 'header_01',
  contentInfo01 = [{ label: 'label_01', value: 'value_01' }],
  headerTitle02 = 'header_02',
  headerTitle03 = 'header_03',
  copyrightContent = `© ${new Date().getFullYear()} AMA - Todos os direitos reservados.`,
  listDataCol01,
  listDataCol02,
  listDataCol03,
  listDataRowImagesLink,
  listDataCol01Type,
  listDataCol02Type,
  styleBackgroundFooterColor
}: FooterProps) => {
  const cssFooter = classNames('ama-footer', className);
  const cssFooterSectionInfo = classNames('ama-footer-section-info', classFooterSectionInfo);
  const cssFooterCopyright = classNames('ama-footer-copyright', classFooterCopyright, 'p-16');
  const cssFooterCol01 = classNames('ama-footer-section-info-col-01', classFooterCol01);
  const cssFooterCol02 = classNames('ama-footer-section-info-col-02', classFooterCol02);
  const cssFooterCol03 = classNames('ama-footer-section-info-col-03', classFooterCol03);
  const cssLogos = classNames('ama-footer-logos');

  const renderContentInfo01 = () => {
    return contentInfo01?.map((content) => {
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
      <Container fluid className="p-0">
        <Row className={cssFooterSectionInfo}>
          <div style={styleBackgroundFooterColor}>
            <Container className="p-0">
              <Row>
                <Col xs={12} lg={6} xl={6} className={cssFooterCol01}>
                  <Row>
                    <h2>{headerTitle01}</h2>
                    <Col xs={12} lg={8} xl={8}>
                      {renderContentInfo01()}
                    </Col>
                    <Col xs={12} lg={4} xl={4}>
                      <List listData={listDataCol01} listStyleType={listDataCol01Type} className="mt-16 mb-24" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={3} xl={3} className={cssFooterCol02}>
                  <Row>
                    <h2>{headerTitle02}</h2>
                    <Col>
                      <List listData={listDataCol02} listStyleType={listDataCol02Type} className="mb-24" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={3} xl={3} className={cssFooterCol03}>
                  <Row>
                    <h2>{headerTitle03}</h2>
                    <Col xs={9} lg={6} xl={6}>
                      <List listData={listDataCol03} listStyleType="none" className="mb-24 px-0 d-flex align-items-start" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        <Container className="p-0">
          <Row>
            <Col className={cssLogos}>
              <List
                listData={listDataRowImagesLink}
                listStyleType="none"
                className="mt-16 mb-24 px-0 d-grid d-md-flex flex-md-wrap justify-content-between mb-0"
              />
            </Col>
          </Row>

          <Row>
            <Col className={cssFooterCopyright}>{copyrightContent}</Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};
