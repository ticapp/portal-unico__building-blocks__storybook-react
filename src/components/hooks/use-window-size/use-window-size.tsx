import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

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
