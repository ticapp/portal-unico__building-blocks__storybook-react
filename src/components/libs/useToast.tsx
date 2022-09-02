import React, { createContext, useMemo } from 'react';
import { ToastContainer, Id } from 'react-toastify';

export class ToastManager {
  private currentToasts: Id[];

  constructor() {
    this.currentToasts = [];
  }

  getAllToast = (): Id[] | undefined => {
    return this.currentToasts;
  };

  getToast = (index: number): Id | undefined => {
    return this.currentToasts[index];
  };

  setToast = (tId: Id): void => {
    this.currentToasts.push(tId);
  };

  show = (index: number): void => {
    const elm = document.getElementById(this.currentToasts[index].toString());
    if (elm) {
      elm.style.visibility = 'visible';
    }
  };

  hide = (index: number): void => {
    const elm = document.getElementById(this.currentToasts[index].toString());
    if (elm) {
      elm.style.visibility = 'hidden';
    }
  };
}

export type ToastContextType = { value: ToastManager } | null;
export const ToastContext = createContext<ToastContextType>(null);
export const ToastProvider = (children, value: ToastManager) => {
  const providerValue = useMemo(() => {
    return { value };
  }, [value]);
  return (
    <ToastContext.Provider value={providerValue}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
