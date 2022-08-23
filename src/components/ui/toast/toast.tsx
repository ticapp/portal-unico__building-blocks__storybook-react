import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Id, toast as reactToast, ToastContainer as TC } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
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
  /** Component id (that way we avoid repeated toasts) */
  id?: string;
}

const iconName = {
  info: 'ama-info',
  error: 'ama-error-filled',
  warning: 'ama-warning-triangle',
  success: 'ama-checkmark-filled'
};

export const toast = (content: ToastContent, props?: ToastProps) => {
  const cssToast = classNames('ama-toast', `${content.type}`, props?.className);
  let toastId: Id;
  const ComponentId = uuidv4();

  const updateToastDraggable = () => {
    reactToast.update(toastId, { draggable: window.innerWidth <= 991 });
  };
  window.addEventListener('resize', updateToastDraggable);

  reactToast.onChange(payload => {
    if (payload.status === "added") {
      const elm = document.getElementById(ComponentId);
      if (elm) {
        const triggerBottom = window.innerHeight;
        const boxBottom = elm.getBoundingClientRect().bottom;
        elm.style.display = boxBottom >= triggerBottom ? "none" : "flex-inline";
      }
      
    }
  });

  const ToastBuilder = () => {
    return (
      <div>
        <Icon className={`ama-toast-icon ${content.type}`} size="lg" icon={iconName[content.type]} />
        {content.text}
      </div>
    );
  };
  const CloseButtonBuilder = ({ closeToast }) => <Icon className="ama-toast-close-button" icon="ama-close" onClick={closeToast} />;
  toastId = reactToast(ToastBuilder, {
    autoClose: props?.autoClose ?? false,
    className: cssToast,
    closeButton: CloseButtonBuilder,
    closeOnClick: false,
    position: 'top-right',
    draggable: window.innerWidth <= 991,
    hideProgressBar: true,
    toastId: ComponentId
  });
};

export const ToastContainer = () => {
  return <TC newestOnTop containerId="ama-toast-container" className="ama-toast-container" />;
};
