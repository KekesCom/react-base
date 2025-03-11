import { useRef, useState } from 'react';

import { ArrowDowm } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);
  const buttonRef = useRef(null);

  useOutsideClick({
    ref: selectRef,
    handler: () => setIsSelectOpen(false),
    condition: isSelectOpen,
    exceptElementRef: buttonRef,
  });

  const handleOptionSelect = (value) => {
    onChange(value);
    setIsSelectOpen(false);
  };

  const buttonText = options.find((option) => option.value === value)?.label;

  return (
    <div className={styles.select} ref={selectRef}>
      <button
        ref={buttonRef}
        className={styles.button}
        onClick={() => setIsSelectOpen((prev) => !prev)}
      >
        {buttonText}
        <ArrowDowm className={`${styles.arrow} ${isSelectOpen ? styles.activeArrow : ''}`} />
      </button>
      {isSelectOpen && (
        <div className={styles.dropdown}>
          {options.map(({ value: optionValue, label }) => (
            <button
              key={optionValue}
              className={`${styles.option} ${value === optionValue ? styles.activeOption : ''}`}
              onClick={() => handleOptionSelect(optionValue)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
