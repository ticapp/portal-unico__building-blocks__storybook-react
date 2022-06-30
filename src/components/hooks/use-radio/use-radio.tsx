import { useContext } from 'react';
import { RadioGroupContext } from '../../contexts';

export const useRadio = () => {
  return useContext(RadioGroupContext);
};
