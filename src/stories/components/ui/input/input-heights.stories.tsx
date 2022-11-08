/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useId } from 'react';
import { Button, ButtonProps, InputTag, Select } from '../../../../components';
import { InputText } from '../../../../components/ui/input-text';

export default {
  title: 'Components/Inputs'
} as ComponentMeta<any>;

export const InputHeights: ComponentStory<typeof InputText> = () => {
  const tagPlaceholder = 'Choose an option...';
  const tagOptions = [
    { label: 'John Doe', id: useId() },
    { label: 'Anna Doe', id: useId() },
    { label: 'Mark Doe', id: useId() },
    { label: 'Billy Doe', id: useId() },
    { label: 'Martha Doe', id: useId() },
    { label: 'Daisy Doe', id: useId() },
    { label: 'Jane Doe', id: useId() }
  ];

  const defaultButtton = {
    className: 'shadow-none',
    children: 'Default',
    variant: 'brand-green-main',
    size: 'lg'
  } as ButtonProps;

  return (
    <div className="d-flex align-items-center">
      <label htmlFor="test-select-id">Label</label>
      <Select id="test-select-id" defaultValue="">
        <option value="" hidden disabled>
          Select a value...
        </option>
        <option value="1">Option #1</option>
        <option value="2">Option #2</option>
        <option value="3">Option #3</option>
        <option value="4">Option #4</option>
        <option value="5">Option #5</option>
      </Select>
      <label htmlFor="test-tag-id">Label</label>
      <InputTag inputId="test-tag-id" options={tagOptions} placeholder={tagPlaceholder} />
      <label htmlFor="test-text-id">Label</label>
      <InputText id="test-text-id" />
      <Button {...defaultButtton} />
    </div>
  );
};

InputHeights.storyName = 'Input Heights';
