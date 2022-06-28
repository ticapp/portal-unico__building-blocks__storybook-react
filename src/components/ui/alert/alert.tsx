import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Alert as InnerAlert, AlertProps as InnerAlertProps, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from '../icon';
import { Link } from '../link';
import './alert.scss';

const DEFAULT_ICON = 'ama-warning-triangle';
export interface AlertProps extends InnerAlertProps {
  /** Inner childs of the component to be rendered */
  children?: ReactNode;
  /** Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert */
  dismissible?: boolean;
  /** Controls the visual state of the Alert */
  show?: boolean;
  /** Callback fired when alert is closed */
  onClose?: () => void;
  /** Sets the text for alert close button */
  closeLabel?: string;
  /** If set will dismiss timout after X milliseconds. Minimum value of 2000 */
  timeout?: number;
  /** Sets header text for the alert */
  header?: string;
  /** Sets the html bar for the alert */
  htmlBar?: ReactNode;
  /** Sets bar text of the link for the alert */
  barLink?: string;
  /** Sets the link to redirect */
  link?: string;
  /** Sets the scheme of color for the alert */
  color?: 'success' | 'info' | 'warning';
  /** Icon to be rendered in alert label */
  icon?: string;
  /** Alt text for icon image */
  alt?: string;
  /** Informs if the bar link is external */
  isExternal?: boolean;
}

export const Alert: FC<AlertProps> = ({
  children,
  show = true,
  timeout,
  header,
  htmlBar,
  barLink,
  link,
  color,
  icon,
  alt,
  isExternal,
  ...props
}: AlertProps) => {
  const [isShow, setShow] = useState(show);
  const [validIcon, setValidIcon] = useState(icon);

  const time = typeof timeout === 'number' ? Math.max(timeout, 2000) : 0;

  const onIconLoadError = () => {
    setValidIcon(DEFAULT_ICON);
  };

  useEffect(() => {
    const cb = () => {
      if (time > 0) {
        setShow(false);
      }
    };

    const timer = setTimeout(cb, timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  const barSize = link && barLink ? 9 : 12;
  return isShow ? (
    <div className="ama-alert">
      <InnerAlert onClose={() => setShow(false)} bsPrefix="ama-alert" {...props}>
        {header && (
          <InnerAlert.Heading as="h2" className="header d-flex align-items-center">
            {validIcon && <Icon icon={validIcon} onIconLoadError={onIconLoadError} className={`icon ${color}`} alt={alt} />}
            {header}
          </InnerAlert.Heading>
        )}
        {children && <div className="body-content">{children}</div>}
        {htmlBar && (
          <Container className={`bar ${color ?? 'none'}`}>
            <Row>
              <Col sm={barSize}>{htmlBar}</Col>
              {link && barLink && (
                <Col sm={3}>
                  <BrowserRouter>
                    <Link className="link" link={link} isExternal={isExternal}>
                      {barLink}
                    </Link>
                  </BrowserRouter>
                </Col>
              )}
            </Row>
          </Container>
        )}
      </InnerAlert>
    </div>
  ) : null;
};
