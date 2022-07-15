import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch, useState } from "react";
import { useIMask } from 'react-imask';

import "./../styles/main.css";

interface IPhoneField 
{
    phone: string,
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void,
    id: string
}

const PhoneField: React.FC<IPhoneField> = ({phone, onChangeValue, id}) => {
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

    return (

        <div className="form-group">

            <TextField inputRef={ref} label={phone}
                id={id} value={value} onChange={onChangeValue} />
        </div>);
}

export default PhoneField;