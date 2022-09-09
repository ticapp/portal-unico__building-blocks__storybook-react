import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ResponsiveWrapper } from '../responsive-wrapper/ResponsiveWrapper';
import { useWindowSize } from '../../hooks';
import { Icon } from '../icon';

import './scroll-top.scss';

export interface ScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;

  /**  Text in component */
  text: string;

  /** component position */
  position?: 'right' | 'left';
}

export const ScrollTop = ({ className, threshold = 512, text = '', position = 'right' }: ScrollTopProps) => {
  const { width } = useWindowSize();
  const [offset, setOffset] = useState(0);
  const bsPosition = { right: 'end-0', left: 'start-0' };

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  const onkeydownHandler = (evt: KeyboardEvent) => {
    const { key } = evt;

    if (key === 'Enter') {
      scrollTop();
    }
  };

  const onClickHandler = () => {
    scrollTop();
  };

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

  const classes = classNames(
    position && bsPosition[position],
    'z-index-fixed d-flex justify-content-center align-items-center h-48 w-48',
    className,
    {
      'd-none': offset < threshold
    }
  );

  return (
    <>
      <ResponsiveWrapper condition={width >= 768}>
        <div tabIndex={0} role="button" className={`ama-scroll-top-bar ${classes}`} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
          <Container>
            <Row>
              <Col>
                <Icon className="icon me-8" size="xs" icon="ama-arrow-up" />
                <span className="text">{text}</span>
              </Col>
            </Row>
          </Container>
        </div>
      </ResponsiveWrapper>

      <ResponsiveWrapper condition={width < 768}>
        <div
          tabIndex={0}
          role="button"
          className={`ama-scroll-top-square ${classes}`}
          onClick={onClickHandler}
          onKeyDown={onkeydownHandler}
        >
          <Icon className="icon" size="xs" icon="ama-arrow-up" />
        </div>
      </ResponsiveWrapper>
    </>
  );
};
