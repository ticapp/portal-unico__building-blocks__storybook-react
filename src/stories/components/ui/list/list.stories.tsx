import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { List } from '../../../../components';

export default {
  title: 'Components/List',
  component: List
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <BrowserRouter>
    <List {...args} />
  </BrowserRouter>
);

export const BasicList = Template.bind({});
BasicList.args = {
  listData: [
    {
      value: 'Contactos ePortugal (external Link)',
      hasExternalLink: false,
      link: '',
      title: ''
    },
    {
      value: 'Componente Logo (inside link)',
      hasExternalLink: false,
      link: '',
      title: ''
    }
  ]
};

export const ListBulletsImg = Template.bind({});
ListBulletsImg.args = {
  listData: [
    {
      value: 'Contactos ePortugal (external Link)',
      hasExternalLink: true,
      link: 'https://eportugal.gov.pt/contactos',
      title: 'external link'
    },
    {
      value: 'Componente Logo (inside link)',
      hasExternalLink: false,
      link: '/react/ui/logo',
      title: 'internal link'
    }
  ],
  listStyleImageUrl: 'https://picsum.photos/14/14'
};

export const ListLinkBulletsInside = Template.bind({});
ListLinkBulletsInside.args = {
  listData: [
    {
      value: 'Contactos ePortugal (external Link)',
      hasExternalLink: true,
      link: 'https://eportugal.gov.pt/contactos',
      title: 'external link'
    },
    {
      value: 'Componente Logo (inside link)',
      hasExternalLink: false,
      link: '/react/ui/logo',
      title: 'internal link'
    }
  ],
  listStylePosition: 'inside',
  listStyleType: 'square'
};

export const ListLinkBulletsOutside = Template.bind({});
ListLinkBulletsOutside.args = {
  listData: [
    {
      value: 'Contactos ePortugal (external Link)',
      hasExternalLink: true,
      link: 'https://eportugal.gov.pt/contactos',
      title: 'external link'
    },
    {
      value: 'Componente Logo (inside link)',
      hasExternalLink: false,
      link: '/react/ui/logo',
      title: 'internal link'
    }
  ],
  listStylePosition: 'outside',
  listStyleType: 'square'
};

export const ListLinkBulletsNumbers = Template.bind({});
ListLinkBulletsNumbers.args = {
  listData: [
    {
      value: 'Contactos ePortugal (external Link)',
      hasExternalLink: true,
      link: 'https://eportugal.gov.pt/contactos',
      title: 'external link'
    },
    {
      value: 'Componente Logo (inside link)',
      hasExternalLink: false,
      link: '/react/ui/logo',
      title: 'internal link'
    }
  ],
  listStyleType: 'decimal'
};
