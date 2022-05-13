import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Buttons, ButtonsProps } from '../../../../components/ui';
import { Col, Row } from 'react-bootstrap';

export default {
  title: 'Components/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

export const BasicButtons: Story<ButtonsProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg',
  } as ButtonsProps;

  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'sm',
  } as ButtonsProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg',
  } as ButtonsProps;

  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    size: 'lg',
  } as ButtonsProps;

  return (
    <>
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...args} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
BasicButtons.storyName = 'Basic Button';

export const ButtonRightIcon: Story<ButtonsProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg',
  } as ButtonsProps;
  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'sm',
  } as ButtonsProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg',
  } as ButtonsProps;

  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'right',
    size: 'lg',
  } as ButtonsProps;
  return (
    <>
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...args} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
ButtonRightIcon.storyName = 'Button Right icon';

export const ButtonLeftIcon: Story<ButtonsProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg',
  } as ButtonsProps;
  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'sm',
  } as ButtonsProps;

  const argsSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg',
  } as ButtonsProps;
  const argsOutline = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'lg',
  } as ButtonsProps;

  const argsOutlineSM = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineSMDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    disabled: true,
    size: 'sm',
  } as ButtonsProps;

  const argsOutlineFull = {
    className: 'shadow-none w-100',
    children: 'Default',
    variant: 'outline-brand-green-main',
    iconName: 'ama-arrow-right',
    iconDirection: 'left',
    size: 'lg',
  } as ButtonsProps;
  return (
    <>
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...args} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsFull} />
        </Col>
      </Row>
      <hr />
      <h4>Size LG of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutline} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineDisabled} />
        </Col>
      </Row>
      <h4>Size SM of buttons</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...argsOutlineSM} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsOutlineSMDisabled} />
        </Col>
      </Row>
      <h4>Full width column</h4>
      <Row className='mb-16'>
        <Col xs={4}>
          <Buttons {...argsOutlineFull} />
        </Col>
      </Row>
    </>
  );
};
ButtonLeftIcon.storyName = 'Button Left icon';

export const ButtonLink: Story<ButtonsProps> = () => {
  const args = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'link',
    href: 'http://www.google.pt',
  } as ButtonsProps;

  const argsDisabled = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'link',
    disabled: true,
  } as ButtonsProps;

  return (
    <>
      <Row className='mb-16'>
        <Col xs={4}>
          <div className='strong'>Normal</div>
          <Buttons {...args} />
        </Col>
        <Col xs={4}>
          <div className='strong'>Disabled</div>
          <Buttons {...argsDisabled} />
        </Col>
      </Row>
    </>
  );
};

ButtonLink.storyName = 'Button Link';
