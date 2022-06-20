import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Alert as InnerAlert, AlertProps as InnerAlertProps, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from '../icon';
import { Link } from '../link';
import './alert.scss';

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
  /** Sets bar text for the alert */
  barText?: string;
  /** Sets bar text of the link for the alert */
  barLink?: string;
  /** Sets the link to redirect */
  link?: string;
  /** Sets the scheme of color for the alert */
  color?: 'success' | 'info' | 'warning';
}

export const Alert: FC<AlertProps> = (props: AlertProps) => {
  const [show, setShow] = useState(props.show ?? true);

  const timeout = typeof props.timeout === 'number' ? Math.max(props.timeout, 2000) : 0;

  useEffect(() => {
    const cb = () => {
      if (timeout > 0) {
        setShow(false);
      }
    };

    const timer = setTimeout(cb, timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return show ? (
    <div className="ama-alert">
      <InnerAlert onClose={() => setShow(false)} bsPrefix="ama-alert" {...props}>
        <InnerAlert.Heading className="d-flex align-items-center">
          <Icon icon="ama-warning-triangle" className={`icon ${props.color ?? 'none'}`} alt="Ama Warning" />
          {props.header}
        </InnerAlert.Heading>
        {props.children && <div className="body-content">{props.children}</div>}
        {props.barText && (
          <Container className={`bar ${props.color ?? 'none'}`}>
            <Row>
              <Col sm={9}>{props.barText}</Col>
              {props.link && props.barLink && (
                <Col sm={3}>
                  <BrowserRouter>
                    <Link className="link" link={props.link} isExternal>
                      {props.barLink}
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
