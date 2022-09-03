import { TextField } from '@mui/material';
import './styles/main.css';
import { Button, Col, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import SelectOneImage from '../Components/SelectOneImage';
import Field from '../Components/Fields/Field';
import { ChangeEvent, useState } from 'react';
import { defaultImage } from '../../../constants/defaultConsts';
import { IGroupErrors, IGroupForm } from './types';
import { Form, FormikProvider, useFormik } from 'formik';
import yupValidation from './yupValidation';
import { useProfileAction } from '../../../actions/profile/useProfileActions';
import ErrorAlert from '../Components/ErrorAlert';
import { typedSelector } from '../../../redux/services/useTypedSelector';
import SuccessAlert from '../Components/SuccessAlert';


const CreateGroup: React.FC = () => {

    const [base64, setBase64] = useState<string>("default.jpg");
    const [error, setError] = useState<string|undefined>("");
    const [success, setSuccess] = useState<boolean>(false);

    const user = typedSelector(user => user.user);

    const {CreateGroup} = useProfileAction();

    var initialValues: IGroupForm = {
        title: '',
        meta: '',
        tags: '',
        description: ''
    }


    const onSubmitHandler = async (values: IGroupForm) => {
        try {
            await CreateGroup({
                userId: user.id,
                image: base64 == "default.jpg" ? base64 : base64.split(",")[1],
                ...values
            });
    

            setSuccess(true);

        }catch(ex) {
            let errors = ex as IGroupErrors;
            setError(errors.message);
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmitHandler,
        validationSchema: yupValidation
    });

    const { handleChange, errors, touched } = formik;

    return (<Row id='createGroupIdent'>
        <Col span={24}>

            <div className='create-group-form'>
                <div className="group-data">
                    <h2>Створити групу</h2>
                    <SelectOneImage image={defaultImage + "default.jpg"} setBase64={setBase64} />

                    <FormikProvider value={formik}>
                        <Form>

                            <Field
                                label='Ведіть назву групи'
                                id='title' touched={touched.title}
                                error={errors.title}
                                name='title'
                                onChange={handleChange} />


                            <Field
                                label='Ведіть мету групи'
                                id='meta'
                                touched={touched.meta}
                                error={errors.meta}
                                name='meta'
                                onChange={handleChange} />
                            <Field
                                label='Ведіть теги з #'
                                id='tags'
                                touched={touched.tags}
                                error={errors.tags}
                                name='tags'
                                onChange={handleChange} />



                            <div className="input-container">
                                <TextArea
                                    id="description"
                                    name="description"
                                    onChange={handleChange} showCount size='large' style={{
                                        height: '300px'
                                    }} maxLength={1000} />

                                {touched.description && errors.description && <div style={{color:"#E64848"}}>
                                    {errors.description}
                                </div>}
                            </div>
                            <div style={{
                                marginTop:'2em'
                            }}>
                                <SuccessAlert alertVis={success} setVisibleAlert={setSuccess}/>
                                <ErrorAlert error={error} setError={setError}/>
                            </div>

                            <Button type='primary' htmlType='submit' className='createGroupSubmit' block>Створити групу</Button>

                        </Form>
                    </FormikProvider>
                </div>
            </div>
        </Col>
    </Row>);
}

export default CreateGroup;