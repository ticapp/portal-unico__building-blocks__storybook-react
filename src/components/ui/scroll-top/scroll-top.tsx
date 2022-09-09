import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ResponsiveWrapper } from '../responsive-wrapper/ResponsiveWrapper';
import { useWindowSize } from '../../hooks';
import { Icon } from '../icon';

import './scroll-top.scss';

export interface DesktopScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;

  /**  Text in component */
  text: string;
}

export interface MobileScrollTopProps {
  /** Additional class names */
  className?: string;

  /** Threshold to start showing the button (pixels) */
  threshold?: number;

  /** component position */
  position?: 'right' | 'left';
}

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

const handleScroll = (mounted: boolean, changeOffset: (y: number) => void) => {
  if (mounted) {
    changeOffset(window.scrollY);
  }
};

function DesktopScrollTop({ className, threshold = 512, text }: DesktopScrollTopProps) {
  const [offset, setOffset] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const onScroll = () => {
      handleScroll(isMounted, setOffset);
    };

    //  https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const classes = classNames('ama-scroll-top-bar z-index-fixed d-flex justify-content-center align-items-center pb-16 pt-16', className, {
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

function MobileScrollTop({ className, threshold = 512, position = 'right' }: MobileScrollTopProps) {
  const bsPosition = { right: 'end-0', left: 'start-0' };

  const [isMounted, setIsMounted] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const onScroll = () => {
      handleScroll(isMounted, setOffset);
    };

    //  https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const classes = classNames(
    `ama-scroll-top-square z-index-fixed d-flex justify-content-center align-items-center h-48 w-48 ${bsPosition[position]}`,
    className,
    {
      'd-none': offset < threshold
    }
  );
  return (
    <div tabIndex={0} role="button" className={classes} onClick={onClickHandler} onKeyDown={onkeydownHandler}>
      <Icon className="icon" size="xs" icon="ama-arrow-up" />
    </div>
  );
}

export const ScrollTop = (props: DesktopScrollTopProps & MobileScrollTopProps) => {
  const { width } = useWindowSize();
  return (
    <>
      <ResponsiveWrapper condition={width >= 768}>
        <DesktopScrollTop {...props} />
      </ResponsiveWrapper>

      <ResponsiveWrapper condition={width < 768}>
        <MobileScrollTop {...props} />
      </ResponsiveWrapper>
    </>
  );
};
