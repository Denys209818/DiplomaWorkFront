import "../Fields/styles/style.css"
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useField } from 'formik';
import { isGeneratorFunction } from "util/types";
import exp from "constants";
import InputMask from 'react-input-mask';

export interface IMaskInput {
    label: string,
    name: string,
    id: string, 
    maska: string,
    IconElement: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
    iconClass: string,
    error?: null | string,
    touched?: boolean
}

const IMask: React.FC<IMaskInput> = ({label, name, id, maska, IconElement, iconClass, error, touched}) => {

    const [field, meta] = useField({name, id});

    return (<>
        <div className="input-field">
                <IconElement className={iconClass} />
                <InputMask {...field} placeholder={label} mask={maska} />
        </div>
        {touched && error && <div className="invalid-feedback">
                    {error}
            </div>}
    </>);
}

export default IMask;