import { TextField } from '@mui/material';
import './styles/main.css';
import { Button, Col, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import SelectOneImage from '../Components/SelectOneImage';
import Field from '../Components/Fields/Field';
import { ChangeEvent, useState } from 'react';


const CreateGroup: React.FC = () => {


    const [name, setName] = useState<string>("");
    const [meta, setMeta] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [description, setDescription] = useState<string>("");




    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let html = e.target as HTMLInputElement;
        let id = html.getAttribute("id");
        switch (id) {
            case "txtName": {
                setName(html.value);
                break;};
                case "txtMeta": {
                    setMeta(html.value);
                    break;
                };
                case "txtTags": {
                    setTags(html.value);
                    break;
                }
        }
    }

    const onChangeValueArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    return (<Row id='createGroupIdent'>
        <Col span={24}>
            
                <div className='create-group-form'>
                    <div className="group-data">
                        <h2>Створити групу</h2>
                        <SelectOneImage/>
                        <Field label='Ведіть назву групи' id='txtName' touched={false} error="" name='d'  onChange={onChangeValue}/>
                        <Field label='Ведіть мету групи' id='txtMeta' touched={false} error="" name='d'  onChange={onChangeValue}/>
                        <Field label='Ведіть теги без #' id='txtTags' touched={false} error="" name='d' onChange={onChangeValue}/>


                    
                        <div className="input-container">
                            <TextArea value={description} onChange={onChangeValueArea} showCount size='large' style={{
                                height: '300px'
                            }} maxLength={1000} />
                        </div>


                        <Button type='primary' className='createGroupSubmit' block>Створити групу</Button>
                    </div>


                    
                </div>
        </Col>
    </Row>);
}

export default CreateGroup;