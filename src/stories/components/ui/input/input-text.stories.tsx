import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState, useId } from 'react';
import { InputText } from '../../../../components/ui/input-text';

export default {
  title: 'Components/Inputs',
  component: InputText
} as ComponentMeta<typeof InputText>;

export const BasicInputText: ComponentStory<typeof InputText> = (args) => {
  const [inputValue, setInputValue] = useState('');

  return <InputText {...args} inputId={useId()} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
};

BasicInputText.storyName = 'Basic Input Text';

BasicInputText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  name: 'input-text1',
  value: '',
  isDisabled: false,
  type: 'password'
};
