import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Select, SelectOption, SelectProps } from '../../../../components';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: { controls: { sort: 'requiredFirst' } },
} as ComponentMeta<typeof Select>;

export const SimpleSelect: Story<SelectProps> = (args) => {
  return (
    <>
      <label id="select-label">My Options</label>
      <Select {...args} labelledby="select-label" />
    </>
  );
};
SimpleSelect.storyName = 'Simple Select';
SimpleSelect.args = {
  placeholder: 'Choose an option...',
  options: [
    { value: 1, label: 'John Doe' },
    { value: 2, label: 'Anna Doe' },
    { value: 3, label: 'Mark Doe' },
    { value: 4, label: 'Billy Doe' },
    { value: 5, label: 'Martha Doe' },
    { value: 6, label: 'Daisy Doe' },
    { value: 7, label: 'Jane Doe' },
  ] as SelectOption[],
};
SimpleSelect.argTypes = {
  disabled: {
    description: 'Change the availability of the select element',
    control: 'boolean',
  },
  multiSelection: {
    description: 'Allow or disallow multiple selection of options',
    control: 'boolean',
  },
  searchable: {
    description: 'Allow or disallow typing to search for option',
    control: 'boolean',
  },
  options: {
    description: 'Options to render inside select',
    control: { control: 'object' },
  },
  id: {
    disable: true,
    control: false,
  },
  labelledby: {
    disable: true,
    control: false,
  },
};
