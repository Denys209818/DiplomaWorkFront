import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import "./../styles/main.css";

interface IField {
    label: string,
    id: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Field: React.FC<IField> = ({label, id, value, onChange}) => {
    return (<>
        <div className="form-group">
            <TextField label={label} id={id} value={value} onChange={onChange} />
        </div>
    </>);
}

export default Field;