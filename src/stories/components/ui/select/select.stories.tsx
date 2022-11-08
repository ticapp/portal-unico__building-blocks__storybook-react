/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { FormSelectProps } from 'react-bootstrap';
import { Select } from '../../../../components';

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

export const SingleSelect: Story<FormSelectProps> = () => {
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
      <label htmlFor="test-select-id">My Options</label>
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
