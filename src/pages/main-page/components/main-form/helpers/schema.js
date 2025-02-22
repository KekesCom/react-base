import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(/^[А-Яа-яЁё\s-]+$/, 'Только русские буквы, пробелы или дефис'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^\+7\d{10}$/, 'Формат: +7 и 10 цифр, например, +79991234567'),
  email: yup.string().required('Email обязателен').email('Введите корректный email'),
});
