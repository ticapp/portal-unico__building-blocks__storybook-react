import React from 'react';
import { Story } from '@storybook/react';
import { ToastContainer } from 'react-toastify';
import { Button } from '../../../../components';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from '../../../../components/ui/toast';

export default {
  title: 'Components/Toast'
};

export const ErrorToast: Story = () => {
  const onClick = () => {
    toast({ type: 'error', text: 'Hi there!' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

ErrorToast.storyName = 'Error toast';

export const WarningToast: Story = () => {
  const onClick = () => {
    toast({ type: 'warning', text: 'Hi there!' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

WarningToast.storyName = 'Warning toast';

export const InfoToast: Story = () => {
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

InfoToast.storyName = 'Info toast';

export const SuccessToast: Story = () => {
  const onClick = () => {
    toast({ type: 'success', text: 'Hi there!' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

SuccessToast.storyName = 'Success toast';
