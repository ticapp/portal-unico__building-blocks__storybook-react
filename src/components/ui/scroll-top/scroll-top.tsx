import classNames from 'classnames';
import React, { KeyboardEvent } from 'react';
import { Icon } from '../icon';
import './scroll-top.scss';

export type ScrollTopProps = {
  /** Additional class names */
  className?: string;
};

export function ScrollTop({ className }: ScrollTopProps) {
  const classes = classNames('ama-scroll-top', className, 'd-flex', 'justify-content-center', 'align-items-center', 'rounded-circle');

  const scrollTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };

  const onClickHandler = () => {
    scrollTop();
  };

  const onkeydownHandler = (evt: KeyboardEvent) => {
    const { key } = evt;

    if (key === 'Enter') {
      scrollTop();
    }
  };

  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Icon icon="ama-collapse" />
    </div>
  );
}
