import 'cropperjs/dist/cropper.css';
import { TextField } from '@mui/material';
import './styles/main.css';
import { Button, Col, Image, Modal, Row } from 'antd';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Cropper from 'cropperjs';
import TextArea from 'antd/lib/input/TextArea';


const CreateGroup: React.FC = () => {

    const [cropper, setCropper] = useState<Cropper>();
    const imageRef = useRef<HTMLImageElement>(null);
    const [visible, setVisible] = useState(false);
    const [disabledBtn, setDisabled] = useState(false);

    const onOkHandler = () => {
        setDisabled(true);
        setVisible(false);

        let base64 = cropper?.getCroppedCanvas().toDataURL() as string;

        setImg(base64);
        setDisabled(false);
    }

    const [srcImg, setImg] = useState<string>("https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png");


    const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        await setVisible(true);
        const files = e.target.files!;
        let file = files[0];
        console.log(file);
        if (file) {
            let url = URL.createObjectURL(file);

            let crop = cropper ? cropper : new Cropper(imageRef.current as HTMLImageElement, {
                aspectRatio: 1 / 1,
                viewMode: 1,
            });

            crop.replace(url);
            setCropper(crop);

        }
    }

    return (<Row id='createGroupIdent'>
        <Col span={24}>
            
                <div className='create-group-form'>
                    <div className="group-data">
                        <h2>Створити групу</h2>
                        <div className="input-container">

                            <Image
                                width={200}
                                src={srcImg}

                            />
                            <label htmlFor='selectFileAvatar'>

                                <p>Змінити фотографію</p>

                            </label>
                            <p onClick={() => {
                                (document.getElementById("selectFileAvatar") as HTMLInputElement).value = "";
                                setImg("https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png")
                            }}>Видалити фотографію</p>
                            <input type="file" id='selectFileAvatar' multiple={false} onChange={changeImage} />
                        </div>
                        <div className="input-container">

                            <TextField
                                placeholder="Ведіть назву групи"
                                id="txtName"
                                label="Назва групи"

                            />
                        </div>
                        <div className="input-container">

                            <TextField
                                placeholder="Ведіть мету групи"
                                id="txtMeta"
                                label="Мета групи"

                            />
                        </div>
                        <div className="input-container">

                            <TextField
                                placeholder="Ведіть теги без #"
                                id="txtTags"
                                label="Теги для пошуку"

                            />
                        </div>
                        <div className="input-container">
                            <TextArea showCount size='large' style={{
                                height: '300px'
                            }} maxLength={1000} />
                        </div>


                        <Button type='primary' className='createGroupSubmit' block>Створити групу</Button>
                    </div>


                    <Modal
                        title="Редагування фотографії"
                        centered
                        visible={visible}
                        onOk={() => {
                            onOkHandler()
                        }}
                        width={1000}
                        closable={false}
                        okText="Підтвердити"
                        okButtonProps={{
                            loading: disabledBtn,
                            disabled: disabledBtn
                        }
                        }
                        cancelButtonProps={{ disabled: true, style: { display: 'none' } }}
                    >
                        <Row>
                            <Col md={24} xs={24}>
                                <img ref={imageRef} width="100%" />
                            </Col>

                        </Row>
                    </Modal>
                </div>
        </Col>
    </Row>)};



export default CreateGroup;