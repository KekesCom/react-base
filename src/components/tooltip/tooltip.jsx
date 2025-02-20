import { useState } from 'react';

import styles from './tooltip.module.scss';

export const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className={styles.tooltipIcon}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <span className={styles.tooltip}>{content}</span>}
    </span>
  );
};
