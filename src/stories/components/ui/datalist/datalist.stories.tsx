import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';

import { Datalist, DatalistProps } from '../../../../components/ui/datalist';

export default {
  title: 'Components/Datalist',
  component: Datalist
} as ComponentMeta<typeof Datalist>;

export const BasicHorizontalMenu: Story<DatalistProps> = () => {
  const args = {
    title: 'Carta de condução',
    data: [
      {
        label: 'Nome',
        value: 'Marta Pereira Rodrigues',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'Data de nascimento',
        value: '18/07/1991',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'Morada',
        value: 'Rua da Liberdade, nº 1',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'País',
        value: 'Portugal',
        classNames: 'col-12 col-sm-6'
      },

      {
        label: 'N. da carta de condução',
        value: '123456789',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'Categorias',
        value: 'A, B, C',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'Data de início',
        value: '18/07/2019',
        classNames: 'col-12 col-sm-6'
      },
      {
        label: 'Data de validade',
        value: '18/07/2021',
        classNames: 'col-12 col-sm-6'
      }
    ]
  };

  return <Datalist {...args} />;
};
BasicHorizontalMenu.storyName = 'Basic Horizontal Menu';
