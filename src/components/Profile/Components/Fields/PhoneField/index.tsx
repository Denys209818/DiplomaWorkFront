import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { useIMask } from 'react-imask';

import "./../styles/main.css";

interface IPhoneField 
{
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string,
    name?: string,
    error?: null | string,
    touched?: boolean,
    defaultValue: string
}

const PhoneField: React.FC<IPhoneField> = ({ onChangeValue, id, name, error, touched, defaultValue}) => {
    const [ opts, setOpts ] = useState({ mask: '+38 (000) 000 00 00' });
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

      useEffect(() => {
        setTypedValue(defaultValue);
      },[]);

    return (

        <div className="form-group">

            <TextField inputRef={ref} label="Номер телефону" name={name}
                id={id} onChange={onChangeValue} value={value}/>

        {touched && error && <div className="invalid-feedback" style={{color:"#E64848"}}>
            {error}
                </div>}
        </div>);
}

export default PhoneField;