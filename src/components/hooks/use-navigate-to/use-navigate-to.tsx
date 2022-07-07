import { useRouter } from 'next/router';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../use-platform';

export const useNavigateTo = () => {
  const nextJsRouter = useRouter();
  const reactHistory = useNavigate();

  const { isNextJs } = usePlatform();

  const navigateTo = (path: string) => {
    if (isNextJs) {
      return nextJsRouter.push(path);
    }

    return reactHistory(path);
  };

  return { navigateTo };
};
