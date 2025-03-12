import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './modal-window.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    unlockScroll();
    onClose();
  });

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
      <div className={styles.modalContent} ref={modalRef}>
        {children}
        <button className={styles.modalClose} onClick={handleCloseModal}>
          {isMobile ? <CloseIcon /> : 'Закрыть'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
