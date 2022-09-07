import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '../icon';

import './scroll-top.scss';

export interface ScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;

  /**  Text in component */
  text: string;

  /** min screen height for desktop */
  desktopMinHeight?: number;

  /** min screen width for desktop */
  desktopMinWidth?: number;
}

export function ScrollTop({ className, threshold = 512, text, desktopMinHeight = 900, desktopMinWidth = 1440 }: ScrollTopProps) {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  useEffect(() => {
    let isMounted = true;

    const onScroll = () => {
      if (isMounted) {
        setOffset(window.scrollY);
      }
    };

    const onResize = () => {
      if (isMounted) {
        const isDesktop = desktopMinHeight <= window.innerHeight || desktopMinWidth <= window.innerWidth;
        console.log('is desktop: ', isDesktop);
        setIsMobile(!isDesktop);
      }
    };

    //  https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const classes = classNames('ama-scroll-top d-flex justify-content-center align-items-center pb-16 pt-16', className, {
    'd-none': offset < threshold
  });
  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Container>
        <Row>
          <Col>
            <Icon className="icon me-8" size="xs" icon="ama-arrow-up" />
            <span className="text">{text}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
