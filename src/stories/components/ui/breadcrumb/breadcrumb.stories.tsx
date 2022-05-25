import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ComponentMeta, Story } from '@storybook/react';
import { BreadCrumb, BreadCrumbProps } from '../../../../components/ui';

export default {
    title: 'Components/Breadcrumb',
    component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

export const BasicBreadCrumb: Story<BreadCrumbProps> = () => {
    const args = {
        breadcrumbs: [
            {
                name: 'Início',
                url: '/home'
            },
            {
                name: 'Infrações',
                url: '/violations'
            },
            {
                name: 'Histórico de infrações',
                url: '/violations/history'
            }
        ],
        crumbSelectedUrl: '/violations/history',
    } as BreadCrumbProps;

    return (
        <BrowserRouter>
            <BreadCrumb breadcrumbs={args.breadcrumbs} crumbSelectedUrl={args.crumbSelectedUrl} />
        </BrowserRouter>

    )

};
BasicBreadCrumb.storyName = 'Basic Breadcrumb';
