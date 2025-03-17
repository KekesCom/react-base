import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CloseIconBlack } from '@/assets/icons';
import { useScrollLock, useWindowSize } from '@/hooks/index';

import styles from './modal.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  if (!isOpen) {
    return null;
  }

  const handleCloseModal = () => {
    unlockScroll();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={handleCloseModal} />
      <div className={styles.content}>
        {children}
        <button className={styles.close} onClick={handleCloseModal}>
          {isMobile ? <CloseIconBlack /> : 'Закрыть'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
