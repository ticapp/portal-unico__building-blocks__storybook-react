import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputText } from '../../../../components/ui/input-text';

export default {
    title: 'Components/Inputs',
    component: InputText,
} as ComponentMeta<typeof InputText>;

export const BasicInputText: ComponentStory<typeof InputText> = (args) => {

    return (
        <>
            <InputText {...args} />
        </>
    );
};

BasicInputText.storyName = 'Basic Input Text';

BasicInputText.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    value: '',
    isDisabled: false
}