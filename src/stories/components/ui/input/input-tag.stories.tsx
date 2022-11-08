/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React, { useId, useState } from 'react';
import { Button, InputTag, InputTagOption, InputTagProps, InputText } from '../../../../components';

export default {
  title: 'Components/Inputs',
  component: InputTag
} as ComponentMeta<typeof InputTag>;

export const SimpleTagInput: Story<InputTagProps> = (args) => {
  const [selectedTags, setSelectedTags] = useState([] as InputTagOption[]);

  const handleSetTags = (value: InputTagOption[]) => {
    setSelectedTags(value);
    console.log('story state', value);
  };

  const onButtonClickHandler = () => {
    setSelectedTags(() => [] as InputTagOption[]);
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
      <label htmlFor="my-tag-label">My Options</label>
      <InputTag
        onChange={(e) => handleSetTags(e)}
        inputId="my-tag-label"
        options={options}
        value={selectedTags}
        placeholder={args.placeholder}
      />
      <label htmlFor="my-text-label">My Options</label>
      <InputText id="my-text-label" />
      <Button onClick={onButtonClickHandler}>Clear</Button>
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
