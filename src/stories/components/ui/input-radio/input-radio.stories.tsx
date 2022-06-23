import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputRadio } from '../../../../components/ui/input-radio';
import { InputRadioGroup } from '../../../../components/ui/input-radio-group';
import { RadioProvider } from '../../../../contexts/input-radio-group-context';

export default {
  title: 'Components/Inputs',
  component: InputRadio
} as ComponentMeta<typeof InputRadio>;

export const BasicInputRadio: ComponentStory<typeof InputRadio> = () => {
  const data = [
    {
      label: 'Input Radio 4',
      id: 'input-radio-4'
    }
  ];

  return (
    <RadioProvider>
      <InputRadioGroup radiosData={data} ariaLabelledby="input-radio-group-label" />
    </RadioProvider>
  );
};

BasicInputRadio.storyName = 'Basic Input Radio';
