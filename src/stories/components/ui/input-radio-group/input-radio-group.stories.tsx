import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { InputRadio, } from '../../../../components/ui/input-radio';
import { v4 as uuidv4 } from 'uuid';
import { InputRadioGroup } from '../../../../components/ui/input-radio-group';

export default {
  title: 'Components/Inputs Groups',
  component: InputRadioGroup
} as ComponentMeta<typeof InputRadioGroup>;

export const BasicInputRadioGroup: ComponentStory<typeof InputRadioGroup> = (args) => {
  const [inputChecked, setInputChecked] = useState('');


  const handleChangeRadioSelected = (inputId: string) => {
    setInputChecked(inputId);
  };


  const data = [{
    label: 'Input Radio 1',
    inputId: uuidv4(),
  }, 
  {
    label: 'Input Radio 2',
    inputId: uuidv4()
  },
  {
    label: 'Input Radio 3',
    inputId: uuidv4(),
    isDisabled: true
  },
  {
    label: 'Input Radio 4',
    inputId: uuidv4()
  }
] 


  return (
    <InputRadioGroup
      radioCheckedId={inputChecked}
      ariaLabelledby='input-radio-group-label'
    >
      {data.map((values, index) => (
        <InputRadio inputId={values.inputId} label={values.label} isDisabled={values.isDisabled} checkedRadio={inputChecked} onClick={handleChangeRadioSelected} tabIndex={index}/>
      )) }

    </InputRadioGroup>
  );
};

BasicInputRadioGroup.storyName = 'Basic Input Group';



