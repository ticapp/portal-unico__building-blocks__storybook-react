/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputTag, InputTagOption, InputTagProps } from '../../../../components';

export default {
  title: 'Components/Input Tag',
  component: InputTag
} as ComponentMeta<typeof InputTag>;

export const SimpleTagInput: Story<InputTagProps> = (args) => {
  return (
    <>
      <label id="my-label">My Options</label>
      <InputTag options={args.options} />
    </>
  );
};
SimpleTagInput.storyName = 'Simple Tag Input';
SimpleTagInput.args = {
  placeholder: 'Choose an option...',
  options: [
    { value: 'John Doe', label: 'John Doe' },
    { value: 'Anna Doe', label: 'Anna Doe' },
    { value: 'Mark Doe', label: 'Mark Doe' },
    { value: 'Billy Doe', label: 'Billy Doe' },
    { value: 'Martha Doe', label: 'Martha Doe' },
    { value: 'Daisy Doe', label: 'Daisy Doe' },
    { value: 'Jane Doe', label: 'Jane Doe' }
  ] as InputTagOption[]
};
SimpleTagInput.argTypes = {
  options: {
    description: 'Options to render inside select',
    control: { control: 'object' }
  },
  className: {
    description: 'Additional css class names',
    control: 'text'
  }
};
