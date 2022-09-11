import * as Yup from "yup";

export default Yup.object({
    firstName: Yup.string().required('Поле обов\'язкове для заповнення!').max(25),
    secondName: Yup.string().required('Поле обов\'язкове для заповнення!').max(25),
    phone: Yup.string().required('Поле обов\'язкове для заповнення!'),
    email: Yup.string().required('Поле обов\'язкове для заповнення!')
    .email('Поле електронної введено не вірно!'),
    password: Yup.string().required('Поле обов\'язкове для заповнення!')
    .min(6, 'Мінімальна кількість значень - 6'),
    confirmPassword: Yup.string().required('Поле обов\'язкове для заповнення!')
    .oneOf([Yup.ref('password'), null], 'Пароль повинен збігатися')
}); 