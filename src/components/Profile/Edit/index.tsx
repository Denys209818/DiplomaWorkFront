
import { Button, TextField } from "@mui/material";
import { useIMask } from 'react-imask';
import { Col, Row, Image, Modal } from "antd";
import { ChangeEvent,  useState } from "react";
import "./styles/style.css";
import SelectOneImage from "../Components/SelectOneImage";
import PasswordField from "../Components/Fields/PasswordField";
import PhoneField from "../Components/Fields/PhoneField";
import Field from "../Components/Fields/Field";



const Edit = () => {

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

    const [name, setName] = useState("Денис");
    const [surname, setSurname] = useState("Кравчук");
    const [phone, setPhone] = useState("0680162");
    const [password, setPassword] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("password");

    
    const [showPassword, setShowPassword] = useState(false);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let html = e.target as HTMLInputElement;
        let id = html.getAttribute("id");
        switch (id) {
            case "txtName":
                {
                    setName(html.value);
                    break;
                };
            case "txtSurname": {
                setSurname(html.value);
                break;
            };
            case "txtPhone": {
                setValue(html.value);
                break;
            };
            case "txtPassword": {
                setPassword(html.value);
                break;
            };
            case "txtConfirmPassword": {
                setConfirmPassword(html.value);
                break;
            };
        }
    }
    return (
        <div className="main-for-editProfile">

            <Row id='editProfileRow'>
                <Col span={24}>
                    <div className="edit-form">
                        <h2>Редагувати профіль</h2>
                        <div className="form-group">
                            <SelectOneImage/>
                        </div>
                        <Field label="Ім'я" id="txtName" value={name} onChange={onChangeValue}/>

                        <Field label="Прізвище" id="txtSurname" value={surname} onChange={onChangeValue}/>
                        <PhoneField onChangeValue={onChangeValue} id="txtPhone" phone={phone} />
                        
                        <PasswordField label="Пароль" value={password} id="txtPassword" showPassword={showPassword} onChangeValue={onChangeValue}
                        setShowPassword= {setShowPassword}/>

                        <PasswordField label="Підтвердження пароля" value={confirmPassword} id="txtConfirmPassword" showPassword={showPassword} onChangeValue={onChangeValue}
                        setShowPassword= {setShowPassword}/>

                        <div className="form-group">
                            <Button className="btnSubmit" variant="contained">Підтвердити</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>);
}

export default Edit;