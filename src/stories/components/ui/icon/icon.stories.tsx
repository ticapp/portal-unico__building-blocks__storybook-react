import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Icon, allIcons } from '../../../../components';
import { Row, Col } from 'react-bootstrap';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: allIcons,
      control: 'select',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Size = Template.bind({});
Size.args = {
  icon: 'ama-user',
  size: 'md',
};

export const ExternalImage = () => {
  return (
    <>
      <Icon
        icon="https://www.abola.pt/img/clubes/35px/61926C84-B275-4CED-A560-731A6EBBEE20.png"
        size="sm"
      />
      <Icon
        icon="https://www.abola.pt/img/clubes/35px/591FB72A-DBDB-4DBB-825E-49BBAF368552.png"
        size="sm"
      />
      <Icon
        icon="https://www.abola.pt/img/clubes/35px/4B476B46-CE9F-46AF-BED0-BD6DD7B66F1C.png"
        size="sm"
      />
    </>
  );
};

export const IconList: Story = () => {
  return (
    <Row>
      {allIcons.map((icon) => (
        <Col md={3} key={icon}>
          <Icon icon={icon} />
          <span>{icon}</span>
        </Col>
      ))}
    </Row>
  );
};
IconList.storyName = 'List';
