import styles from './tab-section.module.scss';

export const TabSection = ({ section }) => (
  <div className={styles.section}>
    {section.title && <div className={styles.sectionTitle}>{section.title}</div>}
    {section.text.map((line, id) => (
      <div key={id} className={styles.sectionText}>
        {line}
      </div>
    ))}
  </div>
);
