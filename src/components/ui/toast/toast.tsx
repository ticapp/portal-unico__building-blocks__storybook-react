import classNames from 'classnames';
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { toast as reactToast, ToastContainer as TC } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useWindowSize } from '../../hooks';
import { ToastContext, ToastContextType } from '../../libs/utils/useToast';
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

const MIN_DESKTOP_SIZE = 991;
const OFFSET_SCROLL_TOP = 32;

let context: null | ToastContextType;
const toastEvent = new Event('externalVar');

export const toast = (content: ToastContent, props?: ToastProps) => {
  const cssToast = classNames('ama-toast', 'm-20', `${content.type}`, props?.className);
  const ComponentId = props?.id ?? uuidv4();
  const ToastBuilder = () => {
    return (
      <div>
        <Icon className={`ama-toast-icon m-16 ${content.type}`} size="lg" icon={iconName[content.type]} />
        {content.text}
      </div>
    );
  };
  const CloseButtonBuilder = ({ closeToast }) => <Icon className="align-self-center" icon="ama-close" onClick={closeToast} />;
  const newId = reactToast(ToastBuilder, {
    autoClose: props?.autoClose ?? false,
    className: cssToast,
    closeButton: CloseButtonBuilder,
    closeOnClick: false,
    position: 'top-right',
    hideProgressBar: true,
    toastId: ComponentId,
    onClose: () => {
      const currentToasts = context?.value.getAllToast();
      if (currentToasts) {
        const index = currentToasts.findIndex((t) => t === ComponentId);
        if (index !== -1) {
          context?.value.removeToast(index);
        }
      }
    }
  });
  context?.value.setToast(newId);
};

export const ToastContainer = () => {
  const { width, height } = useWindowSize();
  const toastRef = useRef<HTMLDivElement | null>(null);
  const [isDraggable, setIsDraggable] = useState(false);
  context = useContext<ToastContextType>(ToastContext);
  const [toastsList, setToastsList] = useState(context?.value.getAllToast());

  useEffect(() => {
    const externalVar = (event) => {
      if (event.originalEvent !== context?.value) {
        const data = context?.value.getAllToast();
        if (data) {
          setToastsList(data);
        }
      }
    };
    window.addEventListener('externalVar', externalVar);
    window.dispatchEvent(toastEvent);
    return () => window.removeEventListener('externalVar', externalVar);
  });

  useEffect(() => {
    reactToast.onChange(() => {
      const length = context?.value.getAllToast()?.length;
      if (length) {
        for (let i = 0; i < length; i += 1) {
          const toastId = context?.value.getToast(i)?.toString();
          if (toastId) {
            const elm = document.getElementById(toastId);
            if (elm) {
              if (elm.getBoundingClientRect().bottom >= height - OFFSET_SCROLL_TOP) {
                context?.value.hide(elm);
              } else {
                context?.value.show(elm);
              }
            }
          }
        }
      }
    });
  }, [toastsList]);

  useEffect(() => {
    const draggable = width <= MIN_DESKTOP_SIZE;
    const length = context?.value.getAllToast()?.length;
    if (length) {
      for (let i = 0; i < length; i += 1) {
        const toastId = context?.value.getToast(i);
        if (toastId) {
          reactToast.update(toastId, {
            draggable
          });
        }
      }
      setIsDraggable(draggable);
    }
  }, [width]);

  return <TC newestOnTop ref={toastRef} draggable={isDraggable} containerId="ama-toast-container" className="ama-toast-container end-0" />;
};
