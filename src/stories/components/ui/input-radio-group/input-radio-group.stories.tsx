import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputRadioGroup } from '../../../../components';

export default {
  title: 'Components/Inputs Groups',
  component: InputRadioGroup
} as ComponentMeta<typeof InputRadioGroup>;

export const BasicInputRadioGroup: ComponentStory<typeof InputRadioGroup> = () => {
  const data = [
    {
      label: 'Input Radio 1',
      id: 'input-radio-1'
    },
    {
      label: 'Input Radio 2',
      id: 'input-radio-2'
    },
    {
      label: 'Input Radio 3',
      id: 'input-radio-3'
    },
    {
      label: 'Input Radio 4',
      id: 'input-radio-4'
    }
  ];

  return <InputRadioGroup radiosData={data} ariaLabelledby="input-radio-group-label" />;
};

BasicInputRadioGroup.storyName = 'Basic Input Group';
