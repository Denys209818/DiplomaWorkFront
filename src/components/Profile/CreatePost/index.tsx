import 'cropperjs/dist/cropper.css';
import { Button, MenuItem, TextField } from "@mui/material";
import { Col, Modal, Row } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import "../styles/createPost.css";
import SelectImage from '../Components/SelectImage/SelectImage';
import EditorTiny from '../Components/EditorTiny';
import { typedSelector } from '../../../redux/services/useTypedSelector';
import { Form, FormikProvider, useFormik } from 'formik';
import { ICreatePost, IGetTiny } from './types';
import yupValidation from './yupValidation';
import Field from '../Components/Fields/Field';
import axiosService from '../../../axios/axiosService';
import { useNavigate } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';
import { useProfileAction } from '../../../actions/profile/useProfileActions';
import { IGroup } from '../../Default/Groups/types/groupTypes';
import { LoaderIs } from '../../../App';


const CreatePost: React.FC = () => {


    const user = typedSelector(groups => groups.user);

    const [groups, setGroups] = useState<Array<IGroup>>([]);
    const imgs = typedSelector(imgs => imgs.images);

    const handleGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        setGroup(e.target.value);

        if (e.target.value) {
            setErrorGroup("");
        }
    }

    const [activeGroup, setGroup] = useState<string>("");
    const [errorGroup, setErrorGroup] = useState<string>("");
    const [images, setImages] = useState<Array<string>>([]);

    let initialState: ICreatePost = {
        title: '',
        tags: ''
    };
    const navigate = useNavigate();

    const {ClearImageAction, DelImageAction} = useProfileAction();


    // const trashImages = () => {

    //     imgs && imgs.length > 0
    //         && imgs.forEach(async (val) => {
    //             (await axiosService.delPostImage({
    //                 image: val
    //             }))
    //         });
    // }

    const ClearImages = async () => {
        await ClearImageAction();
    }

    useEffect(() => {

        axiosService.getAllUserGroups(user.id)
        .then(res => {
            let data = res.data;
            setGroups(data);
        }).catch(error => {
            console.log(error);
        });

        return () => {
            ClearImages();
        };
    }, []);

    useBeforeunload((event) => {
        ClearImages();
    });

    const {load, setLoad} = useContext(LoaderIs);

    const onSubmitHandler = async (values: ICreatePost) => {

        let content = (editorRef.current as IGetTiny)
            .contentDocument.body.innerHTML;

        if (!activeGroup && activeGroup.length <= 0) {
            setErrorGroup("Оберіть групу!");
        }


        if (activeGroup) {
        setLoad(true);

            let id: number = (await axiosService.getGroupsByName({
                name: activeGroup
            })).data;


            let res = (await axiosService.addPublication({
                title: values.title,
                tags: values.tags,
                groupId: id,
                text: content,
                images: images.map((element) => {
                    DelImageAction(element);
                    return {
                        image: element
                    }
                })
            })).data;

            success(res);
        setLoad(false);

        }
    }

    const success = (text: string) => {
        Modal.success({
            content: text,
            okText: "Добре",
            onOk: () => {
                navigate("/profile");
            }
        });
    };

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: onSubmitHandler,
        validationSchema: yupValidation
    });

    const { touched, errors, handleChange } = formik;

    const editorRef = useRef<any>();
    return (<>
        <div className="main-for-createPost">

            <FormikProvider value={formik}>
                <Form>
                    <Row id='createPostRow'>
                        <Col lg={8} xs={24}>
                            <div className="form-createpost">
                                <h2>Створити публікацію</h2>
                                <div className="text-field">
                                    <Field label="Назва для поста" name="title"
                                        id="title" onChange={handleChange}
                                        touched={touched.title} error={errors.title} />

                                </div>
                                <div className="text-field">

                                    <Field label="Теги для пошуку" name="tags"
                                        id="tags" onChange={handleChange}
                                        touched={touched.tags} error={errors.tags} />

                                </div>
                                <div className="text-field">
                                    <TextField
                                        id="group"
                                        name="group"
                                        select
                                        label="Обрати групу"
                                        value={activeGroup}
                                        onChange={handleGroup}
                                        helperText="Оберіть групу"
                                    >
                                        {groups.map((option) => (
                                            <MenuItem id={option.id.toString()}
                                                key={option.title} value={option.title}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {errorGroup && <p style={{
                                        color: '#E64848',
                                        marginLeft: '1em'
                                    }}>
                                        Оберіть групу!
                                    </p>}
                                </div>
                                <div className="upload-image">
                                    <SelectImage images={images}
                                        setImages={setImages} />
                                </div>


                            </div>
                        </Col>
                        <Col lg={16} xs={24}>

                            <EditorTiny editorRef={editorRef} />

                        </Col>
                        <Col lg={8} xs={24}>
                            <div className="submit">
                                <Button type="submit" variant="outlined">Опублікувати</Button>
                            </div>
                        </Col>
                    </Row>


                </Form>
            </FormikProvider>
        </div>
    </>);
}

export default CreatePost;