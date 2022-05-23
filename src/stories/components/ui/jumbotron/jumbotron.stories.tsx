import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Jumbotron, JumbotronProps } from '../../../../components/ui';

export default {
  title: 'Components/Jumbotron',
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

export const JumbotronBasic: Story<JumbotronProps> = (args) => {
  return <Jumbotron {...args}></Jumbotron>;
};

JumbotronBasic.args = {
  jumboTitle: ['Bem-vindo(a),', 'ao Balcão do Condutor'],
  description: 'Consulte aqui todas as informações relevantes para si enquanto condutor',
} as JumbotronProps;

JumbotronBasic.storyName = 'Jumbotron';
