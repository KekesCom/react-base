import styles from './social.module.scss';

export const Social = ({ links }) => {
  if (!links || links.length == 0) return null;

  return (
    <div className={styles.socialContainer}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src={link.imagePath} className={styles.socialIcon} />
        </a>
      ))}
    </div>
  );
};
