import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { CheckboxGroup } from '../../../../components/ui/checkbox-group';

export default {
  title: 'Components/Inputs Groups',
  component: CheckboxGroup
} as ComponentMeta<typeof CheckboxGroup>;

export const BasicCheckboxGroup: ComponentStory<typeof CheckboxGroup> = () => {
  const checkboxListData = [{ checked: true, label: 'dummy' }, { label: 'label' }];
  const [checkboxListState, setCheckboxListState] = useState(checkboxListData);

  return <CheckboxGroup data={checkboxListState} onCheckboxGroupChanged={setCheckboxListState} />;
};

BasicCheckboxGroup.storyName = 'Checkbox Input Group';
