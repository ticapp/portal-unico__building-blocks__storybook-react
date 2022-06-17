import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputRadioGroup } from '../../../../components/ui/input-radio-group';
import { RadioProvider } from '../../../../contexts/input-radio-group-context';

export default {
  title: 'Components/Inputs Groups',
  component: InputRadioGroup
} as ComponentMeta<typeof InputRadioGroup>;

export const BasicInputRadioGroup: ComponentStory<typeof InputRadioGroup> = () => {
  const data = [
    {
      label: 'Input Radio 1',
      id: 'input-radio-1',
      isDisabled: false
    },
    {
      label: 'Input Radio 2',
      id: 'input-radio-2',
      isDisabled: false
    },
    {
      label: 'Input Radio 3',
      id: 'input-radio-3',
      isDisabled: false
    },
    {
      label: 'Input Radio 4',
      id: 'input-radio-4',
      isDisabled: false
    }
  ];

  return (
    <RadioProvider>
      <InputRadioGroup radiosData={data} ariaLabelledby="input-radio-group-label" />
    </RadioProvider>
  );
};

BasicInputRadioGroup.storyName = 'Basic Input Group';
