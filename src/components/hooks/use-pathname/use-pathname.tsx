import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';
import { usePlatform } from '../use-platform';

export const usePathname = () => {
  const { isNextJs } = usePlatform();
  const pathnameSrc = isNextJs ? useRouter() : useLocation();
  return pathnameSrc.pathname;
};
