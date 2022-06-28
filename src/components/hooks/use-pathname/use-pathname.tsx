import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';
import { usePlatform } from '../use-platform';

export const usePathname = () => {
  const nextJsRouter = useRouter();
  const reactLocation = useLocation();

  const { isNextJs } = usePlatform();

  if (isNextJs) {
    return nextJsRouter.pathname;
  }
  return reactLocation.pathname;
};
