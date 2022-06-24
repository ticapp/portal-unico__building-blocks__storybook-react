import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface RadioGroupProviderProps {
  children: ReactNode;
}

interface RadioGroupValue {
  id: string;
  isChecked?: boolean;
  label: string;
  isDisabled?: boolean;
}

interface RadioGroupData {
  inputRadioCheckedId: string;
  inputRadioValues: Array<RadioGroupValue>;
  setRadioChecked: (radioId: string) => void;
  addRadios: (radiosData: Array<RadioGroupValue>) => void;
}

const RadioGroupContext = createContext<RadioGroupData>({} as RadioGroupData);

export function RadioProvider({ children }: RadioGroupProviderProps): JSX.Element {
  const [inputRadioValues, setInputRadioValues] = useState<Array<RadioGroupValue>>([]);
  const [inputRadioCheckedId, setInputRadioCheckedId] = useState<string>('');

  const addRadios = (radios: Array<RadioGroupValue>): void => {
    const setInitialCheckedValue = radios.map((data) => {
      return {
        ...data,
        isChecked: false
      };
    });

    setInputRadioValues([...setInitialCheckedValue]);
  };

  const setRadioChecked = (radioId: string) => {
    const radioToCheckedIndex = inputRadioValues.findIndex((radio) => radio.id === radioId && !radio.isChecked);
    const oldRadioCheckedIndex = inputRadioValues.findIndex((radio) => radio.id !== radioId && radio.isChecked);

    if (inputRadioValues[radioToCheckedIndex]) {
      inputRadioValues[radioToCheckedIndex].isChecked = true;
      setInputRadioCheckedId(radioId);
    }
    if (inputRadioValues[oldRadioCheckedIndex]) {
      inputRadioValues[oldRadioCheckedIndex].isChecked = false;
    }

    setInputRadioValues([...inputRadioValues]);
  };

  const radioProviderValues = useMemo(
    () => ({ inputRadioValues, inputRadioCheckedId, setRadioChecked, addRadios }),
    [inputRadioValues, inputRadioCheckedId]
  );

  return <RadioGroupContext.Provider value={radioProviderValues}>{children}</RadioGroupContext.Provider>;
}

export function useRadio(): RadioGroupData {
  return useContext(RadioGroupContext);
}
