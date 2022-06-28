import { useEffect, useState } from 'react';

export const usePlatform = () => {
  const [isNextJsApp, setIsNextJsApp] = useState(true);

  useEffect(() => {
    setIsNextJsApp(window && window['next'] && window['next'].version);
  }, []);

  return {
    isNextJs: isNextJsApp,
    isReact: !isNextJsApp
  };
};
