import { Container } from '@/components/container';
import { SwiperComponent } from '@/components/swiper';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <SwiperComponent />
        </div>
      </Container>
    </section>
  );
};
