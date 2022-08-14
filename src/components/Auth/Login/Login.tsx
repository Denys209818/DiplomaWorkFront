import './../styles/mainStyles.css';
import './../styles/loginStyles.css';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useState, useRef } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import { ILoginModel } from '../../../actions/types/AuthTypes';
import TextInput from './Fields/TextInput';
import { useActions } from '../../../actions/auth/UseActions';

const Login: React.FC = () => {
    const navigation = useNavigate();
    
    
    const [passVisible, setPassVisible] = useState(false);
    const onShowPasswordClicked = () => {
        setPassVisible(!passVisible);
    }
    const {LoginAction} = useActions();

    const onLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        navigation("/profile");
    }

    const initialValues : ILoginModel = {
        email: '',
        password:''
    }

    const refFormik = useRef(null);

    const onSubmitHandler = async(values: ILoginModel) =>  {
        await LoginAction(values);


    }

    return (<>
        <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className="title">Вхід</span>

                    <Formik
                    initialValues={initialValues}
                    innerRef={refFormik}
                    onSubmit={onSubmitHandler}
                    >
                        <Form>

                            <TextInput
                                label='Введіть електронну адресу'
                                id='email'
                                name='email'
                                IconElement={EmailTwoToneIcon}
                                iconClass="emailIcon"
                                isPassword={false}
                            />

                            <TextInput
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
                                    control={<Checkbox />}
                                    label="Запам'ятати мене"
                                    labelPlacement="end"
                                />



                                <Link className='link-forgot-password' to="/auth/register">
                                    Відновити пароль
                                </Link>
                            </div>

                            <div className="input-field">
                                <button className='submitButton' type='submit'><p>Увійти</p></button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>);
}

export default Login;