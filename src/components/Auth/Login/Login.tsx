import './../styles/mainStyles.css';
import './../styles/loginStyles.css';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [passVisible, setPassVisible] = useState(false);
    const navigation = useNavigate();


    const onShowPasswordClicked = () => {
        setPassVisible(!passVisible);
    }


    const onLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        navigation("/profile");
    }
    return (<>
        <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className="title">Вхід</span>

                    <form action="#">
                        <div className="input-field">
                            <EmailTwoToneIcon className='emailIcon' />
                            <input type="text" placeholder='Введіть електронну адресу' required />

                        </div>

                        <div className="input-field">
                            <LockTwoToneIcon className='lockIcon' />
                            <input type={passVisible ? "text" : "password"} placeholder='Введіть пароль' required />
                            {passVisible && <VisibilityTwoToneIcon className='visEye' onClick={onShowPasswordClicked} />}
                            {!passVisible && <VisibilityOffTwoToneIcon className='noVisEye' onClick={onShowPasswordClicked} />}
                        </div>

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
                            <button className='submitButton' onClick={onLoginSubmit}><p>Увійти</p></button>
                        </div>

                        
                    </form>


                </div>
            </div>
        </div>
    </>);
}

export default Login;