import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';

import { Datalist, DatalistProps } from '../../../../components/ui/datalist';


export default {
    title: 'Components/Datalist',
    component: Datalist,
} as ComponentMeta<typeof Datalist>;

export const BasicHorizontalMenu: Story<DatalistProps> = () => {

    const args = {
        title: 'Carta de condução',
        data: [
            {
                label: 'Nome',
                value: 'Marta Pereira Rodrigues'
            },
            {
                label: 'Data de nascimento',
                value: '18/07/1991'
            },
            {
                label: 'Morada',
                value: 'Rua da Liberdade, nº 1'
            },
            {
                label: 'País',
                value: 'Portugal'
            },

            {
                label: 'N. da carta de condução',
                value: '123456789'
            },
            {
                label: 'Categorias',
                value: 'A, B, C'
            },
            {
                label: 'Data de início',
                value: '18/07/2019'
            },
            {
                label: 'Data de validade',
                value: '18/07/2021'
            }
        ]
    }

    return (
        <Datalist {...args} />
    );
};
BasicHorizontalMenu.storyName = 'Basic Horizontal Menu';

