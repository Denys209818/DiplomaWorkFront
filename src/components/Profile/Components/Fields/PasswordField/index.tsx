import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch } from "react";
import "./styles/style.css";
import "./../styles/main.css";

interface IPasswordField {
    value: string,
    showPassword: boolean,
    setShowPassword: Dispatch<React.SetStateAction<boolean>>,
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string,
    label: string
}

const PasswordField: React.FC<IPasswordField> = ({value, showPassword, onChangeValue, setShowPassword, id, label}) => {
    return (
        <div className="form-group">
                            <TextField
                                id={id}
                                label={label}
                                value={value}
                                type={showPassword ? 'text' : 'password'}
                                onChange={onChangeValue}
                            />
                            <span className="passwordSet" onClick={() => { setShowPassword(!showPassword) }}>
                                {!showPassword ? "Показати пароль" : "Приховати пароль"}
                            </span>
                        </div>
    );
}

export default PasswordField;