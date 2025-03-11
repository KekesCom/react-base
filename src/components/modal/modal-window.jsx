import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@/assets/icons';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './modal-window.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
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
      <div className={styles.modalBackdrop} />
      <div className={styles.modalContent}>
        {children}
        <button className={styles.modalClose} onClick={handleCloseModal}>
          {isMobile ? <CloseIcon /> : 'Закрыть'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
