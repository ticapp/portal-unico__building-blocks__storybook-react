import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InfractionCounter, InfractionsChart, InfractionsChartProps } from '../../../../components';

export default {
  title: 'Components/Infractions Chart',
  component: InfractionsChart,
  argTypes: {
    stretchedLink: { control: 'boolean' }
  }
} as ComponentMeta<typeof InfractionsChart>;

export const BasicInfractionsChart: Story<InfractionsChartProps> = ({ stretchedLink }) => {
  const counters = [
    {
      label: 'Muito Grave',
      value: 33,
      color: '#AA120A'
    },
    {
      label: 'Grave',
      value: 33,
      color: '#FBCF5F'
    },
    {
      label: 'Leve',
      value: 33,
      color: '#00672F'
    }
  ] as InfractionCounter[];

  return (
    <BrowserRouter>
      <InfractionsChart counters={counters} stretchedLink={stretchedLink} />
    </BrowserRouter>
  );
};
BasicInfractionsChart.storyName = 'Basic Infraction Chart';
