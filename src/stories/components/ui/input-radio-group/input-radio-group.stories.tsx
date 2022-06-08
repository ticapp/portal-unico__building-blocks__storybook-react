import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { InputRadioGroup } from '../../../../components/ui/input-radio-group';

export default {
  title: 'Components/Inputs',
  component: InputRadioGroup
} as ComponentMeta<typeof InputRadioGroup>;

export const BasicInputRadioGroup: ComponentStory<typeof InputRadioGroup> = (args) => {
  const [inputChecked, setInputChecked] = useState('');



  return (
    <InputRadioGroup
      {...args}
    >
      {/* <InputRadio /> */}
      {/* <InputRadio /> */}
    </InputRadioGroup>
  );
};

BasicInputRadioGroup.storyName = 'Basic Input Text';

BasicInputRadioGroup.args = {
  radioCheckedId: "id4"
};
