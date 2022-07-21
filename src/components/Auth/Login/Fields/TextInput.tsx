import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import { useField } from 'formik';

export interface ITextInput {
    label: string,
    name: string,
    id: string, 
    IconElement: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
    iconClass: string,
    isPassword: Boolean
}

const TextInput: React.FC<ITextInput> = ({label, name, id, IconElement, iconClass, isPassword}) => {


    const [field, meta] = useField({name, id});

    const [passVisible, setPassVisible] = useState(false);
    const onShowPasswordClicked = () => {
        setPassVisible(!passVisible);
    }

    const getTypeForInput = () => {
        if (isPassword) {
            return passVisible ? "text" : "password";
        } else {
            return "text";
        }
    }

    return (<>
        <div className="input-field">
                <IconElement className={iconClass} />
                <input type={getTypeForInput()} {...field}
                placeholder={label} required />
                
                {isPassword && passVisible && <VisibilityTwoToneIcon className='visEye' onClick={onShowPasswordClicked} />}
                {isPassword && !passVisible && <VisibilityOffTwoToneIcon className='noVisEye' onClick={onShowPasswordClicked} />}
        </div>
    </>);
}

export default TextInput;