/* eslint-disable no-console */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { UserArea, UserAreaOption, UserAreaProps } from '../../../../components';

export default {
  title: 'Components/User Area'
} as ComponentMeta<typeof UserArea>;

export const Authenticated: Story<UserAreaProps> = () => {
  const options = [
    {
      authenticatedOption: false,
      value: 'login',
      icon: 'ama-login',
      label: 'Entrar no portal'
    },
    {
      authenticatedOption: false,
      value: 'register',
      icon: 'ama-add-user',
      label: 'Criar registo'
    },
    {
      authenticatedOption: true,
      value: 'user-area',
      icon: 'ama-user',
      label: 'Area Reservada'
    },
    {
      authenticatedOption: true,
      value: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão'
    }
  ] as UserAreaOption[];

  const onUserAreaOptionChangeHandler = (val: UserAreaOption) => {
    console.log(val);
  };

  return (
    <BrowserRouter>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={4}>
            <UserArea options={options} onOptionChange={onUserAreaOptionChangeHandler} isAuthenticated username="John Doe" />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
Authenticated.storyName = 'Authenticated User';

export const Anonymous: Story<UserAreaProps> = () => {
  const options = [
    {
      authenticatedOption: false,
      value: 'login',
      icon: 'ama-login',
      label: 'Entrar no portal'
    },
    {
      authenticatedOption: false,
      value: 'register',
      icon: 'ama-add-user',
      label: 'Criar registo'
    },
    {
      authenticatedOption: true,
      value: 'user-area',
      icon: 'ama-user',
      label: 'Area Reservada'
    },
    {
      authenticatedOption: true,
      value: 'logout',
      icon: 'ama-logout',
      label: 'Terminar sessão'
    }
  ] as UserAreaOption[];

  const onUserAreaOptionChangeHandler = (val: UserAreaOption) => {
    console.log(val);
  };

  return (
    <BrowserRouter>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={4}>
            <UserArea options={options} onOptionChange={onUserAreaOptionChangeHandler} isAuthenticated={false} username="John Doe" />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
Anonymous.storyName = 'Anonymous User';
