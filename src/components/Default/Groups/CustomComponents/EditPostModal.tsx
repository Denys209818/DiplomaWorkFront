import { Button, Col, Input, Modal, Row } from 'antd';
import { Form, FormikErrors, FormikProvider, FormikTouched, useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useProfileAction } from '../../../../actions/profile/useProfileActions';
import Field from '../../../Profile/Components/Fields/Field';
import SelectImage from '../../../Profile/Components/SelectImage/SelectImage';
import { IEditPost, IPostDataReturned } from './types/EditPostModalTypes';
import "./componentStyles/editPostModal.css";
import EditorTiny from '../../../Profile/Components/EditorTiny';
import axiosService from '../../../../axios/axiosService';

interface IEditPostModal {
    handleOk: (e: React.MouseEvent<HTMLElement>) => void,
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void,
    visible: boolean,
    images: Array<string>,
    setImages: React.Dispatch<React.SetStateAction<string[]>>,
    formik: any,
    touched: FormikTouched<IEditPost>,
    errors: FormikErrors<IEditPost>,
    handleChange: any,
    editorRef: React.MutableRefObject<any>,
    groupData: IPostDataReturned|null
}

const EditPostModal: React.FC<IEditPostModal> = ({handleCancel, handleOk, 
    visible, images, setImages, formik, errors, touched, handleChange, editorRef, groupData}) => {

    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);


    const {ClearImageAction} = useProfileAction();

    const ClearImages = async () => {
        await ClearImageAction();
    }

    useEffect(() => {
        
        return () => {
            ClearImages();
        };
    }, []);


    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    return (<>

        {groupData && <Modal
            okText="Зберегти зміни"
            cancelText="Скасувати"
            title={
                <div
                    style={{
                        width: '100%',
                        cursor: 'move',
                    }}
                    onMouseOver={() => {
                        if (disabled) {
                            setDisabled(false);
                        }
                    }}
                    onMouseOut={() => {
                        setDisabled(true);
                    }}
                    onFocus={() => { }}
                    onBlur={() => { }}
                >
                    Редагування публікації
                </div>
            }
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
            modalRender={modal => (
                <Draggable
                    disabled={disabled}
                    bounds={bounds}
                    onStart={(event, uiData) => onStart(event, uiData)}
                >
                    <div ref={draggleRef}>{modal}</div>
                </Draggable>
            )}
        >
            <FormikProvider value={formik}>
                <Form>
                    <Field label='Заголовок' id='title' name='title' error={errors.title}
                        touched={touched.title} onChange={handleChange} value={groupData.title} />
                    <Field label='Теги' id='tags' name='tags' error={errors.tags}
                        touched={touched.tags} onChange={handleChange} value={groupData.tags} />
                </Form>
            </FormikProvider>
            <EditorTiny editorRef={editorRef} initialValues={groupData.description} height={400} />
            <Row
            className="row-for-image">
                <Col offset={6} span={12}>
                </Col>
            </Row>
            <h4>Фотографії змінюються в режимі реального часу</h4>
            <SelectImage images={images} setImages={setImages} editImage={axiosService.editDynamicImage} postId={groupData.id} />
        </Modal>}
    </>);
}

export default EditPostModal;