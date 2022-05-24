import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';

export const usePathname = () => {
  const nextJsRouter = useRouter();
  const reactLocation = useLocation();

  const isNextJs = !window;

  if (isNextJs) {
    return nextJsRouter.pathname;
  }
  return reactLocation.pathname;
};
