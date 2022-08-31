/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React, { useId } from 'react';
import { InputTag, InputTagOption, InputTagProps, InputText } from '../../../../components';

export default {
  title: 'Components/Inputs',
  component: InputTag
} as ComponentMeta<typeof InputTag>;

export const SimpleTagInput: Story<InputTagProps> = (args) => {
  const handleSetTags = (value: InputTagOption[]) => {
    console.log(value);
  };

  const options = [
    { label: 'John Doe', id: useId() },
    { label: 'Anna Doe', id: useId() },
    { label: 'Mark Doe', id: useId() },
    { label: 'Billy Doe', id: useId() },
    { label: 'Martha Doe', id: useId() },
    { label: 'Daisy Doe', id: useId() },
    { label: 'Jane Doe', id: useId() }
  ];

  return (
    <>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <label id="my-label">My Options</label>
      <InputTag onChange={(e) => handleSetTags(e)} labeledBy="my-label" options={options} placeholder={args.placeholder} />
      <InputText />
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
    </>
  );
};
SimpleTagInput.storyName = 'Simple Tag Input';
SimpleTagInput.args = {
  placeholder: 'Choose an option...'
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