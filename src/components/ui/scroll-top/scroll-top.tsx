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
  // 237
  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Button variant="outline-brand-green-main" size="sm">
        <Icon className="icon" size="xs" icon="ama-arrow-up" />
        <div className="text">Voltar ao topo</div>
      </Button>
    </div>
  );
}
