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
    <Alert
      header="Alert without color"
      icon="ama-warning-triangle"
      htmlBar={<div>Bar Text!!!</div>}
      barLink="isto é um link"
      link="https://www.ama.pt"
      isExternal
    >
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
    <Alert header="Hello World Success" icon="ama-warning-triangle" dismissible color="success" htmlBar={<div>Bar Text!!!</div>}>
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
    <Alert header="Warning Hello World!" icon="ama-warning-triangle" dismissible color="warning" htmlBar={<div>Bar Text!!!</div>}>
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
    <Alert header="Info Hello World!" icon="ama-warning-triangle" dismissible color="info" htmlBar={<div>Bar Text!!!</div>}>
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
  return <Alert timeout={5000} icon="not-existing-icon" alt="image not loaded" header="Hello world dismissed" />;
};
AutomaticDismiss.storyName = 'Automatic Dismiss Alert';

export const CustomWarning: Story<AlertProps> = () => {
  return (
    <Alert color="warning" dismissible htmlBar={<div>Bar Text!!!</div>} barLink="isto é um link" link="https://www.ama.pt" isExternal />
  );
};
CustomWarning.storyName = 'Custom Warning Alert';

export const CustomInfo: Story<AlertProps> = () => {
  return (
    <Alert
      color="info"
      dismissible
      htmlBar={
        <div>
          Bar Text!!!
          <a style={{ color: '#000000' }} href="https://www.ama.pt">
            isto é um link
          </a>
        </div>
      }
    />
  );
};
CustomInfo.storyName = 'Custom Info Alert';
