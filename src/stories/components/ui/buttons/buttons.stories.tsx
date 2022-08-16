import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Col, Row } from 'react-bootstrap';
import { Button, ButtonProps } from '../../../../components/ui';

export default {
  title: 'Components/Buttons',
  component: Button
} as ComponentMeta<typeof Button>;

export const ButtonLink: Story<ButtonProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'link',
    href: 'https://www.google.pt'
  } as ButtonProps;

  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'link',
    disabled: true
  } as ButtonProps;

  return (
    <Row className="mb-16">
      <Col xs={4}>
        <div className="strong">Normal</div>
        <Button {...args} />
      </Col>
      <Col xs={4}>
        <div className="strong">Disabled</div>
        <Button {...argsDisabled} />
      </Col>
    </Row>
  );
};

ButtonLink.storyName = 'Button Link';

export const Buttons: Story<ButtonProps> = () => {
  const defaultButtton = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg'
  } as ButtonProps;

  const defaultButttonDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const defaultSecondaryButtton = {
    className: 'shadow-none',
    children: 'Secondary',
    variant: 'outline-brand-green-main',
    size: 'lg'
  } as ButtonProps;

  const defaultSecondaryButttonDisabled = {
    className: 'shadow-none',
    children: 'Secondary',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const defaultButttonSmall = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'sm'
  } as ButtonProps;

  const defaultButttonDisabledSmall = {
    className: 'shadow-none',
    children: 'Default Disabled',
    variant: 'brand-green-main',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const defaultSecondaryButttonSmall = {
    className: 'shadow-none',
    children: 'Secondary',
    variant: 'outline-brand-green-main',
    size: 'sm'
  } as ButtonProps;

  const defaultSecondaryButttonDisabledSmall = {
    className: 'shadow-none',
    children: 'Secondary Disabled',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const defaultButtonArrowRight = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg'
  } as ButtonProps;

  const defaultButtonArrowLeft = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg'
  } as ButtonProps;

  const defaultButtonFull = {
    className: 'shadow-none w-100',
    children: 'Full width button',
    variant: 'brand-green-main',
    size: 'lg'
  } as ButtonProps;

  return (
    <>
      <Row>
        <Col xs={6}>
          LG Buttons (56px)
          <Button {...defaultButtton} className="mb-16" />
          <Button {...defaultButttonDisabled} className="mb-16" />
        </Col>
        <Col xs={6}>
          LG Buttons (56px)
          <Button {...defaultSecondaryButtton} className="mb-16" />
          <Button {...defaultSecondaryButttonDisabled} className="mb-16" />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          SM Buttons (48px)
          <Button {...defaultButttonSmall} className="mb-16" />
          <Button {...defaultButttonDisabledSmall} className="mb-16" />
        </Col>
        <Col xs={6}>
          SM Buttons (48px)
          <Button {...defaultSecondaryButttonSmall} className="mb-16" />
          <Button {...defaultSecondaryButttonDisabledSmall} />
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          Right arrow
          <Button {...defaultButtonArrowRight} className="mb-16" />
        </Col>
        <Col xs={4}>
          Left Arrow
          <Button {...defaultButtonArrowLeft} className="mb-16" />
        </Col>

        <Col xs={12}>
          Full width button
          <Button {...defaultButtonFull} />
        </Col>
      </Row>
    </>
  );
};

Buttons.storyName = 'Buttons Example';
