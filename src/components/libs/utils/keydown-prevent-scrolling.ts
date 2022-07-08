import { KeyboardEvent } from 'react';

export const preventScrolling = (evt: KeyboardEvent) => {
  const { key } = evt;

  const scrollingArrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'];

  if (scrollingArrows.indexOf(key) >= 0) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};
