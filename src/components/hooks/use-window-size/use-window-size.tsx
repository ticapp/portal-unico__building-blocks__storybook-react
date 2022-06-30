import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  if (typeof window === 'undefined') {
    return {
      width: 1920,
      height: 1080
    };
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return {
    width,
    height
  };
};
