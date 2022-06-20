import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Alert, AlertProps, Link } from '../../../../components/ui';

export default {
  title: 'Components/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

export const PrimaryAlert: Story<AlertProps> = () => {
  return (
    <Alert header="Alert without color" barText="BAR TEXT!!!" barLink="isto é um link" link="https://www.ama.pt">
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
  );
};
PrimaryAlert.storyName = 'Alert without color';

export const SuccessAlert: Story<AlertProps> = () => {
  return (
    <Alert header="Hello World Success" dismissible color="success" barText="BAR TEXT!!!">
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
  );
};
SuccessAlert.storyName = 'Success Alert';

export const Warning: Story<AlertProps> = () => {
  return (
    <Alert header="Warning Hello World!" dismissible color="warning" barText="BAR TEXT!!!">
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
    </Alert>
  );
};
Warning.storyName = 'Warning Alert';

export const Info: Story<AlertProps> = () => {
  return (
    <Alert header="Info Hello World!" dismissible color="info" barText="BAR TEXT!!!">
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <p>
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&nbsp;
        <BrowserRouter>
          <Link link="https://www.ama.pt" isExternal>
            isto é um link
          </Link>
        </BrowserRouter>
      </p>
    </Alert>
  );
};
Info.storyName = 'Info Alert';

export const AutomaticDismiss: Story<AlertProps> = () => {
  return <Alert timeout={5000} header="Hello world dismissed" />;
};
AutomaticDismiss.storyName = 'Automatic Dismiss Alert';

export const CustomInfo: Story<AlertProps> = () => {
  return <Alert color="warning" dismissible barText="BAR TEXT!!!" barLink="isto é um link" link="https://www.ama.pt" />;
};
CustomInfo.storyName = 'Custom Info Alert';
