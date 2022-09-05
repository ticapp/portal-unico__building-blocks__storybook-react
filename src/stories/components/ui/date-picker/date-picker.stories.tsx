/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker, DatePickerProps } from '../../../../components/ui';

export default {
  title: 'Components/Date Picker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const toInputDate = (d: Date) => {
  const rawDay = d.getDate();
  const day = rawDay < 10 ? `0${rawDay}` : rawDay;

  const rawMonth = d.getMonth() + 1;
  const month = rawMonth < 10 ? `0${rawMonth}` : rawMonth;

  const year = d.getFullYear();

  const strDate = `${year}-${month}-${day}`;

  return strDate;
};

export const BasicDatePicker: Story<DatePickerProps> = () => {
  const [date, setDate] = useState(toInputDate(new Date()));

  const onDateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <label id="date-picker-label">Escolha uma data:</label>
      <DatePicker aria-labelledby="date-picker-label" value={date} onChange={onDateChangeHandler} />
    </>
  );
};
BasicDatePicker.storyName = 'Basic Date Picker';
