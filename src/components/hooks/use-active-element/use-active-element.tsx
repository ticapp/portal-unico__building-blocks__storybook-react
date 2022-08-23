import { useEffect, useState } from 'react';

export const useActiveElement = () => {
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const onFocus = (evt) => {
      if (isMounted) {
        setActiveElement(evt.target.window ? null : evt.target);
      }
    };

    const onBlur = () => {
      if (isMounted) {
        setActiveElement(null);
      }
    };

    window.addEventListener('focus', onFocus, true);
    window.addEventListener('blur', onBlur, true);

    return () => {
      isMounted = false;

      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return {
    activeElement
  };
};
