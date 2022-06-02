import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Col, Row } from 'react-bootstrap';
import { Button, ButtonProps } from '../../../../components/ui';

export default {
  title: 'Components/Buttons',
  component: Button
} as ComponentMeta<typeof Button>;

export const BasicButtons: Story<ButtonProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg'
  } as ButtonProps;

  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'sm'
  } as ButtonProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg'
  } as ButtonProps;

  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'lg'
  } as ButtonProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'sm'
  } as ButtonProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'lg'
  } as ButtonProps;

  return (
    <>
      <h4>Size LG of buttons</h4>
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
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
BasicButtons.storyName = 'Basic Button';

export const ButtonRightIcon: Story<ButtonProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg'
  } as ButtonProps;
  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'sm'
  } as ButtonProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg'
  } as ButtonProps;

  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg'
  } as ButtonProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'sm'
  } as ButtonProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg'
  } as ButtonProps;
  return (
    <>
      <h4>Size LG of buttons</h4>
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
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
ButtonRightIcon.storyName = 'Button Right icon';

export const ButtonLeftIcon: Story<ButtonProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg'
  } as ButtonProps;
  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'sm'
  } as ButtonProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg'
  } as ButtonProps;
  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg'
  } as ButtonProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'lg'
  } as ButtonProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'sm'
  } as ButtonProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'sm'
  } as ButtonProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg'
  } as ButtonProps;
  return (
    <>
      <h4>Size LG of buttons</h4>
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
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <div className="strong">Normal</div>
          <Button {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className="strong">Disabled</div>
          <Button {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className="mb-16">
        <Col xs={4}>
          <Button {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
ButtonLeftIcon.storyName = 'Button Left icon';

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
