import { Col, Row } from 'antd';
import React, { startTransition, useEffect, useState } from 'react';
import './../Groups/groupsStyles.css';
import { animated, useTransition } from 'react-spring';
import RightColumn from './CustomComponents/RightColumn';
import LeftColumn from './CustomComponents/LeftColumn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ModalSpring from './CustomComponents/ModalSpring';
import EditModal from './CustomComponents/EditModal';
import { typedSelector } from '../../../redux/services/useTypedSelector';
import { IGroup } from './types/groupTypes';
import axiosService from '../../../axios/axiosService';
import { IPublication } from '../../../redux/reducers/types/groupsTypes';


const Groups: React.FC = () => {
    const [isPhone, setPhone] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const user = typedSelector(user => user.user);
    // const [groups, setGroups] = useState<Array<IGroup>>([]);

    const groups = typedSelector(groups => groups.groups);

    useEffect(() => {
        window.addEventListener("resize", () => {
            startTransition(() => {
                setWidth(window.innerWidth);
            });
        });

        // let id = user.id as number;

        // axiosService.getGroups({
        //     id: id
        // }).then(res => {
        //     let data = res.data;
        //     setGroups([...data]);
        // })
        //     .catch(error => {
        //         console.log(error);
        //     });

    }, []);


    const transitionRight = useTransition(visibleRight, {
        from: {
            x: width,
        },
        enter: {
            x: 0,
        },
        leave: {
            x: width,
        }
    });

    const transitionLeft = useTransition(visibleLeft, {
        from: {
            x: -(width),
        },
        enter: {
            x: 0,
        },
        leave: {
            x: -(width),
        }
    });

    const openLeftRightComponent = (id?: number) => {
        startTransition(() => {


            if(id) {
                axiosService.getAllPublicationsByGroupId(id)
                .then(res => {
                    let data = res.data;
                    setPublications(data);
                    
                });

                axiosService.getGroupDataById(id).then(res => {
                    let data = res.data;

                    setActiveGroup({
                        title: data.title,
                        description: data.descrption,
                        image: data.image,
                        id: id
                    });
                });
                
            }

            setVisibleLeft(!visibleLeft);
            setPhone(!isPhone);
            setVisibleRight(!visibleRight);
        });
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);



        var id = (e.target as HTMLElement).closest("li")?.getAttribute(
            "id"
        );

        switch (id) {
            case "deleteGroup": {
                setModalOpen(true);
                startTransition(() => {
                    setDeleted(true);
                    setModalTitle("Ви точно хочете видалити групу?");
                });

                break;
            }
            case "exitGroup": {
                setModalOpen(true);
                startTransition(() => {
                    setDeleted(false);
                    setModalTitle("Ви точно хочете вийти з групи?");
                });
                break;
            }
            case "editGroup": {
                showDragModal();
                break;
            }
        }

    };


    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isDeleted, setDeleted] = useState(false);

    const [publications, setPublications] = useState<Array<IPublication>|null>(null);
    const [activeGroup, setActiveGroup] = useState<IGroup|null>(null);

    const onDeleteGroup = () => {
        console.log("delete");
    }

    const onExitGroup = () => {
        console.log("exit");
    }

    const [draggable, setDraggable] = useState(false);
    const showDragModal = () => {
        setDraggable(true);
    };

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setDraggable(false);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setDraggable(false);
    };

    return (<>
        <ModalSpring open={modalOpen} title={modalTitle}
            setOpen={setModalOpen}
            yesFunc={isDeleted ? onDeleteGroup : onExitGroup} />

        <EditModal
            visible={draggable}
            showModal={showDragModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
        />
        <div className="rows">

            <Row id='row-with-group-names'>
                <Col lg={12} xl={6} md={12} xs={!isPhone ? 24 : 0} >
                    {width <= 768 ? transitionLeft((style, item) => {
                        return (item ? <animated.div style={style}>

                            <LeftColumn groups={groups} onClickLeft={openLeftRightComponent} />

                        </animated.div> : "");
                    }) : <LeftColumn groups={groups} onClickLeft={openLeftRightComponent} />}
                </Col>
                <Col lg={12} xl={18} md={12} xs={isPhone ? 24 : 0} className="right-column">

                    {width <= 768 ? transitionRight((style, item) => {
                        return (item ?
                            <animated.div style={style}>
                                <RightColumn
                                    handleAvatarClick={handleClick}
                                    publications={publications}
                                    setPublications={setPublications}
                                    onClickRight={openLeftRightComponent} 
                                    group={activeGroup}
                                    />


                            </animated.div> : "")
                    }) : <RightColumn
                        handleAvatarClick={handleClick}
                        onClickRight={openLeftRightComponent}
                        setPublications={setPublications}
                        publications={publications}
                        group={activeGroup}
                    />}
                </Col>
            </Row>
        </div>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose} id="editGroup">Редагувати групу</MenuItem>
            <MenuItem onClick={handleClose} id="deleteGroup">Видалити групу</MenuItem>
            <MenuItem onClick={handleClose} id="exitGroup">Вийти з групи</MenuItem>
        </Menu>
    </>);
}

export default Groups;
