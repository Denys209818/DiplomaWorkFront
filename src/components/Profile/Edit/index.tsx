
import { Button, TextField } from "@mui/material";
import { useIMask } from 'react-imask';
import { Col, Row, Image, Modal, Alert } from "antd";
import { ChangeEvent, startTransition, useContext, useState } from "react";
import "./styles/style.css";
import SelectOneImage from "../Components/SelectOneImage";
import PasswordField from "../Components/Fields/PasswordField";
import PhoneField from "../Components/Fields/PhoneField";
import Field from "../Components/Fields/Field";
import { typedSelector } from "../../../redux/services/useTypedSelector";
import { Form, FormikProvider, useFormik } from "formik";
import { IUserEdit } from "./types/UserTypes";
import { useProfileAction } from "../../../actions/profile/useProfileActions";
import { useCookies } from "react-cookie";
import { useActions } from "../../../actions/auth/UseActions";
import { defaultImage } from "../../../constants/defaultConsts";
import yupValidation from "./yupValidation";
import ErrorAlert from "../Components/ErrorAlert";
import SuccessAlert from "../Components/SuccessAlert";
import { LoaderIs } from "../../../App";

const Edit = () => {

    const user = typedSelector(redux => redux.user);
    const [opts, setOpts] = useState({ mask: '+38 (000) 000 00 00' });
    const {
        ref,
        maskRef,
        value,
        setValue,
        unmaskedValue,
        setUnmaskedValue,
        typedValue,
        setTypedValue,
    } = useIMask(opts);

    const [oldPassword, setOldPassword] = useState(false);
    const { AuthUserWithToken } = useActions();
    const [cookies, setCookie] = useCookies(['token']);
    const { ProfileAction, ChangeImage } = useProfileAction();

    const [error, setError] = useState<string>();

    const {load, setLoad} = useContext(LoaderIs);

    const onSubmitHandler = async (values: IUserEdit) => {
        setLoad(true);

        await startTransition(() => {
            setError("");
            setVisibleAlert(false);
        });
        try {
            await ProfileAction({ email: user.email, phoneNumber: values.phone.length == 19 ? values.phone : user.phone, 
                firstName: values.firstName.length > 0 ? values.firstName : user.firstName, 
                secondName: values.secondName.length > 0 ? values.secondName : user.secondName,
                oldPassword: values.oldPassword, password: values.password, confirmPassword: values.confirmPassword 
             });

            
            if (base64 && base64.length > 0) {
                await ChangeImage({
                    imageBase64: base64,
                    email: user.email
                });
            }
    
            let token = await localStorage.getItem("token")!;
            await AuthUserWithToken(token);
            let time = Date.now();

            setCookie("token", token, {
                path: '/',
                expires: new Date(time + 30 * 24 * 60 * 60 * 1000)
            });


            setVisibleAlert(true);
        } catch (ex) {
            let errors = ex as Array<string>;
            setError(errors.join("\n"));
    }
    setLoad(false);

}

    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            phone: '',
            oldPassword: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: onSubmitHandler,
        validationSchema: yupValidation
    });

    const [alertVis, setVisibleAlert] = useState<boolean>(false);

    const [base64, setBase64] = useState<string>("");

    const { handleChange, touched, errors } = formik;

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="main-for-editProfile">

            <Row id='editProfileRow'>
                <Col span={24}>
                    <div className="edit-form">
                        <h2>Редагувати профіль</h2>
                        <div className="form-group">
                            <SelectOneImage image={defaultImage + user.image} setBase64={setBase64}/>
                        </div>
                        <FormikProvider value={formik}>
                            <Form  >
                                <Field label="Ім'я" id="firstName" name="firstName" onChange={handleChange}
                                    value={user.firstName} error={errors.firstName} touched={touched.firstName}
                                />
                                <Field label="Прізвище" id="secondName" name="secondName" onChange={handleChange}
                                    value={user.secondName} error={errors.secondName} touched={touched.secondName}
                                />

                                <PhoneField onChangeValue={handleChange} id="phone" name="phone"
                                    error={errors.phone} touched={touched.phone} defaultValue={user.phone}
                                />

                                <PasswordField label="Старий пароль" name="oldPassword"
                                    id="oldPassword" showPassword={oldPassword} onChangeValue={handleChange}
                                    error={errors.oldPassword} touched={touched.oldPassword}
                                    setShowPassword={setOldPassword} />

                                <PasswordField label="Пароль" name="password"
                                    id="password" showPassword={showPassword} onChangeValue={handleChange}
                                    error={errors.password} touched={touched.password}
                                    setShowPassword={setShowPassword} />

                                <PasswordField label="Підтвердження пароля" name="confirmPassword"
                                    id="confirmPassword" showPassword={showPassword} onChangeValue={handleChange}
                                    error={errors.confirmPassword} touched={touched.confirmPassword}
                                    setShowPassword={setShowPassword} />

                                {alertVis && <Alert
                                    message="Успішно відредаговано!"
                                    type="success"
                                    closable
                                    onClose={() => {setVisibleAlert(false)}}
                                />}

                                {/* <SuccessAlert alertVis={alertVis} setVisibleAlert={setVisibleAlert}/> */}
                                <ErrorAlert error={error} setError={setError} />

                                {error && error.length > 0  && <Alert
                                    message="Помилка редагування"
                                    description={error}
                                    type="error"
                                    closable
                                    onClose={() => setError("")}
                                />}
                                <div className="form-group">
                                    <Button className="btnSubmit" type="submit" variant="contained">Підтвердити</Button>
                                </div>


                            </Form>
                        </FormikProvider>
                    </div>
                </Col>
            </Row>
        </div>);
}

export default Edit;