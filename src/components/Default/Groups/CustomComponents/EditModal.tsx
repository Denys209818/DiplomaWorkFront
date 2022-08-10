import { Button, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import SelectOneImage from '../../../Profile/Components/SelectOneImage';

interface IEditModal {
    showModal: () => void,
    handleOk: (e: React.MouseEvent<HTMLElement>) => void,
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void,
    visible: boolean
}

const EditModal: React.FC<IEditModal> = ({showModal, handleOk, handleCancel, visible}) => {
    
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
            <SelectOneImage/>
            <Input className="inputEdit" placeholder="Заголовок" />
            <Input className="inputEdit"  placeholder="Мета" />
            <Input className="inputEdit"  placeholder="Опис" />
            <Input className="inputEdit"  placeholder="Теги" />
        </Modal>
    </>);
}

export default EditModal;