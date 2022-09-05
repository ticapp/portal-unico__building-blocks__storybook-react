import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Button, ScrollTop, ToastContainer, ToastProps, ToastType, useToast } from '../../../../components';

export default {
  title: 'Components/Toast'
};

export const ErrorToast: Story = () => {
  const [count, setCount] = useState(1);
  const factory = useToast();

  const onClick = () => {
    setCount((prev) => prev + 1);
    factory.send({ type: ToastType.ERROR, content: count } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

ErrorToast.storyName = 'Error toast';

export const WarningToast: Story = () => {
  const factory = useToast();

  const onClick = () => {
    factory.send({ type: ToastType.WARNING, content: 'Hi there!' } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

WarningToast.storyName = 'Warning toast';

export const InfoToast: Story = () => {
  const factory = useToast();

  const onClick = () => {
    factory.send({ type: ToastType.INFO, content: 'Hi there!' } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

InfoToast.storyName = 'Info toast';

export const SuccessToast: Story = () => {
  const factory = useToast();

  const onClick = () => {
    factory.send({ type: ToastType.SUCCESS, content: 'Hi there!' } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

SuccessToast.storyName = 'Success toast';

export const AutoCloseToast: Story = () => {
  const factory = useToast();

  const onClick = () => {
    factory.send({ type: ToastType.INFO, content: 'I will auto close', autoClose: 1000 } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

AutoCloseToast.storyName = 'Auto close toast';

export const ToastWithScrolltop: Story = () => {
  const factory = useToast();

  const onClick = () => {
    factory.send({ type: ToastType.INFO, content: 'Hey there with scroll top' } as ToastProps);
  };

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
      <ScrollTop text="Leva-me para o topo!" />
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
      <br />.
    </ToastContainer>
  );
};

ToastWithScrolltop.storyName = 'Toast with scroll top';
