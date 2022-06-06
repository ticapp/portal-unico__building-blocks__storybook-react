import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputRadio } from '../../../../components/ui/input-radio';

export default {
  title: 'Components/Inputs',
  component: InputRadio
} as ComponentMeta<typeof InputRadio>;

export const BasicInputRadio: ComponentStory<typeof InputRadio> = (args) => {
  const [inputCheckedValue, setInputCheckedValue] = useState('');

  const changeSelected = (e: string) => {
    setInputCheckedValue(e);
  };

  return <InputRadio {...args} checked={inputCheckedValue === args.name} onClick={() => changeSelected(args.name)} />;
};

BasicInputRadio.storyName = 'Basic Input Radio';

BasicInputRadio.args = {
  label: 'Label',
  name: 'input-text1',
  value: '',
  inputId: uuidv4(),
  isDisabled: false
};
