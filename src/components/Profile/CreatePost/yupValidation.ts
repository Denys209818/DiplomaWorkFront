import * as Yup from "yup";

export default Yup.object({
    title: Yup.string().required("Поле не може бути пустим!"),
    tags: Yup.string().required("Поле не може бути пустим!").matches(/^#.*/, {message: "Не валідний запис тега"}),
    group: Yup.string()
});

