import React, { ReactNode } from 'react';
import { toast as reactToast } from 'react-toastify';
import { Icon } from '../icon/icon';

import './toast.scss';

export interface ToastContent {
  type: 'info' | 'error' | 'warning' | 'success';
  text: ReactNode;
}

export interface ToastProps {
  className?: string;
  /** Specifies toast position */
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
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
  const toastBuilder = () => (
    <div>
      <Icon className={`ama-toast-icon ${content.type}`} size="lg" icon={iconName[content.type]} />
      {content.text}
    </div>
  );
  reactToast(toastBuilder, {
    ...props,
    autoClose: props?.autoClose ?? false,
    className: `ama-toast-${content.type}`
  });
}
