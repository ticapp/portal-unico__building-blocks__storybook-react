import React, { ReactNode, useEffect } from 'react';
import { toast as reactToastify, ToastContainer as ReactToastifyContainer } from 'react-toastify';
import { useWindowSize } from '../../hooks';

import './toast.scss';

export interface ToastProviderProps {
  bottomVisibilityThreshold?: number;
  children: ReactNode;
}

export const ToastContainer = ({ bottomVisibilityThreshold = 32, children }: ToastProviderProps) => {
  const { width, height } = useWindowSize();

  const reflowToasts = () => {
    const currentToasts = document.querySelectorAll('.ama-toast');

    currentToasts.forEach((t: Element) => {
      const elem = t as HTMLElement;
      if (elem.getBoundingClientRect().bottom >= window.innerHeight - bottomVisibilityThreshold) {
        elem.style.visibility = 'hidden';
      } else {
        elem.style.visibility = 'visible';
      }
    });
  };

  useEffect(() => {
    reflowToasts();
  }, [width, height, bottomVisibilityThreshold]);

  useEffect(() => {
    reactToastify.onChange(() => {
      reflowToasts();
    });
  }, []);

  return (
    <>
      <ReactToastifyContainer newestOnTop draggable containerId="ama-toast-container" className="ama-toast-container end-0 z-index-toast" />
      {children}
    </>
  );
};
