import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { toast as reactToast, ToastContainer as TC } from 'react-toastify';
import { Icon } from '../icon/icon';

import './toast.scss';

export interface ToastContent {
  type: 'info' | 'error' | 'warning' | 'success';
  text: ReactNode;
}

export interface ToastProps {
  /** Add class to component */
  className?: string;
  /** Indicates if toast auto closes */
  autoClose?: false | number;
}

const iconName = {
  info: 'ama-info',
  error: 'ama-error-filled',
  warning: 'ama-warning-triangle',
  success: 'ama-checkmark-filled'
};

export function toast(content: ToastContent, props?: ToastProps) {
  const cssToast = classNames('ama-toast', `${content.type}`, props?.className);

  const ToastBuilder = () => (
    <div>
      <Icon className={`ama-toast-icon ${content.type}`} size="lg" icon={iconName[content.type]} />
      {content.text}
    </div>
  );
  const CloseButtonBuilder = ({ closeToast }) => <Icon className="ama-toast-close-button" icon="ama-close" onClick={closeToast} />;
  reactToast(ToastBuilder, {
    autoClose: props?.autoClose ?? false,
    className: cssToast,
    closeButton: CloseButtonBuilder,
    closeOnClick: false,
    position: 'bottom-right',
    draggable: false,
    hideProgressBar: true
  });
}

export function ToastContainer() {
  <TC newestOnTop />;
}
