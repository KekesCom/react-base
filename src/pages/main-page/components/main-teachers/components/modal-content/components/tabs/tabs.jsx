import styles from './tabs.module.scss';

export const Tabs = ({ options, activeTab, onClick }) => {
  const createTabButtonClickHandler = (value) => () => {
    onClick(value);
  };

  const TabClassName = (value) => {
    const isActive = activeTab.name === value.name;
    return `${styles.tab} ${isActive ? styles.activeTab : ''}`;
  };

  return (
    <div className={styles.tabs}>
      {options.map(({ value, label }) => (
        <button
          key={value.name}
          className={TabClassName(value)}
          onClick={createTabButtonClickHandler(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
