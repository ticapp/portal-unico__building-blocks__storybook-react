import { useEffect } from 'react';

//  Hook that alerts clicks outside of the passed ref
export const useOutsideElementClick = (ref, callback) => {
  useEffect(() => {
    let isMounted = true;

    function handleClickOutside(event) {
      if (isMounted && ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      isMounted = false;
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
