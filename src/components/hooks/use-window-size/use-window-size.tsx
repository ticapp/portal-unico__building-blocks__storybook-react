import { useState, useEffect } from 'react';
import { usePlatform } from '../use-platform';

export const useWindowSize = (isMobile = false) => {
  const { isReact } = usePlatform();

  let initialWidth;
  let initialHeight;

  if (isReact) {
    initialWidth = window.innerWidth;
    initialHeight = window.innerHeight;
  } else {
    initialWidth = isMobile ? 360 : 1920;
    initialHeight = isMobile ? 740 : 1080;
  }

  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    let isMouted = true;

    const listener = () => {
      if (isMouted) {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }
    };

    window.addEventListener('resize', listener);

    listener();

    return () => {
      isMouted = false;
      window.removeEventListener('resize', listener);
    };
  }, []);

  return {
    width,
    height
  };
};
