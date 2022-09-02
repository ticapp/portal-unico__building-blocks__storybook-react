import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Button, ToastContainer, ToastProps, ToastType, useToast } from '../../../../components';

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

  // {homes.map(home => <div>{home.name}</div>)}

  return (
    <ToastContainer>
      <Button onClick={onClick}>show toast</Button>
    </ToastContainer>
  );
};

ErrorToast.storyName = 'Error toast';
/*
export const WarningToast: Story = () => {
  const onClick = () => {
    useToast({ type: 'warning', text: 'Hi there!' });
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
    useToast({ type: 'info', text: 'Hi there!' });
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
    useToast({ type: 'success', text: 'Hi there!' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

SuccessToast.storyName = 'Success toast';

export const AutoCloseToast: Story = () => {
  const onClick = () => {
    useToast({ type: 'info', text: 'I will auto close' }, { autoClose: 1000 });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
    </div>
  );
};

AutoCloseToast.storyName = 'Auto close toast';

export const ToastWithScrolltop: Story = () => {
  const onClick = () => {
    useToast({ type: 'info', text: 'Hey there with scroll top' });
  };

  return (
    <div>
      <Button onClick={onClick}>show toast</Button>
      <ToastContainer />
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
    </div>
  );
};

ToastWithScrolltop.storyName = 'Toast with scroll top';
*/
