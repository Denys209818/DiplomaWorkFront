import * as Yup from "yup";

export default Yup.object({
    firstName: Yup.string(),
    secondName: Yup.string(),
    phone: Yup.string(),
    oldPassword: Yup.string().min(6, "Мінімальна кількість символів - 6"),
    password:  Yup.string().min(6, "Мінімальна кількість символів - 6"),
    confirmPassword: Yup.string().min(6, "Мінімальна кількість символів - 6")
    .oneOf([Yup.ref('password'), null], 'Паролі мусять співпадати!')
});