import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Container } from '@/components/container';

import { FormInput } from './components/form-input';
import { schema } from './helpers/schema';

import styles from './main-form.module.scss';

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <section className={styles.course}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Запишитесь на курс со скидкой 10%</h2>
            <p className={styles.description}>Акция действительна до 10 марта 2022 года</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput register={register} errors={errors} />
            <Button additionalClassname={styles.btn} type="submit" variant="secondary">
              Оформить заявку
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
