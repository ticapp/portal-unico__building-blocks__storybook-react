import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Tabs, TabsProps, TabProps } from '../../../../components/ui';

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

export const BasicTabs: Story<TabsProps & TabProps> = () => {
  const args = {
    'defaultActiveKey': 'tab-first',
    'id': 'basic-tabs',
    'tabsName': [
      {
        label: 'Carta de condução',
        children: (
          <div className="mt-48">
            <h3>Conduza com cuidado!</h3>
          </div>
        ),
        keyTab: 'tab-first'
      },
      {
        label: 'Perguntas frequentes',
        children: (
          <div className="mt-48">
            <h3>Encontre as suas respostas</h3>
          </div>
        ),
        keyTab: 'tab-second'
      },
      {
        label: 'Disabled tab',
        children: (
          <div className="mt-48">
            <h3>Disabled</h3>
          </div>
        ),
        keyTab: 'tab-third',
        disabled: true
      }
    ],
    'aria-label': 'Separadores do serviço carta de condução'
  } as TabsProps & TabProps;
  return <Tabs {...args} />;
};

BasicTabs.storyName = 'Tabs';
