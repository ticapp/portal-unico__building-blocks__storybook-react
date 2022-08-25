import { useState, useEffect } from 'react';
import { useWindowSize } from '../use-window-size/use-window-size';

export const useModalContainerLogic = (modalBodyRef) => {
  const [isContainerBig, setIsContainerBig] = useState(false);
  const { height } = useWindowSize();
  const modalBodyHeight = modalBodyRef.current?.offsetHeight;
  const modalContainerHeight = modalBodyRef.current?.children[0].offsetHeight;
  const modalParentHeight = modalBodyRef.current?.offsetParent.offsetHeight;

  useEffect(() => {
    if (modalContainerHeight <= modalBodyHeight && modalParentHeight <= height) {
      setIsContainerBig(false);
    } else setIsContainerBig(true);
  }, [height]);

  return { isContainerBig };
};
