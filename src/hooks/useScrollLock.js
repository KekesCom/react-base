import { useCallback, useRef } from 'react';

export const useScrollLock = () => {
  const originalOverflow = useRef(null);

  const lockScroll = useCallback(() => {
    if (originalOverflow.current === null) {
      originalOverflow.current = document.body.style.overflow;
    }
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = originalOverflow.current || '';
    originalOverflow.current = null;
  }, []);

  return { lockScroll, unlockScroll };
};
