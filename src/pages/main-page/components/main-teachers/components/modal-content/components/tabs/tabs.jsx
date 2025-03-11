import styles from './tabs.module.scss';

export const Tabs = ({ options, activeTab, onChange }) => {
  return (
    <div className={styles.tabs}>
      {options.map(({ value, label }) => (
        <button
          key={value}
          className={`${styles.tab} ${activeTab === value ? styles.activeTab : ''}`}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
