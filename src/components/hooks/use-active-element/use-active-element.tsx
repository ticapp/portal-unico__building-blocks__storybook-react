import { useEffect, useState } from 'react';

export const useActiveElement = () => {
  const [activeElement, setActiveElement] = useState(document.activeElement);

  const onFocus = (evt) => {
    setActiveElement(evt.target.window ? null : evt.target);
  };

  const onBlur = () => {
    setActiveElement(null);
  };

  window.removeEventListener('focus', onFocus);
  window.removeEventListener('blur', onBlur);

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
