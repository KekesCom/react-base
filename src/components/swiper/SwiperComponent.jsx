import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import teachersData from '@/api/teachers.json';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import { teachersImages } from '@/assets/images';

import { Button } from '../button';

import styles from './swiper.module.scss';

export const SwiperComponent = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Scrollbar]}
        slidesPerView="auto"
        slidesPerGroup={1}
        scrollbar={{
          el: '.swiper-scrollbar-custom',
          draggable: true,
          dragSize: 260,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        className="mySwiper"
      >
        {teachersData.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div className={styles.teacher}>
              <img
                className={styles.image}
                src={teachersImages[teacher.imageName]}
                alt={teacher.name}
              />
              <h3 className={styles.name}>{teacher.name}</h3>
              <p className={styles.descriprion}>{teacher.desc}</p>
              <Button additionalClassname={styles.btn} variant="text">
                Подробнее
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navContainer}>
        <div className={styles.scrollbarWrapper}>
          <div className="swiper-scrollbar-custom"></div>
        </div>
        <div className={styles.navButtons}>
          <button className="swiper-button-prev-custom">
            <ArrowLeftIcon />
          </button>
          <button className="swiper-button-next-custom">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
