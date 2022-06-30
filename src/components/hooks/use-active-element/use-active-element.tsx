import { useEffect, useState } from 'react';

export const useActiveElement = () => {
  const [activeElement, setActiveElement] = useState(null);

  const onFocus = (evt) => {
    setActiveElement(evt.target.window ? null : evt.target);
  };

  const onBlur = () => {
    setActiveElement(null);
  };

  useEffect(() => {
    window.addEventListener('focus', onFocus, true);
    window.addEventListener('blur', onBlur, true);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return {
    activeElement
  };
};
