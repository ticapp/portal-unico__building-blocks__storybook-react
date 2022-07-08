/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Select, SelectOption, SelectProps } from '../../../../components';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: { controls: { sort: 'requiredFirst' } }
} as ComponentMeta<typeof Select>;

export const SingleSelect: Story<SelectProps> = (args) => {
  return (
    <>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <label id="select-label">My Options</label>
      <Select {...args} labelledby="select-label" />
      <input />
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
      <p>TEST PREVENT SCROLL</p>
    </>
  );
};
SingleSelect.storyName = 'Single selection Select';
SingleSelect.args = {
  placeholder: 'Choose an option...',
  options: [
    { value: 1, label: 'John Doe', disabled: true },
    { value: 2, label: 'Anna Doe', disabled: true },
    { value: 3, label: 'Mark Doe', disabled: true },
    { value: 4, label: 'Billy Doe', disabled: true },
    { value: 5, label: 'Martha Doe' },
    { value: 6, label: 'Daisy Doe' },
    { value: 7, label: 'Jane Doe' }
  ] as SelectOption[]
};
SingleSelect.argTypes = {
  disabled: {
    description: 'Change the availability of the select element',
    control: 'boolean'
  },
  multiSelection: {
    description: 'Allow or disallow multiple selection of options',
    control: 'boolean'
  },
  searchable: {
    description: 'Allow or disallow typing to search for option',
    control: 'boolean'
  },
  options: {
    description: 'Options to render inside select',
    control: { control: 'object' }
  },
  id: {
    disable: true,
    control: false
  },
  labelledby: {
    disable: true,
    control: false
  },
  allwaysOpen: {
    description: 'Keep select dropdown always open',
    control: 'boolean'
  },
  className: {
    description: 'Additional css class names',
    control: 'text'
  }
};

export const MultiSelect: Story<SelectProps> = (args) => {
  return (
    <>
      <label id="select-label">My Options</label>
      <Select {...args} multiSelection labelledby="select-label" />
    </>
  );
};
MultiSelect.storyName = 'Multi selection Select';
MultiSelect.args = {
  placeholder: 'Choose an option...',
  options: [
    { value: 1, label: 'John Doe', disabled: true },
    { value: 2, label: 'Anna Doe', disabled: true },
    { value: 3, label: 'Mark Doe', disabled: true },
    { value: 4, label: 'Billy Doe', disabled: true },
    { value: 5, label: 'Martha Doe' },
    { value: 6, label: 'Daisy Doe' },
    { value: 7, label: 'Jane Doe' }
  ] as SelectOption[]
};
MultiSelect.argTypes = {
  disabled: {
    description: 'Change the availability of the select element',
    control: 'boolean'
  },
  multiSelection: {
    description: 'Allow or disallow multiple selection of options',
    control: 'boolean'
  },
  searchable: {
    description: 'Allow or disallow typing to search for option',
    control: 'boolean'
  },
  options: {
    description: 'Options to render inside select',
    control: { control: 'object' }
  },
  id: {
    disable: true,
    control: false
  },
  labelledby: {
    disable: true,
    control: false
  },
  allwaysOpen: {
    description: 'Keep select dropdown always open',
    control: 'boolean'
  },
  className: {
    description: 'Additional css class names',
    control: 'text'
  }
};
