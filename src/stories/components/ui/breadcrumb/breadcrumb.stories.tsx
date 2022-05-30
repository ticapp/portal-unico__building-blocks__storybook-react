import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ComponentMeta, Story } from '@storybook/react';
import { BreadCrumb, BreadCrumbProps } from '../../../../components';

export default {
    title: 'Components/Breadcrumb',
    component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

export const BasicBreadCrumb: Story<BreadCrumbProps> = () => {
    const args = {
        navAriaLabel: "Breadcrumb",
        ariaHasPopUp: true,
        linkAriaLabel: "page",
        buttonAriaLabel: "Open Breadcrumb",
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
                url: '/iframe.html'
            }
        ],


    } as BreadCrumbProps;

    return (
        <BrowserRouter>
            <BreadCrumb
                breadcrumbs={args.breadcrumbs}
                navAriaLabel={args.navAriaLabel}
                ariaHasPopUp={args.ariaHasPopUp}
                linkAriaLabel={args.linkAriaLabel}
                buttonAriaLabel={args.buttonAriaLabel}
            />
        </BrowserRouter>

    )

};
BasicBreadCrumb.storyName = 'Basic Breadcrumb';
