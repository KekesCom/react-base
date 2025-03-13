import styles from './tabs.module.scss';

export const Tabs = ({ options, activeTab, onClick }) => {
  const createTabButtonClickHandler = (value) => () => {
    onClick(value);
  };

  return (
    <div className={styles.tabs}>
      {options.map(({ value, label }) => {
        const isActive = activeTab.name === value.name;
        const tabClassName = `${styles.tab} ${isActive ? styles.activeTab : ''}`;
        return (
          <button
            key={value.name}
            className={tabClassName}
            onClick={createTabButtonClickHandler(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
