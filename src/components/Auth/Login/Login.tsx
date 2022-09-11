import './../styles/mainStyles.css';
import './../styles/loginStyles.css';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { useState, useRef, Dispatch, useEffect, useContext } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link, NavigateOptions, useNavigate } from 'react-router-dom';
import { Formik, Form, useFormik, FormikProvider } from "formik";
import { Errors, ILoginModel } from '../../../actions/types/AuthTypes';
import TextInput from './Fields/TextInput';
import { useActions } from '../../../actions/auth/UseActions';
import { Alert } from 'antd';
import yupValidation from './yupValidation';
import { useCookies } from 'react-cookie';
import createAxios from '../../../axios/createAxios';
import { LoaderIs } from '../../../App';


const Login: React.FC = () => {
    var navigate = useNavigate();
    const [error, setErrors] = useState<Array<string>>();
    const { LoginAction, AuthUserWithToken } = useActions();

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const initialValues: ILoginModel = {
        email: '',
        password: ''
    }


    const [checked, setCheck] = useState<boolean>(false);

    const onCheckChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => 
    {
        setCheck(checked);
    }

    const {load, setLoad} = useContext(LoaderIs);

    const onSubmitHandler = async (values: ILoginModel) => {
        try {
            setLoad(true);
            await LoginAction(values);

            if(checked) {
                
                let time = Date.now();
                let token = localStorage.getItem("token");
                setCookie("token",token, {
                    path: '/',
                    expires: new Date(time + 30*24*60*60*1000)
                } );
            }
            // // navigate("/profile");
            // setLoad(false);
            let link = document.getElementById("linkToProfile") as HTMLAnchorElement;
            link.click();

        } catch (ex) {
            const serverError = ex as Errors;

            if (serverError.email && serverError.email.length > 0) {
                setErrors([
                    ...serverError.email
                ]);
            }

            if (serverError.password && serverError.password.length > 0) {
                setErrors([
                    ...serverError.password
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

                    {error && error.length > 0 && error.map((value, index) => {
                        return <Alert
                            message="Помилка авторизації"
                            description={value}
                            type="error"
                            showIcon
                            key={"errorAuth: " + index}
                        />
                    })}

                    <span className="title">Вхід</span>

                    <FormikProvider value={formik}>
                        <Form
                            onSubmit={handleSubmit}
                        >
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
                                iconClass="emailIcon"
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



                                <Link className='link-forgot-password' to="/auth/register">
                                    Зареєструватися
                                </Link>
                            </div>

                            <div className="input-field">
                                <button className='submitButton' type='submit'><p>Увійти</p></button>
                            </div>
                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </div>

        <Link id='linkToProfile' style={
            {display: 'none'}
        } to="/profile" target="_top"/>
    </>);
}

export default Login;