import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch } from "react";
import "./styles/style.css";
import "./../styles/main.css";

interface IPasswordField {
    showPassword: boolean,
    setShowPassword: Dispatch<React.SetStateAction<boolean>>,
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string,
    label: string,
    name: string,
    error?: null | string,
    touched?: boolean,
}

const PasswordField: React.FC<IPasswordField> = ({ showPassword, onChangeValue, setShowPassword, id, label, name
, touched, error}) => {
    return (<>
        <div className="form-group">
            <TextField
                id={id}
                label={label}
                type={showPassword ? 'text' : 'password'}
                onChange={onChangeValue}
                name={name}
            />
            <span className="passwordSet" onClick={() => { setShowPassword(!showPassword) }}>
                {!showPassword ? "Показати пароль" : "Приховати пароль"}
            </span>
        </div>

{touched && error && <div className="invalid-feedback" style={{color:"#E64848"}}>
{error}
    </div>}</>
    );
}

export default PasswordField;