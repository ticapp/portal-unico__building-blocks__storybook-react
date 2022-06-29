export const usePlatform = () => {
  const isReactApp = typeof window !== 'undefined' && !window['next'];

  return {
    isReact: isReactApp,
    isNextJs: !isReactApp
  };
};
