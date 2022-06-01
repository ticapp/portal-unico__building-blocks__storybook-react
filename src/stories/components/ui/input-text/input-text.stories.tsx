import { ComponentMeta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { InputText } from '../../../../components/ui/input-text';
import { InputTextProps } from '../../../../components/ui/input-text/input-text';

export default {
    title: 'Components/Input',
    component: InputText,
} as ComponentMeta<typeof InputText>;

export const BasicInputText: Story<InputTextProps> = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <>
        <InputText label='Label' placeholder='Placeholder' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <InputText label='Disabled' isDisabled placeholder='Disabled' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </>
    );
};
BasicInputText.storyName = 'Basic Input Text';

