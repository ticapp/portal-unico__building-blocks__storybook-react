import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Icon } from '../icon';

import './scroll-top.scss';

export interface ScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;
}

export function ScrollTop({ className, threshold = 512 }: ScrollTopProps) {
  const scrollTop = () => {
    if (typeof window !== 'undefined') {
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

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);

    //  https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = classNames('ama-scroll-top d-flex justify-content-center align-items-center rounded-circle', className, {
    'd-none': offset < threshold
  });

  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Icon icon="ama-collapse" />
    </div>
  );
}
