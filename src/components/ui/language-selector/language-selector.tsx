import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';
import './language-selector.scss';

export interface LanguageSelectorProps {
  /** Language map with all languages to show on drowpdown menu */
  languages?: { [key: string]: string };
  /** Active language. It must exist in the languages map */
  active?: string;
  /** Callback to execute everytime the language changes */
  onLanguageChange?: Function;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  languages = { pt: 'PT' },
  active = 'pt',
  onLanguageChange,
}: LanguageSelectorProps) => {
  const [activeLang, setActiveLang] = useState(active);

  const classes = classNames('ama-language-selector');

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setActiveLang(event.target.value);
    onLanguageChange?.(event.target.value);
  };

  return (
    <div className={classes}>
      <select
        className="form-select"
        aria-label="Selecção de língua"
        onChange={onChangeHandler}
        value={activeLang}
        disabled={Object.keys(languages).length === 1}
      >
        {Object.keys(languages).map((key: string) => (
          <option key={key} value={key}>
            {languages[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export { LanguageSelector };
