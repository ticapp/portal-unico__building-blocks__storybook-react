import React from 'react';
import { Story } from '@storybook/react';
import { ToastContainer } from 'react-toastify';
import { Button } from '../../../../components';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from '../../../../components/ui/toast';

export default {
  title: 'Components/Toast'
};

export const BasicTabs: Story = () => {
  const onClick = () => {
    toast({ type: 'info', text: 'Hi there!' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

BasicTabs.storyName = 'Toast';
