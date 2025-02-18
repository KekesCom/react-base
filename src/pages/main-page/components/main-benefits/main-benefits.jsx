import { useState } from 'react';

import { Container } from '@/components/container';
import { TooltipIcon } from '@/components/tooltip';

import styles from './main-benefits.module.scss';

const benefitItems = [
  {
    id: 1,
    subtitle: 'Удостоверение',
    description:
      'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
  },
  {
    id: 2,
    subtitle: 'Знания',
    description:
      'По основам разработки учебно-методических комплексов по робототехнике и программированию',
  },
  {
    id: 3,
    subtitle: 'Практику',
    description:
      'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',
    tooltip: 'При наличии свободных мест',
  },
];

export const MainBenefits = () => {
  const [hoveredTooltipId, setHoveredTooltipId] = useState(null);

  return (
    <section className={styles.benefits}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Что вы получите после курса</h2>
          <div className={styles.items}>
            {benefitItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <span className={styles.subtitle}>
                  {item.subtitle}
                  {item.tooltip && (
                    <span
                      className={styles.icon}
                      onMouseEnter={() => setHoveredTooltipId(item.id)}
                      onMouseLeave={() => setHoveredTooltipId(null)}
                    >
                      <TooltipIcon />
                      {hoveredTooltipId === item.id && (
                        <div className={styles.tooltip}>{item.tooltip}</div>
                      )}
                    </span>
                  )}
                </span>
                <span className={styles.description}>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
