import { useRouter } from 'next/router';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../use-platform';

export const useNavigateTo = () => {
  const { isNextJs } = usePlatform();

  const navigatorSrc = isNextJs ? useRouter().push : useNavigate();

  const navigateTo = (path: string) => {
    navigatorSrc(path);
  };
  return { navigateTo };
};
