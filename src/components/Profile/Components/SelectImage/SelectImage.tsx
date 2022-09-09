import { Col, Row, Modal } from "antd";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext, useEffect, useRef, useState } from "react";
import { ImageData } from '../../CreatePost/types';
import './styles/style.css';
import Cropper from "cropperjs";
import axiosService from "../../../../axios/axiosService";
import { IGetImageName } from "./types/SelectTypes";
import { useProfileAction } from "../../../../actions/profile/useProfileActions";
import { defaultImage } from "../../../../constants/defaultConsts";
import { IEditDynamicImage } from "../../../Default/Groups/CustomComponents/types/EditPostModalTypes";
import { AxiosResponse } from "axios";
import { LoaderIs } from "../../../../App";

interface ISelectManyImages {
    images?: Array<string>,
    setImages?: React.Dispatch<React.SetStateAction<string[]>>,
    editImage?: (image: IEditDynamicImage) => Promise<AxiosResponse<any, any>>,
    postId?: Number
}

const SelectImage: React.FC<ISelectManyImages> = ({images, setImages, editImage, postId}) => {

    const [fileListBlob, setFileListBlob] = useState<Array<ImageData>>([]);
    const [cropperObj, setCropperObj] = useState<Cropper>();
    const [visible, setVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const imagePreview = useRef<HTMLImageElement>(null);
    const [disabledBtn, setDisabled] = useState<boolean>(false);


    useEffect(() => {
        if(images && images.length > 0) {
            let blobs = images.map((element) => {
                let item: ImageData = {
                    uid: 'id' + (new Date()).getTime() + element,
                    base64: defaultImage + "Post/" + element,
                    name: element
                };

                return item;
            });

            setFileListBlob([...blobs]);
        }
    },[]);

    const {AddImageAction, DelImageAction} = useProfileAction();

    const {load, setLoad} = useContext(LoaderIs);

    const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = (e.target as HTMLInputElement).files!;
        

        const file = files[0];
        if (file) {

            let blob = URL.createObjectURL(file);
            await setVisible(true);
            var cropper = cropperObj ? cropperObj : new Cropper(imageRef.current as HTMLImageElement, {
                aspectRatio: 16 / 9,
                preview: imagePreview.current as HTMLImageElement,
                viewMode: 1,
                // zoomOnWheel: false,
                // zoomOnTouch: false,
                // zoomable: false
            });

            cropper?.replace(blob);
            setCropperObj(cropper);
        }

    }

    const onTrashClick = async (e: React.MouseEvent<HTMLElement>) => {
        setLoad(true);
        
        let el = (e.target as HTMLButtonElement).closest('div.ant-col');
        let id = (e.target as HTMLButtonElement).closest('div.trash-icon')?.getAttribute('id');
        let delItem = fileListBlob.filter((x) => x.uid == id)[0];
        (await axiosService.delPostImage({
            image: delItem.name
        }));
        let list = fileListBlob.filter((x) => x.uid != id);
        if(images && setImages) {
            
            let newImages = images.filter((x) => x != delItem.name);
            await DelImageAction(delItem.name);
            await setImages(newImages);
        }
            setFileListBlob(list);
        el?.remove();
        setLoad(false);

    }

    const onOkHandler = async () => {
        setLoad(true);

        await setDisabled(true);

        await setVisible(false);

        var base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;

        if (base64) {

            let blobs = fileListBlob!;
            let res: IGetImageName = (await axiosService.addPostImage({
                image: base64.split(",")[1]
            })).data;
            if(editImage == undefined && postId == undefined) {
                
                await AddImageAction(res.filename);
            }
            if(setImages && images) {
                
                await setImages([...images, res.filename]);
            }
            blobs.push({
                base64: base64,
                uid: 'id' + (new Date()).getTime(),
                name: res.filename
            });
            await setFileListBlob([...blobs]);
            await setDisabled(false);

            (document.getElementById("images") as HTMLInputElement).value = ""; 
            
            if(editImage && postId) {
                const editRes = await editImage({
                    image: res.filename,
                    postId: postId
                });
            }
        }
        setLoad(false);

    }

    return (<>
        <Row>
            {fileListBlob.map((element, index) => {
                return (<div className="loadImage" key={"pushedimg" + element.uid} ><Col span={24}>
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