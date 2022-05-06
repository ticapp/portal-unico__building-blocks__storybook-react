import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  LanguageSelector,
  LanguageSelectorProps,
} from '../../../../components';

export default {
  title: 'Components/Language Selector',
} as ComponentMeta<typeof LanguageSelector>;

export const Specific: Story<LanguageSelectorProps> = () => {
  return (
    <Row>
      <Col xs={2}>
        <LanguageSelector
          languages={{ pt: 'PT', en: 'EN', es: 'ES' }}
          active={'pt'}
        />
      </Col>
    </Row>
  );
};
Specific.storyName = 'Specific Language List';