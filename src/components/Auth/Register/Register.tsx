import './../styles/mainStyles.css';
import './../styles/loginStyles.css';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import {Link as LinkMui} from '@mui/material';
import { Link } from 'react-router-dom';
import { normalize } from 'path';
import InputMask from 'react-input-mask';

const Register : React.FC = () => 
{
    const [passVisible, setPassVisible] = useState(false);

    const onShowPasswordClicked = () => {
        setPassVisible(!passVisible);
    }

    return (<>
            <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className="title">Реєстрація</span>

                    <form action="#">
                        <div className="input-field">
                            <PersonOutlineTwoToneIcon className='userIcon' />
                            <input type="text" placeholder='Введіть своє ім"я' required />
                        </div>

                        <div className="input-field">
                            <PersonOutlineTwoToneIcon className='userIcon' />
                            <input type="text" placeholder='Введіть своє прізвище' required />
                        </div>

                        <div className="input-field">
                            <LocalPhoneTwoToneIcon className='phoneIcon' />
                            <InputMask placeholder='Введіть номер телефону' mask="+38 (999) 999-99-99" required />
                        </div>

                        <div className="input-field">
                            <EmailTwoToneIcon className='emailIcon' />
                            <input type="text" placeholder='Введіть свою електронну адресу' required />
                        </div>

                        <div className="input-field">
                            <LockTwoToneIcon className='lockIcon' />

                            <input type="password" placeholder='Введіть пароль' required />

                            <input type={passVisible ? "text" : "password"} placeholder='Введіть пароль' required />
                            {passVisible && <VisibilityTwoToneIcon className='visEye' onClick={onShowPasswordClicked} />}
                            {!passVisible && <VisibilityOffTwoToneIcon className='noVisEye' onClick={onShowPasswordClicked} />}

                        </div>

                        <div className="input-field">
                            <LockTwoToneIcon className='lockIcon' />
                            <input type={passVisible ? "text" : "password"} placeholder='Підтвердіть пароль' required />
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

                            <Link className='link-forgot-password' to="/auth/login">
                                Аккаунт вже існує?

                            </Link>
                        </div>

                        <div className="input-field">
                            <button className='submitButton'><p>Зареєструватися</p></button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
        </>);
}

export default Register;