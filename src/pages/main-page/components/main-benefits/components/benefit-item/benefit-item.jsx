import { TooltipIcon } from '@/assets/icons';
import { Tooltip } from '@/components/tooltip/tooltip';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ id, subtitle, description, tooltip }) => {
  return (
    <div id={id} className={styles.benefitItem}>
      <h3 className={styles.subtitle}>
        {subtitle}
        {Boolean(tooltip) && (
          <Tooltip content={tooltip}>
            <TooltipIcon />
          </Tooltip>
        )}
      </h3>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
