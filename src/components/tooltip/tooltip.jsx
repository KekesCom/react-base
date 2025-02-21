import { useState } from 'react';

import styles from './tooltip.module.scss';

export const Tooltip = ({ children, content }) => {
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
      {children}
      {isVisible && <span className={styles.tooltip}>{content}</span>}
    </span>
  );
};
