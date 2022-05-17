import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { SelectOption, UserArea, UserAreaProps } from '../../../../components';

export default {
  title: 'Components/User Area',
} as ComponentMeta<typeof UserArea>;

export const Authenticated: Story<UserAreaProps> = () => {
  const authenticatedOptions = [
    {
      label: 'Area reservada',
      value: 'user-area',
    },
    {
      label: 'Terminar sessão',
      value: 'logout',
    },
  ] as SelectOption[];
  const anonymousOptions = [
    {
      label: 'Login',
      value: 'login',
    },
  ] as SelectOption[];

  const handleSelectOption = (val: SelectOption | SelectOption[]) => {
    console.log(val);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={6}>
          <UserArea
            isAuthenticated={true}
            label={'User Name'}
            anonymousOptions={anonymousOptions}
            authenticatedOptions={authenticatedOptions}
            onMenuAction={handleSelectOption}
          />
        </Col>
      </Row>
    </Container>
  );
};
Authenticated.storyName = 'Authenticated User';

export const Anonymous: Story<UserAreaProps> = () => {
  const authenticatedOptions = [
    {
      label: 'Area reservada',
      value: 'user-area',
    },
    {
      label: 'Terminar sessão',
      value: 'logout',
    },
  ] as SelectOption[];
  const anonymousOptions = [
    {
      label: 'Login',
      value: 'login',
    },
  ] as SelectOption[];

  const handleSelectOption = (val: SelectOption | SelectOption[]) => {
    console.log(val);
  };

  return (
    <UserArea
      isAuthenticated={false}
      anonymousOptions={anonymousOptions}
      authenticatedOptions={authenticatedOptions}
      onMenuAction={handleSelectOption}
    />
  );
};
Anonymous.storyName = 'Anonymous User';
