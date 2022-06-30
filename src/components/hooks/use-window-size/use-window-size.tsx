import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

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
