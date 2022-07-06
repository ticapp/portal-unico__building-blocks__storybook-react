import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../../../../components/ui';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

export const Checkboxes: Story<{
  checked: boolean;
  disabled: boolean;
  label: string;
}> = (args) => {
  const [checkState1, setCheckState1] = useState(false);
  const onInputHandler1 = () => {
    setCheckState1(!checkState1);
  };

  const [checkState2, setCheckState2] = useState(true);
  const onInputHandler2 = () => {
    setCheckState2(!checkState2);
  };

  return (
    <>
      <Checkbox {...args} />
      <Checkbox {...args} label="inicialmente deselecionado" checked={checkState1} onInput={onInputHandler1} />
      <Checkbox {...args} label="inicialmete selecionado" checked={checkState2} onInput={onInputHandler2} />
      <Checkbox {...args} label="disabled deselecionado" checked={false} disabled />
      <Checkbox {...args} label="disabled selecionado" checked disabled />
      <Checkbox {...args} label="texto à esquerda" labelPosition="before" />
      <Checkbox {...args} label="xs" size="xs" />
      <Checkbox {...args} label="xl" size="xl" />
    </>
  );
};

Checkboxes.args = {
  disabled: false,
  label: 'label da checkbox'
} as CheckboxProps;

Checkboxes.storyName = 'Checkboxes';
