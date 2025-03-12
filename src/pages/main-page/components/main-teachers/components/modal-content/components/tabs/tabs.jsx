import styles from './tabs.module.scss';

export const Tabs = ({ options, activeTab, onChange }) => {
  return (
    <div className={styles.tabs}>
      {options.map(({ value, label }) => {
        const tabClassName = `${styles.tab} ${activeTab === value ? styles.activeTab : ''}`;

        return (
          <button key={value} className={tabClassName} onClick={() => onChange(value)}>
            {label}
          </button>
        );
      })}
    </div>
  );
};
