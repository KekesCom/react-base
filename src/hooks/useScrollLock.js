import { useRef } from 'react';

export const useScrollLock = () => {
  const originalOverflow = useRef(null);

  const lockScroll = () => {
    if (originalOverflow.current === null) {
      originalOverflow.current = document.body.style.overflow;
    }
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = originalOverflow.current || '';
    originalOverflow.current = null;
  };

  return { lockScroll, unlockScroll };
};
