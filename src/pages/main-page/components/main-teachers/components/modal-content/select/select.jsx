import { useRef, useState } from 'react';

import { ArrowDowm } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const handleClose = () => {
    setIsSelectOpen(false);
  };

  useOutsideClick(selectRef, handleClose);

  const handleOptionSelect = (optionValue) => {
    onChange(optionValue);
    handleClose();
  };

  const buttonText = options.find((option) => option.value === value)?.label;
  const arrowClass = `${styles.arrow} ${isSelectOpen ? styles.activeArrow : ''}`;

  const optionButtons = options.map(({ value: optionValue, label }) => {
    const optionClass = `${styles.option} ${value === optionValue ? styles.activeOption : ''}`;

    return (
      <button
        key={optionValue}
        className={optionClass}
        onClick={() => handleOptionSelect(optionValue)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className={styles.select} ref={selectRef}>
      <button className={styles.button} onClick={() => setIsSelectOpen((prev) => !prev)}>
        {buttonText}
        <ArrowDowm className={arrowClass} />
      </button>
      {isSelectOpen && <div className={styles.dropdown}>{optionButtons}</div>}
    </div>
  );
};
