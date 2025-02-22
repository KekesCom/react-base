import styles from './input.module.scss';

export const Input = ({ register, name, error, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        id={name}
        {...register(name)}
        {...props}
        className={`${styles.input} ${error ? styles.invalid : ''}`}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};
