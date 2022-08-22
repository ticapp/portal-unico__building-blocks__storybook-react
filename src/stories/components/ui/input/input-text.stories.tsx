import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputText } from '../../../../components/ui/input-text';

export default {
  title: 'Components/Inputs',
  component: InputText
} as ComponentMeta<typeof InputText>;

export const BasicInputText: ComponentStory<typeof InputText> = (args) => {
  const [inputValue, setInputValue] = useState('');

  return <InputText {...args} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
};

BasicInputText.storyName = 'Basic Input Text';

BasicInputText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  name: 'input-text1',
  value: '',
  inputId: uuidv4(),
  isDisabled: false,
  type: 'password'
};
