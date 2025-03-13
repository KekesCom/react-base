import { useRef, useState } from 'react';

import { ArrowDown } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  useOutsideClick(selectRef, handleSelectClose);

  const handleOptionSelect = (optionValue) => {
    onChange(optionValue);
    handleSelectClose();
  };

  const buttonText = value.title;
  const arrowClass = `${styles.arrow} ${isSelectOpen ? styles.activeArrow : ''}`;

  const optionButtons = options.map(({ value: optionValue, label }) => {
    const optionClass = `${styles.option} ${value === optionValue ? styles.activeOption : ''}`;

    return (
      <button
        key={optionValue.name}
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
        <ArrowDown className={arrowClass} />
      </button>
      {!!isSelectOpen && <div className={styles.dropdown}>{optionButtons}</div>}
    </div>
  );
};
