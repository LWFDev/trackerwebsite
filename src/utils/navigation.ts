export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const handleLinkClick = (callback?: () => void) => {
  return (e: React.MouseEvent) => {
    scrollToTop();
    callback?.();
  };
};