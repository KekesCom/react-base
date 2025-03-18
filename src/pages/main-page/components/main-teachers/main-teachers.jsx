import { useEffect, useRef } from 'react';
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/mousewheel';

import teachers from '@/api/teachers.json';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';

import { TeacherItem } from './components/teacher-item';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const { isMobile } = useWindowSize();

  const swiperRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      swiperRef.current.update();
    }
  }, [swiperRef, scrollbarRef]);

  const initSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const createSlideChangeHandler = (direction) => () => {
    if (direction === 'prev') {
      swiperRef.current.slidePrev();
    }
    if (direction === 'next') {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={styles.teachers} id="teachers">
      <Container>
        <h2 className={styles.title}>Профессиональные тренеры</h2>

        <div className={styles.items}>
          <Swiper
            modules={[Navigation, Scrollbar, Mousewheel]}
            spaceBetween={isMobile ? 20 : 40}
            slidesPerView={isMobile ? 'auto' : 3}
            navigation={{
              nextEl: styles.next,
              prevEl: styles.prev,
            }}
            scrollbar={{ draggable: true, el: scrollbarRef.current }}
            mousewheel={{ releaseOnEdges: true, forceToAxis: true }}
            onBeforeInit={initSwiper}
          >
            {teachers.map((teacher) => (
              <SwiperSlide key={teacher.id} className={styles.swiperSlide}>
                <TeacherItem teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={scrollbarRef} className={styles.scrollbar} />

          <div className={styles.swiperButtons}>
            <button className={styles.prev} onClick={createSlideChangeHandler('prev')}>
              <ArrowLeftIcon />
            </button>
            <button className={styles.next} onClick={createSlideChangeHandler('next')}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
