import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import { Modal } from '@/components/Modal';

import { ModalContent } from '../modal-content/modal-content';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ teacher }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div key={teacher.id} className={styles.teacherItem}>
      <img className={styles.img} src={teachersImages[teacher.imageName]} alt={teacher.name} />
      <div className={styles.info}>
        <div className={styles.name}>{teacher.name}</div>
        <p className={styles.post}>{teacher.desc}</p>
        <Button variant="text" additionalClassname={styles.btn} onClick={handleModalOpen}>
          Подробнее
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalContent teacher={teacher} />
      </Modal>
    </div>
  );
};
