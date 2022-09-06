import classNames from 'classnames';
import React, { ReactNode, useId, useState } from 'react';
import { toast as reactToastify } from 'react-toastify';
import { Icon } from '../../ui';

// eslint-disable-next-line no-shadow
export enum ToastType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}

// eslint-disable-next-line no-shadow
export enum ToastPostion {
  TOP_RIGHT = 'top-right',
  TOP_CENTER = 'top-center',
  TOP_LEFT = 'top-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_CENTER = 'bottom-center',
  BOTTOM_LEFT = 'bottom-left'
}

export interface ToastProps {
  /** Content of the toast */
  content: ReactNode;
  /** Toast family type */
  type: ToastType;
  /** Add class to component */
  className?: string;
  /** Indicates if toast auto closes */
  autoClose?: false | number;
  /** Component id (that way we avoid repeated toasts) */
  id?: string;
  /** The default offset bottom distance */
  bottomOffset?: number;
  /** Toast position */
  position?: ToastPostion;
}

const ICON_NAME = {
  info: 'ama-info',
  error: 'ama-error-filled',
  warning: 'ama-warning-triangle',
  success: 'ama-checkmark-filled'
};

export const useToast = () => {
  const prefix = useId();
  const [count, setCount] = useState(1);

  const send = ({ type, content, id = '', className = '', autoClose = false, position = ToastPostion.TOP_RIGHT }: ToastProps) => {
    const toastId = id || `ama-toast-${prefix}-${count + 1}`;
    setCount((last) => last + 1);

    const cssToast = classNames('ama-toast', 'm-24', `${type}`, className);

    const newToastReactNode = (
      <div>
        <Icon className={`ama-toast-icon m-16 ${type}`} size="lg" icon={ICON_NAME[type]} />
        {content}
      </div>
    );

    const closeButtonBuilder = ({ closeToast }) => <Icon className="align-self-center" icon="ama-close" onClick={closeToast} />;

    reactToastify(newToastReactNode, {
      autoClose,
      className: cssToast,
      closeButton: closeButtonBuilder,
      closeOnClick: false,
      position,
      hideProgressBar: true,
      toastId
    });
  };

  return {
    send
  };
};
