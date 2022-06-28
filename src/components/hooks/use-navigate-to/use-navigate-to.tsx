import { useRouter } from 'next/router';
import { useHistory } from 'react-router-dom';
import { usePlatform } from '../use-platform';

export const useNavigateTo = () => {
  const nextJsRouter = useRouter();
  const reactHistory = useHistory();

  const { isNextJs } = usePlatform();

  const navigateTo = (path: string) => {
    if (isNextJs) {
      return nextJsRouter.push(path);
    }

    return reactHistory.push(path);
  };

  return { navigateTo };
};
