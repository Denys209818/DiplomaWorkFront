import './styles/style.css';
import 'cropperjs/dist/cropper.css';
import { ChangeEvent, useRef, useState } from "react";
import Cropper from "cropperjs";

import { Col, Image, Modal, Row } from "antd";

const SelectOneImage: React.FC = () => {

    const [disabledBtn, setDisabled] = useState(false);

    const onOkHandler = () => {
        setDisabled(true);
        setVisible(false);

        let base64 = cropper?.getCroppedCanvas().toDataURL() as string;

        setImg(base64);
        setDisabled(false);
    }
    const [cropper, setCropper] = useState<Cropper>();
    const imageRef = useRef<HTMLImageElement>(null);
    const [visible, setVisible] = useState(false);
    const [srcImg, setImg] = useState("https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png");
    const changeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        await setVisible(true);
        const files = e.target.files!;
        let file = files[0];
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

    return (<div className="input-container">
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
    </div>);
}

export default SelectOneImage;