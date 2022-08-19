/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { InputTag, InputTagOption, InputTagProps } from '../../../../components';

export default {
  title: 'Components/Inputs',
  component: InputTag
} as ComponentMeta<typeof InputTag>;

export const SimpleTagInput: Story<InputTagProps> = (args) => {
  const handleSetTags = (value: InputTagOption[]) => {
    console.log(value);
  };

  return (
    <>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <label id="my-label">My Options</label>
      <InputTag onChange={(e) => handleSetTags(e)} labeledBy="my-label" options={args.options} />
      <input />
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
      <p>DUMMY CONTENT TO TEST PREVENT SCROLLING</p>
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
  placeholder: 'Choose an option...',
  options: [
    { label: 'John Doe', id: uuidv4() },
    { label: 'Anna Doe', id: uuidv4() },
    { label: 'Mark Doe', id: uuidv4() },
    { label: 'Billy Doe', id: uuidv4() },
    { label: 'Martha Doe', id: uuidv4() },
    { label: 'Daisy Doe', id: uuidv4() },
    { label: 'Jane Doe', id: uuidv4() }
  ]
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
