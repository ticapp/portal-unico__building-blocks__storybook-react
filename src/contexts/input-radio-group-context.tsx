import { React, createContext, ReactNode, useContext, useState, useMemo } from 'react';

interface RadioGroupProviderProps {
  children: ReactNode;
}

interface RadioGroupValue {
  id: string;
  isChecked: boolean;
  label: string;
  isDisabled?: boolean;
  onClick: (e: string) => void;
}

interface RadioGroupData {
  inputRadioChecked: Array<RadioGroupValue>;
  setRadioChecked: (radioId: string) => void;
  addRadios: (radiosData: Array<RadioGroupValue>) => void;
}

const RadioGroupContext = createContext<RadioGroupData>({} as RadioGroupData);

export function RadioProvider({ children }: RadioGroupProviderProps): JSX.Element {
  const [inputRadioChecked, setInputRadioChecked] = useState<Array<RadioGroupValue>>([]);

  const addRadios = (radios: Array<RadioGroupValue>): void => {
    setInputRadioChecked([...radios]);
  };

  const setRadioChecked = (radioId: string) => {
    const radioToCheckState = inputRadioChecked.find((radio) => radio.id === radioId && !radio.isChecked);
    const radiosUncheckState = inputRadioChecked.filter((radio) => radio.id !== radioId);

    if (radioToCheckState && radiosUncheckState.length > 0) {
      radioToCheckState.isChecked = true;
      setInputRadioChecked([...radiosUncheckState, radioToCheckState]);
    }
  };

  const radioProviderValues = useMemo(() => ({ inputRadioChecked, setRadioChecked, addRadios }), []);

  return <RadioGroupContext.Provider value={radioProviderValues}>{children}</RadioGroupContext.Provider>;
}

export function UseRadio(): RadioGroupData {
  const context = useContext(RadioGroupContext);

  return context;
}
