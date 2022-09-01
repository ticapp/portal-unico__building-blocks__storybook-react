/* eslint-disable no-console */
import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { VerticalMenu, VerticalMenuLink, VerticalMenuProps } from '../../../../components';

export default {
  title: 'Components/Vertical Menu',
  component: VerticalMenu
} as ComponentMeta<typeof VerticalMenu>;

export const BasicVerticalMenu: Story<VerticalMenuProps> = () => {
  const links: VerticalMenuLink[] = [
    {
      label: 'link 1-1',
      link: '/example-lvl1-link1'
    },
    {
      label: 'link 1-2',
      children: [
        {
          label: 'link 2-1',
          link: '/example-lvl2-link1'
        },
        {
          label: 'link 2-2',
          link: '/example-lvl2-link2'
        },
        {
          label: 'link 2-3',
          children: [
            {
              label: 'link 3-1',
              link: '/example-lvl3-link1'
            },
            {
              label: 'link 3-2',
              link: '/example-lvl3-link2'
            }
          ]
        }
      ]
    },
    {
      label: 'link 1-3',
      link: '/example-lvl1-link3'
    },
    {
      label: 'link 1-4',
      link: '/example-lvl1-link4'
    }
  ];

  const onActivatedLink = (item: VerticalMenuLink) => {
    console.log(item);
  };

  return (
    <BrowserRouter>
      <VerticalMenu links={links} onActivate={onActivatedLink} />
    </BrowserRouter>
  );
};
BasicVerticalMenu.storyName = 'Vertical Menu';
