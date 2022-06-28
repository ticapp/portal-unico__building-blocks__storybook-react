/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { InputTag, InputTagProps } from '../../../../components';

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
  options: ['John Doe', 'Anna Doe', 'Mark Doe', 'Billy Doe', 'Martha Doe', 'Daisy Doe', 'Jane Doe']
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
