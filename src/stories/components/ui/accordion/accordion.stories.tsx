import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionInfo, AccordionProps } from '../../../../components/ui';

export default {
  title: 'Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

export const BasicAccordion: Story<AccordionProps> = () => {
  const args = {
    className: 'shadow-none',
    accordionInfo: [
      {
        title: 'Como são atribuídos?',
        children: (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus quis fringilla risus natoque fusce malesuada diam sagittis.
            Urna euismod auctor lectus et scelerisque nisl ornare urna, porttitor. A cras dictum semper condimentum volutpat mauris. Aliquam
            ultricies elementum vitae ultricies et sit orci fusce.
          </div>
        )
      },
      {
        title: 'Como são atribuídos?',
        children: (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus quis fringilla risus natoque fusce malesuada diam sagittis.
            Urna euismod auctor lectus et scelerisque nisl ornare urna, porttitor. A cras dictum semper condimentum volutpat mauris. Aliquam
            ultricies elementum vitae ultricies et sit orci fusce.
          </div>
        )
      }
    ] as AccordionInfo[]
  } as AccordionProps;

  return <Accordion {...args} />;
};
BasicAccordion.storyName = 'Basic Accordion';
