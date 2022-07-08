/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { DatePicker, DatePickerProps, DaysLabels, MonthsLabels, ModalAriaLabels } from '../../../../components/ui';

export default {
  title: 'Components/Date Picker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

export const BasicDatePicker: Story<DatePickerProps> = () => {
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
      <label id="date-picker-label">Escolha uma data:</label>
      <DatePicker labeledBy="date-picker-label" />
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
BasicDatePicker.storyName = 'Basic Date Picker';

export const CustomDatePicker: Story<DatePickerProps> = () => {
  const date = new Date('1987-06-25T00:00:00.000Z');

  const days = {
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday'
  } as DaysLabels;

  const months = {
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December'
  } as MonthsLabels;

  const modalAriaLabels = {
    title: 'Pick a date',
    description: 'You can navigate the picker using the keyboard',
    currentDay: 'Day',
    nextMonth: 'Next month',
    nextYear: 'Next Year',
    previousMonth: 'Previous month',
    previousYear: 'Previous year'
  } as ModalAriaLabels;

  return (
    <>
      <label id="date-picker-label">Pick a date:</label>
      <DatePicker
        labeledBy="date-picker-label"
        placeholder="dd-mm-yyyy"
        date={date}
        days={days}
        months={months}
        modalAriaLabels={modalAriaLabels}
      />
    </>
  );
};
CustomDatePicker.storyName = 'Custom Date Picker';
