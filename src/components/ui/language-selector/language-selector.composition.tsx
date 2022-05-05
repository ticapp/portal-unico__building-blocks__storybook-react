import React from 'react';
import { LanguageSelector } from './language-selector';

export const DisabledLanguageSelector = () => {
  return <LanguageSelector />;
};

export const MultipleLanguageSelector = () => {
  return (
    <LanguageSelector
      languages={{ pt: 'PT', en: 'EN', es: 'ES' }}
      active={'pt'}
    />
  );
};
