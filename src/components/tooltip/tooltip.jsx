import { useState } from 'react';

import { TooltipIcon as DefaultTooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

export const Tooltip = ({ children, icon: Icon = DefaultTooltipIcon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <span
      className={styles.tooltipWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
      {isVisible && <span className={styles.tooltip}>{children}</span>}
    </span>
  );
};
