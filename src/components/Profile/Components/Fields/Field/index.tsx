import { TextField } from "@mui/material";
import { FormikErrors } from "formik";
import { ChangeEvent, useEffect } from "react";
import { IUser } from "../../../../../redux/reducers/types/userTypes";
import "./../styles/main.css";

interface IField {
    label: string,
    id: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    error?: null | string,
    touched?: boolean,
    value?: string,
}

const Field: React.FC<IField> = ({label, id, onChange, name, touched, error, value}) => {

   
    return (<>
        <div className="form-group">
            <TextField label={label} id={id} 
            name={name} onChange={onChange} defaultValue={value}/>
        </div>
<<<<<<< HEAD
        {touched && error && <div className="invalid-feedback" style={{color:"#E64848", marginLeft: '1em'}}>
=======
        {touched && error && <div className="invalid-feedback" style={{color:"#E64848"}}>
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
            {error}
                </div>}
    </>);
}

export default Field;