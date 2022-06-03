import { Story } from '@storybook/react';
import React from 'react';
import { useWindowSize } from '../../../../components';

export default {
  title: 'Hooks/Use Window Size'
};

export const Example: Story = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <p>{width}</p>
      <p>{height}</p>
    </>
  );
};
Example.storyName = 'Example';
