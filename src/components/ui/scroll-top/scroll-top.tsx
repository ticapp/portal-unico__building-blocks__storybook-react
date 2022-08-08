import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Button } from '../buttons';
import { Icon } from '../icon';

import './scroll-top.scss';

export interface ScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;

  /**  Text in component */
  text: string;
}

export function ScrollTop({ className, threshold = 512, text }: ScrollTopProps) {
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
    let isMounted = true;

    const onScroll = () => {
      if (isMounted) {
        setOffset(window.scrollY);
      }
    };

    //  https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const classes = classNames('ama-scroll-top d-flex', className, {
    'd-none': offset < threshold
  });
  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Button variant="outline-brand-green-main" size="sm">
        <Icon className="icon m-0" size="xs" icon="ama-arrow-up" />
        <div className="text">{text}</div>
      </Button>
    </div>
  );
}
