import './../styles/mainStyles.css';
import './../styles/loginStyles.css';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import {Link as LinkMui} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { normalize } from 'path';
import { Errors, IRegisterModel } from '../../../actions/types/AuthTypes';
import { useActions } from '../../../actions/auth/UseActions';
import { useCookies } from 'react-cookie';
import { Formik, Form, useFormik, FormikProvider } from "formik";
import { Alert } from 'antd';
import yupValidation from '../Register/yupValidation';
import TextInput from './Fields/TextInput';
import IMask from './Fields/Imask';


const Register : React.FC = () => 
{
    var navigate = useNavigate();
    const [error, setErrors] = useState<Array<string>>();
    const {RegisterAction} = useActions();

    //const [passVisible, setPassVisible] = useState(false);

    const [cookie, setCookie] = useCookies(['token']);
    const initialValues: IRegisterModel = {
        firstName: '',
        secondName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    /*const onShowPasswordClicked = () => {
        setPassVisible(!passVisible);
    }*/

    const [checked, setCheck] = useState<boolean>(false);

    const onCheckChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) =>
    {
        setCheck(checked);
    }

    const onSubmitHandler = async (values: IRegisterModel) => {
        try {
            await RegisterAction(values);
            if(checked) {
                let time = Date.now();
                let token = localStorage.getItem("token");
                setCookie("token", token, {
                    path: '/',
                    expires: new Date(time + 30*24*60*60*1000)
                });
            }
            let item = document.getElementById("toAuth") as HTMLAnchorElement;
            item.click();
        } catch(ex) {
            const serverError = ex as Errors;
            if(serverError.fitstName && serverError.fitstName.length > 0)
            {
                setErrors([
                    ...serverError.fitstName
                ]);
            }
            if(serverError.secondName && serverError.secondName.length > 0)
            {
                setErrors([
                    ...serverError.secondName
                ]);
            }
            if(serverError.phone && serverError.phone.length > 0)
            {
                setErrors([
                    ...serverError.phone
                ]);
            }
            if(serverError.email && serverError.email.length > 0)
            {
                setErrors([
                    ...serverError.email
                ]);
            }
            if(serverError.password && serverError.password.length > 0)
            {
                setErrors([
                    ...serverError.password
                ]);
            }
            if(serverError.confirmPassword && serverError.confirmPassword.length > 0)
            {
                setErrors([
                    ...serverError.confirmPassword
                ]);
            }
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmitHandler,
        validationSchema: yupValidation
    })

    const {errors, touched, handleSubmit, handleChange} = formik;

    return (<>
            <div className="container">
            <div className="forms">
                <div className="form login">

                    {error && error.length > 0 && error.map((value,index) => {
                        return <Alert
                            message = "Помилка авторизації"
                            description= {value}
                            type = "error"
                            showIcon
                            key={"erroeAuth: " + index}
                        />
                    })}

                    <span className="title">Реєстрація</span>

                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                        <TextInput
                            changeHandler={handleChange}
                            touched={touched.firstName}
                            error={errors.firstName}
                            label='Введіть своє ім"я'
                            id='firstName'
                            name='firstName'
                            IconElement={PersonOutlineTwoToneIcon}
                            iconClass="userIcon"
                            isPassword={false}
                        />

                        <TextInput
                            changeHandler={handleChange}
                            touched={touched.secondName}
                            error={errors.secondName}
                            label='Введіть своє прізвище'
                            id='secondName'
                            name='secondName'
                            IconElement={PersonOutlineTwoToneIcon}
                            iconClass="userIcon"
                            isPassword={false}
                        />

                        <IMask
                            touched = {touched.phone}
                            error = {errors.phone}
                            label = 'Введіть номер телефону'
                            id='phone'
                            name='phone'
                            maska='38(999)999-99-99'
                            IconElement={LocalPhoneTwoToneIcon}
                            iconClass="phoneIcon"
                        />

                        <TextInput
                            changeHandler={handleChange}
                            touched={touched.email}
                            error={errors.email}
                            label='Введіть електронну адресу'
                            id='email'
                            name='email'
                            IconElement={EmailTwoToneIcon}
                            iconClass="emailIcon"
                            isPassword={false}
                        />

                        <TextInput
                            touched={touched.password}
                            error={errors.password}
                            changeHandler={handleChange}
                            label='Введіть пароль'
                            id='password'
                            name='password'
                            IconElement={LockTwoToneIcon}
                            iconClass="lockIcon"
                            isPassword={true}
                        />

                        <TextInput
                            touched={touched.confirmPassword}
                            error={errors.confirmPassword}
                            changeHandler={handleChange}
                            label='Підтвердіть пароль' 
                            id='confirmPassword'
                            name='confirmPassword'
                            IconElement={LockTwoToneIcon}
                            iconClass="lockIcon"
                            isPassword={true}
                        />

                         <div className="input-field-checkbox">
                                <FormControlLabel
                                    id='remember'
                                    name='remember'
                                    control={<Checkbox onChange={onCheckChange} />}
                                    label="Запам'ятати мене"
                                    labelPlacement="end"
                                />



                                <Link className='link-forgot-password' to="/auth/login">
                                Аккаунт вже існує?
                                </Link>
                            </div>

                            <div className="input-field">
                                <button className='submitButton' type='submit'><p>Зареєструватися</p></button>
                            </div>       
                        </Form>
                    </FormikProvider>    
                </div>
            </div>
        </div>
        <Link to="/profile" id='toAuth' target="_top" style={{
            display:'none'
        }}/>
        </>);
}

export default Register;