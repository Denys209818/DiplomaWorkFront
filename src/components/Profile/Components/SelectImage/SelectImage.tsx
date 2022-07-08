import { Col, Row, Modal } from "antd";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useRef, useState } from "react";
import { ImageData } from '../../CreatePost/types';
import './styles/style.css';
import Cropper from "cropperjs";

const SelectImage: React.FC = () => {

    const [fileListBlob, setFileListBlob] = useState<Array<ImageData>>([]);
    const [cropperObj, setCropperObj] = useState<Cropper>();
    const [visible, setVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const imagePreview = useRef<HTMLImageElement>(null);
    const [disabledBtn, setDisabled] = useState<boolean>(false);

    const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = (e.target as HTMLInputElement).files!;

        const file = files[0];
        if (file) {

            let blob = URL.createObjectURL(file);
            await setVisible(true);
            var cropper = cropperObj ? cropperObj : new Cropper(imageRef.current as HTMLImageElement, {
                aspectRatio: 16 / 9,
                preview: imagePreview.current as HTMLImageElement,
                viewMode: 1
            });

            cropper?.replace(blob);
            setCropperObj(cropper);
        }
    }

    const onTrashClick = (e: React.MouseEvent<HTMLElement>) => {
        let el = (e.target as HTMLButtonElement).closest('div.ant-col');
        let id = (e.target as HTMLButtonElement).closest('div.trash-icon')?.getAttribute('id');
        let list = fileListBlob.filter((x) => x.uid != id);
        setFileListBlob([...list]);
        el?.remove();
    }

    const onOkHandler = async () => {
        await setDisabled(true);

        await setVisible(false);

        var base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;

        if (base64) {

            let blobs = fileListBlob!;
            blobs.push({
                base64: base64,
                uid: 'id' + (new Date()).getTime()
            });
            await setFileListBlob([...blobs]);
            await setDisabled(false);

            (document.getElementById("images") as HTMLInputElement).value = "";        
        }
    }

    return (<>
        <Row>
            {fileListBlob.map((element, index) => {
                return (<div className="loadImage" key={"pushedimg" + index} ><Col span={24}>
                    <div className="trash-icon" id={element.uid} onClick={onTrashClick}>
                        <RemoveCircleOutlineIcon />
                    </div>
                    <img width="350" src={element.base64} style={
                        { marginTop: '20px' }
                    } />
                </Col></div>);
            })}
            <Col span={24}>
                <div className="addImageDiv">

                    <label htmlFor="images" id="addImage">
                        {/* Відображення фотографії, при нажатті на яку відкривається вікно для вибірки файлів */}
                        <img width="150" src="https://static.thenounproject.com/png/187803-200.png" />
                    </label>
                    <input type="file" multiple={false} id="images" onChange={onChangeImage} />
                </div>
            </Col>

        </Row>


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
                <Col md={16} xs={24}>
                    <img ref={imageRef} width="100%" />
                </Col>
                <Col offset={2} md={6} xs={24}>
                    <div style={{
                        height: "150px",
                        border: "1px solid silver",
                        overflow: "hidden"
                    }} ref={imagePreview}>

                    </div>
                </Col>
            </Row>
        </Modal>
    </>);
}

export default SelectImage;