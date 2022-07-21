import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'antd';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState } from 'react';
import { Queue } from './tools/queue';
import { Button, CardActions } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ModalSpring from '../../Groups/CustomComponents/ModalSpring';
import EditPostModal from '../../Groups/CustomComponents/EditPostModal';




interface ICardGroup {
    images: Array<string>,
    title: string,
    description: string
}

const CardGroup: React.FC<ICardGroup> = ({ images, title, description }) => {

    const [isOpen, setOpen] = useState<Boolean>(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isLiked, setLiked] = useState<Boolean>(false);
    const [visible, setVisible] = useState(false);

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

    const handleOk = (e: React.MouseEvent<HTMLElement>) => 
    {
        setVisible(false);
        console.log(e);
    }
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => 
    {
        setVisible(false);
        console.log(e);
    }


    const [isOpenDelete, setOpenDelete] = useState(false);

    const onDelete = () => {
        console.log("Delete Post");
    }

    return (<>

        <ModalSpring title="Ви дійсно бажаєте видалити публікацію?"
            open={isOpenDelete}
            setOpen={setOpenDelete}
            yesFunc={onDelete}
        />

        <EditPostModal 
        handleCancel ={handleCancel}
        handleOk = {handleOk}
        visible ={visible}/>
        <Card sx={{ maxWidth: '100%', marginTop: '3em', marginBottom: '2em' }}>
            <Row>
                {new Queue(images).getForThree().map((item, index) => {

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
                                image={element}
                            />
                        </Col>);
                    });
                })}
            </Row>



            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {isLiked ?
                    <FavoriteSharpIcon className='icon-mui' fontSize='large' onClick={() => { setLiked(!isLiked) }} /> :
                    <FavoriteBorderSharpIcon className='icon-mui' fontSize='large' onClick={() => { setLiked(!isLiked) }} />}
                <DeleteForeverIcon onClick={() => setOpenDelete(true)} className='icon-mui' fontSize='large' />
                <EditIcon onClick={() => showModal()} className='icon-mui' fontSize='large' />
                <Button size="small">Перейти в коментарі</Button>
            </CardActions>
        </Card>


        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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