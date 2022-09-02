import React, { createContext, useMemo } from 'react';
import { Id } from 'react-toastify';

export class ToastManager {
  private currentToasts: Id[];

  constructor() {
    this.currentToasts = [];
  }

  getAllToast = (): Id[] => {
    return this.currentToasts;
  };

  getToast = (index: number): Id | undefined => {
    return this.currentToasts[index];
  };

  setToast = (tId: Id): void => {
    this.currentToasts.push(tId);
  };

  removeToast = (tId: Id): void => {
    this.currentToasts.splice(Number(tId), 1);
  };

  // eslint-disable-next-line class-methods-use-this
  show = (elm: HTMLElement): void => {
    // eslint-disable-next-line no-param-reassign
    elm.style.visibility = 'visible';
  };

  // eslint-disable-next-line class-methods-use-this
  hide = (elm: HTMLElement): void => {
    // eslint-disable-next-line no-param-reassign
    elm.style.visibility = 'hidden';
  };
}

export type ToastContextType = { value: ToastManager } | null;
export const ToastContext = createContext<ToastContextType>(null);
export const ToastProvider = (children, value: ToastManager) => {
  const providerValue = useMemo(() => {
    return { value };
  }, [value]);
  return <ToastContext.Provider value={providerValue}>{children}</ToastContext.Provider>;
};
