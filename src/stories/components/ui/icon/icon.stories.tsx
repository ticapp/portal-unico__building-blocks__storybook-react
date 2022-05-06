import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { allIcons, Icon, IconProps } from '../../../../components';

export default {
  title: 'Components/Icon',
} as ComponentMeta<typeof Icon>;

export const Size: Story<IconProps> = ({ icon }: IconProps) => {
  icon = icon || 'ama-user';
  const dimensions = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  return (
    <>
      <div style={{ backgroundColor: '#ebebeb' }}>
        {dimensions.map((size) => (
          <Icon className="p-1" key={size} size={size} icon={icon} />
        ))}
      </div>
    </>
  );
};
Size.storyName = 'Size';
Size.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    control: {
      type: 'select',
      options: allIcons,
    },
  },
};

export const ExternalImage: Story<IconProps> = ({ icon, size }: IconProps) => {
  icon = icon || 'https://picsum.photos/50';
  size = size || 'md';
  return (
    <>
      <Icon icon={icon} size={size} />
    </>
  );
};
ExternalImage.storyName = 'External Image';
ExternalImage.argTypes = {
  icon: {
    description: 'Icon name or external image url',
    control: 'text',
  },
  size: {
    description: 'Icon size to be used',
    control: {
      type: 'inline-radio',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
  },
};

export const IconList: Story<IconProps> = ({ size }: IconProps) => {
  size = size || 'md';
  return (
    <Row>
      {allIcons.map((icon) => (
        <Col md={3} key={icon}>
          <Icon icon={icon} size={size} />
          <span className="ps-3">{icon}</span>
        </Col>
      ))}
    </Row>
  );
};
IconList.storyName = 'List';
IconList.argTypes = {
  size: {
    description: 'Icon size to be used',
    control: {
      type: 'inline-radio',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
  },
};
