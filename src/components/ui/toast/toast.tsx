import classNames from 'classnames';
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Id, toast as reactToast, ToastContainer as TC } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useWindowSize } from '../../hooks';
import { ToastContext, ToastContextType } from '../../libs/useToast';
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

console.log(useContext<ToastContextType>(ToastContext));
// const { value } = useContext<ToastContextType>(ToastContext);
const currentToasts: Id[] = [];
const getToastsList = () => currentToasts;
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
  currentToasts.push(
    reactToast(ToastBuilder, {
      autoClose: props?.autoClose ?? false,
      className: cssToast,
      closeButton: CloseButtonBuilder,
      closeOnClick: false,
      position: 'top-right',
      hideProgressBar: true,
      toastId: ComponentId,
      onClose: () => {
        const index = currentToasts.findIndex((t) => t === ComponentId);
        if (index !== -1) {
          currentToasts.splice(index, 1);
        }
      }
    })
  );
};

export const ToastContainer = () => {
  const { width, height } = useWindowSize();
  const toastRef = useRef<HTMLDivElement | null>(null);
  const [isDraggable, setIsDraggable] = useState(false);
  const [toastsList, setToastsList] = useState(getToastsList());

  useEffect(() => {
    const externalVar = (event) => {
      if (event.originalEvent !== currentToasts) {
        const data = getToastsList();
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
      currentToasts.forEach((tId) => {
        const elm = document.getElementById(tId.toString());
        if (elm) {
          elm.style.visibility = elm.getBoundingClientRect().bottom >= height - OFFSET_SCROLL_TOP ? 'hidden' : 'visible';
        }
      });
    });
  }, [toastsList]);

  useEffect(() => {
    const draggable = width <= MIN_DESKTOP_SIZE;
    currentToasts.forEach((t) => {
      reactToast.update(t, {
        draggable
      });
    });
    setIsDraggable(draggable);
  }, [width]);

  return <TC newestOnTop ref={toastRef} draggable={isDraggable} containerId="ama-toast-container" className="ama-toast-container end-0" />;
};
