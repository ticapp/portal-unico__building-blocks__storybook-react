import { Story } from '@storybook/react';
import React, { useRef } from 'react';
import { useOutsideElementClick } from '../../../../components';

export default {
  title: 'Hooks/Use Outside Element Click',
};

export const Example: Story = () => {
  const dummyRef = useRef(null);

  useOutsideElementClick(dummyRef, () => customCallback());

  const customCallback = () => {
    if (dummyRef.current) {
      const elem = dummyRef.current as HTMLDivElement;
      elem.innerHTML = 'Congratulations. You clicked outside the div...';
      elem.style.backgroundColor = 'green';
    }
  };

  const clickHandler = () => {
    if (dummyRef.current) {
      const elem = dummyRef.current as HTMLDivElement;
      elem.innerHTML = 'You clicked inside a dummy div... click outside of the div element';
      elem.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div
      ref={dummyRef}
      onClick={clickHandler}
      style={{ backgroundColor: 'salmon' }}
    >
      Click me.
    </div>
  );
};
Example.storyName = 'Example';
