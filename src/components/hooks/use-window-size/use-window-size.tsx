import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
