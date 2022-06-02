import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StatusBar } from '../../../../components/ui/status-bar';


export default {
    title: 'Components/StatusBar',
    component: StatusBar,
} as ComponentMeta<typeof StatusBar>;

export const BasicStatusBar: ComponentStory<typeof StatusBar> = (args) => {


    return (
        <StatusBar {...args} />
    );
};

BasicStatusBar.storyName = 'StatusBar Example';

BasicStatusBar.bind({}).args = {
    url: 'https://www.google.com',
}
