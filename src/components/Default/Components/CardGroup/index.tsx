import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'antd';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useRef, useState, useEffect } from 'react';
import { Queue } from './tools/queue';
import { Button, CardActions } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ModalSpring from '../../Groups/CustomComponents/ModalSpring';
import EditPostModal from '../../Groups/CustomComponents/EditPostModal';
import { IEditImage, IEditPost, IEditPostModal, IPostDataReturned } from '../../Groups/CustomComponents/types/EditPostModalTypes';
import { useFormik } from 'formik';
import { IGetTiny } from '../../../Profile/CreatePost/types';
import { typedSelector } from '../../../../redux/services/useTypedSelector';
import axiosService from '../../../../axios/axiosService';
import { defaultImage } from '../../../../constants/defaultConsts';
import { useProfileAction } from '../../../../actions/profile/useProfileActions';
import { IPublication } from '../../../../redux/reducers/types/groupsTypes';
import { usePostActions } from '../../../../actions/post/usePostActions';



interface ICardGroup {
    images: Array<string>,
    title: string,
    description: string,
    id: number,
    isLikedObj: boolean
}

interface ICardText {
    title: string,
    description: string
}

const CardGroup: React.FC<ICardGroup> = ({ images, title, description, id, isLikedObj }) => {

    const user = typedSelector(user => user.user);


    const {ClearImageAction} = useProfileAction();
    const ClearImages = async () => {
        await ClearImageAction();
    }


    const onLike = async () => {
        let liked = !isLiked;
        let userId = Number.parseInt(user.id.toString());
        let groupId = id;

        // console.log(liked, userId, groupId);

        await axiosService.likedPost({
            postId: groupId,
            liked: liked
        });
        setLiked(!isLiked);

    }

    const [cardText, setCardText] = useState<ICardText>({
        title: title,
        description: description
    });
    
    const [groupData, setGroupData] = useState<IPostDataReturned|null>(null);
    const [isOpen, setOpen] = useState<Boolean>(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isLiked, setLiked] = useState<Boolean>(isLikedObj);
    const [visible, setVisible] = useState(false);

    const reduxImages = typedSelector(images => images.images);
    const [imgs, setImages] = useState<Array<string>>(images);

    const onClickImage = (e: React.MouseEvent<HTMLImageElement>) => {
        let img = e.target as HTMLImageElement;
        let id = img.getAttribute("id")!;
        let arr = id.split("_");
        let index = Number.parseInt(arr[1]);

        setPhotoIndex(index);
        setOpen(true);
    }

    const showModal = () => {
        setVisible(true);
    }

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        setVisible(false);

        formik.submitForm();
    }

    // formik data
    const initialValues: IEditPost = {
        title: '',
        tags: ''
    }


    const onSubmitFormHandler = async (values: IEditPost) => {
        // console.log(values);

        let content = (editorRef.current as IGetTiny)
            .contentDocument.body.innerHTML;

        // console.log(content);
        // console.log(imgs);

        let editPostModal: IEditPostModal = {
            title: values.title.length > 0 ? values.title : groupData!.title,
            tags: values.tags.length > 0 ? values.tags : groupData!.tags,
            text: content,
            publicationId: id,
            images: imgs.map((item) => {
                let image: IEditImage = {
                    image: item
                }
                return image;
            })
        };

        setCardText({
            title: editPostModal.title,
            description: editPostModal.text
        });
        const res = await axiosService.editPost(editPostModal);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmitFormHandler
    });

    const { touched, errors, handleChange } = formik;

    useEffect(() => {

        axiosService.getPostDataById(id).then(res => {
            let data = res.data;
            setImages(data.images);
            setGroupData(data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const editorRef = useRef<any>();

    ///////////////////////////////////////////

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setVisible(false);
        let images = imgs;
        reduxImages.forEach((item) => {
            images = [...(images.filter(x => x != item))];
        });
        setImages(images);
        ClearImages();
    }


    const [isOpenDelete, setOpenDelete] = useState(false);

    const {DelPosts} = usePostActions();

    const onDelete = async () => {
        
         
        await DelPosts(id);
        
    }

    return (<>

        <ModalSpring title="Ви дійсно бажаєте видалити публікацію?"
            open={isOpenDelete}
            setOpen={setOpenDelete}
            yesFunc={onDelete}
        />

        <EditPostModal
            handleCancel={handleCancel}
            handleChange={handleChange}
            editorRef={editorRef}
            errors={errors}
            touched={touched}
            handleOk={handleOk}
            formik={formik}
            images={imgs}
            setImages={setImages}
            groupData={groupData}
            visible={visible}
             />
        <Card id={'card' + id} sx={{ maxWidth: '100%', marginTop: '3em', marginBottom: '2em' }}>
            <Row>
                {new Queue(imgs).getForThree().map((item, index) => {

                    let size = 8;
                    switch (item.data.length) {
                        case 1: {
                            size = 24;
                            break;
                        }
                        case 2: {
                            size = 12;
                            break;
                        }
                        default: {
                            size = 8;
                            break;
                        }
                    }

                    return item.data.map((element, indexOfElement) => {
                        return (<Col key={"imgLight" + index.toString() + indexOfElement.toString()} span={size}>
                            <CardMedia
                                id={"imgId_" + ((3 * index) + indexOfElement).toString()}
                                onClick={onClickImage}
                                component="img"
                                height="140"
                                image={defaultImage + "Post/" + element}
                            />
                        </Col>);
                    });
                })}
            </Row>



            <CardContent>
                <Typography gutterBottom variant="h5" component="div">

                    {cardText.title}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: cardText.description }}></div>

  

            </CardContent>
            <CardActions>
                {isLiked ?
                    <FavoriteSharpIcon color='error' className='icon-mui' fontSize='large' onClick={onLike} /> :
                    <FavoriteBorderSharpIcon color='error' className='icon-mui' fontSize='large' onClick={onLike} />}

                    {(groupData && groupData.userId == user.id) ? <>
                <DeleteForeverIcon onClick={() => setOpenDelete(true)} className='icon-mui' fontSize='large' />
                <EditIcon onClick={() => showModal()} className='icon-mui' fontSize='large' /></>
                    : <></>}
                
            </CardActions>
        </Card>


        {isOpen && (
            <Lightbox
                mainSrc={defaultImage + "Post/" + images[photoIndex]}
                nextSrc={defaultImage + "Post/" + images[(photoIndex + 1) % images.length]}
                prevSrc={defaultImage + "Post/" + images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setOpen(false)}
                onMovePrevRequest={() => { setPhotoIndex((photoIndex + images.length - 1) % images.length); }
                }
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % images.length);
                }}
            />
        )}
    </>);
}

export default CardGroup;