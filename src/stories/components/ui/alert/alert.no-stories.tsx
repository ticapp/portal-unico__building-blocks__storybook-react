import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from '../../../../components';

export default {
  title: 'Components/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

export const PrimaryAlert: Story<AlertProps> = () => {
  return <Alert>Hello World</Alert>;
};
PrimaryAlert.storyName = 'Primary Alert';

export const SuccessAlert: Story<AlertProps> = () => {
  return <Alert variant="success">Hello World</Alert>;
};
SuccessAlert.storyName = 'Success Alert';

export const Warning: Story<AlertProps> = () => {
  return <Alert variant="warning">hello world!</Alert>;
};
Warning.storyName = 'Warning Alert';

export const Danger: Story<AlertProps> = () => {
  return <Alert variant="danger">hello world!</Alert>;
};
Danger.storyName = 'Danger Alert';

export const Info: Story<AlertProps> = () => {
  return <Alert variant="info">hello world!</Alert>;
};
Info.storyName = 'Info Alert';

export const AutomaticDismiss: Story<AlertProps> = () => {
  return (
    <Alert variant="info" timeout={5000}>
      hello world!
    </Alert>
  );
};
AutomaticDismiss.storyName = 'AutomaticDismiss Alert';

export const CustomInfo: Story<AlertProps> = () => {
  return (
    <Alert variant="info" dismissible>
      <h4>Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>
  );
};
CustomInfo.storyName = 'CustomInfo Alert';
