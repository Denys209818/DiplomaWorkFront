import { Button, Input, Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useProfileAction } from '../../../../actions/profile/useProfileActions';
import { defaultImage } from '../../../../constants/defaultConsts';
import SelectOneImage from '../../../Profile/Components/SelectOneImage';
import { IGroup, IGroupInfo } from '../types/groupTypes';
import Field from '../../../Profile/Components/Fields/Field/index';
import axiosService from '../../../../axios/axiosService';
import { useDispatch } from 'react-redux';
import { GROUP_TYPES, IGroupShort } from '../../../../redux/reducers/types/groupsTypes';

interface IEditModal {
    group: IGroup|null,
    draggable: boolean,
    setDraggable: React.Dispatch<React.SetStateAction<boolean>>,
    setGroup?: React.Dispatch<React.SetStateAction<IGroup | null>>
}

export interface IEditForm {
    title: string,
    meta: string,
    description: string,
    tags: string
}

const EditModal: React.FC<IEditModal> = ({group, draggable, setDraggable, setGroup}) => {
    
    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);
   


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


    const editForm: IEditForm = {
        title: '',
        description: '',
        meta: '',
        tags:''
    };

    const dispatch = useDispatch();

    const onSubmitEditGroup = async (values: IEditForm) => {
        if(group) {

            let editData: IGroupInfo = {
                title: (values.title && values.title.length > 0) ? values.title : group.title,
                description: (values.description && values.description.length > 0) ? values.description : group.description,
                tags: (values.tags && values.tags.length > 0) ? values.tags : group.tags,
                meta: (values.meta && values.meta.length > 0) ? values.meta : group.meta,
                imageBase64: (base64 && base64.length > 0) ? base64 : "default.jpg",
                groupId: group.id
            }

            let groupState: IGroup|null = {
                title: editData.title,
                description: editData.description,
                meta: editData.meta,
                tags: editData.tags,
                id: group.id,
                userId: group.userId,
                image: ''
            }
            if(setGroup) {
                let res = (await axiosService.editGroup(editData)).data as string;
                let groupShort: IGroupShort = {
                    title: groupState.title,
                    description: groupState.description,
                    id: groupState.id,
                    userId: groupState.userId,
                    meta: groupState.meta,
                    image: res,
                    tags: groupState.tags
                };
                groupState.image = res;
                setGroup(groupState);
                dispatch({
                    type: GROUP_TYPES.EDIT_GROUP,
                    payload: groupShort
                });
            }
        }
    }

    const formikEdit = useFormik({
        initialValues:editForm,
        onSubmit:onSubmitEditGroup
    });

    const {handleChange, errors, touched} = formikEdit;


    const [base64, setBase64] = useState<string>("");
    

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        setDraggable(false);


        formikEdit.submitForm();
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
         setDraggable(false);
    };

    return (<>
        <Modal
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
                    // fix eslintjsx-a11y/mouse-events-have-key-events
                    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                    onFocus={() => { }}
                    onBlur={() => { }}
                // end
                >
                    Редагування групи
                </div>
            }
            visible={draggable}
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
            <SelectOneImage image={
                group ?
                group.image.length > 30 ? group.image : defaultImage + "Group/" + group.image
            : defaultImage + "Group/default.jpg"} setBase64={setBase64} />
            {/* <Input className="inputEdit" placeholder="Заголовок" />
            <Input className="inputEdit" placeholder="Мета" />
            <Input className="inputEdit" placeholder="Опис" />
            <Input className="inputEdit" placeholder="Теги" /> */}
            <Field label='Заголовок' id='title' name='title' onChange={handleChange}
                value={group?.title} touched={touched.title} error={errors.title} />

            <Field label='Мета' id='meta' name='meta' onChange={handleChange}
                value={group?.meta} touched={touched.title} error={errors.title} />

            <Field label='Опис' id='description' name='description' onChange={handleChange}
                value={group?.description} touched={touched.title} error={errors.title} />

            <Field label='Теги' id='tags' name='tags' onChange={handleChange}
                value={group?.tags} touched={touched.title} error={errors.title} />
        </Modal>
    </>);
}

export default EditModal;