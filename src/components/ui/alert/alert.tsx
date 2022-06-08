import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Alert as InnerAlert, AlertProps as InnerAlertProps } from 'react-bootstrap';
import './alert.scss';

export declare type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string;

export interface AlertProps extends InnerAlertProps {
  /** Inner childs of the component to be rendered */
  children?: ReactNode;
  /** The Alert visual variant */
  variant?: Variant;
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
}

export const Alert: FC<AlertProps> = (props: AlertProps) => {
  const [show, setShow] = useState(true);

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

  if (show) {
    return <InnerAlert onClose={() => setShow(false)} bsPrefix="ama-alert" {...props} />;
  }

  return null;
};
