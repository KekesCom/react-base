import { Input } from '@/components/input';

import styles from './form-input.module.scss';

export const FormInput = ({ register, errors }) => {
  return (
    <div className={styles.inputWrapper}>
      <Input name="name" register={register} error={errors.name} placeholder="Имя" />
      <Input
        name="phone"
        register={register}
        error={errors.phone}
        type="tel"
        placeholder="Телефон"
      />
      <Input
        name="email"
        register={register}
        error={errors.email}
        type="email"
        placeholder="Email"
      />
    </div>
  );
};
