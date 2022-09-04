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

import { IGroup, IGroupInfo } from './types/groupTypes';
import axiosService from '../../../axios/axiosService';
import { IGroupData, IPublication } from '../../../redux/reducers/types/groupsTypes';
import { IPostDataReturned } from './CustomComponents/types/EditPostModalTypes';
import { defaultImage } from '../../../constants/defaultConsts';
import { useGroupsAction } from '../../../actions/groups/useGroupsAction';
import { usePostActions } from '../../../actions/post/usePostActions';



const Groups: React.FC = () => {
    const [isPhone, setPhone] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const user = typedSelector(user => user.user);
    // const [groups, setGroups] = useState<Array<IGroup>>([]);

    const groups = typedSelector(groups => groups.groups) as Array<IGroup>;
    const publicationsObj = typedSelector(posts => posts.posts) as Array<IPublication>;

    useEffect(() => {
        window.addEventListener("resize", () => {
            startTransition(() => {
                setWidth(window.innerWidth);
            });
        });
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

    const {SetPosts, ClearPost} = usePostActions();

    const generateRightColumn = async (id :number) => {
        ClearPost();
        SetPosts(id);

        let data = (await axiosService.getGroupDataById(id)).data;
        setActiveGroup({
            title: data.title,
            description: data.descrption,
            image: data.image,
            id: id,
            userId: data.userId,
            meta: data.meta,
            tags: data.tags
        });

        setVisibleLeft(!visibleLeft);
        setPhone(!isPhone);
        setVisibleRight(!visibleRight);
    }

    const openLeftRightComponent =async (id?: number) => {
        if (id) {
            startTransition(() => {


                generateRightColumn(id)
            }
            );
        }
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const showDragModal = () => {
        setDraggable(true);
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

    const {DeleteGroupAction, DeleteGroupRedux, DeleteUserGroup} = useGroupsAction();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isDeleted, setDeleted] = useState(false);

    const [publications, setPublications] = useState<Array<IPublication>|null>(null);
    const [activeGroup, setActiveGroup] = useState<IGroup|null>(null);

    const onDeleteGroup = async () => {
        
        if(activeGroup) {
            if(publicationsObj) {
                publicationsObj.forEach((el) => {
                    el.images.forEach((img) => {
                        delPostImage(img);
                    })
                    deletePublication(el.id);
                });
            }
            await ClearPost();
            await DeleteGroupAction(activeGroup.id);
            setActiveGroup(null);
        }
    }

    const deletePublication = async (publicationId: Number) => {
        await axiosService.deletePublication(publicationId);
    }

    const delPostImage = async (image: string) => {
        await axiosService.delPostImage({
            image: image
        });
    }


    const onExitGroup = async () => {
        if(activeGroup) {

            let groupId = activeGroup.id;
            let userId = user.id;

            setPublications(null);
            setActiveGroup(null);

            await DeleteGroupRedux(groupId);

            await DeleteUserGroup(groupId, userId);
        }
    }



    /// edit

    const [draggable, setDraggable] = useState(false);
    
    /// search
    const [searchGroup, setSearchGroup] = useState<string>("");
    const onSearch = (value: string) => {
        //console.log(value);
        setSearchGroup(value);
    } 
    return (<>
        <ModalSpring open={modalOpen} title={modalTitle}
            setOpen={setModalOpen}
            yesFunc={isDeleted ? onDeleteGroup : onExitGroup} />

        <EditModal
            draggable={draggable}
            setDraggable={setDraggable}
            group={activeGroup}
            setGroup={setActiveGroup}
        />
        <div className="rows">

            <Row id='row-with-group-names'>
                <Col lg={12} xl={6} md={12} xs={!isPhone ? 24 : 0} >
                    {width <= 768 ? transitionLeft((style, item) => {
                        return (item ? <animated.div style={style}>
                            <LeftColumn groups={groups.filter(x => x.title.includes(searchGroup))} onSearch={onSearch} onClickLeft={openLeftRightComponent} />

                        </animated.div> : "");
                    }) : <LeftColumn groups={groups.filter(x => x.title.includes(searchGroup))} onSearch={onSearch} onClickLeft={openLeftRightComponent} />}

                </Col>
                <Col lg={12} xl={18} md={12} xs={isPhone ? 24 : 0} className="right-column">

                    {width <= 768 ? transitionRight((style, item) => {
                        return (item ?
                            <animated.div style={style}>
                                <RightColumn
                                    handleAvatarClick={handleClick}
                                    onClickRight={openLeftRightComponent}
                                    group={activeGroup}
                                    
                                />



                            </animated.div> : "")
                    }) : <RightColumn
                        handleAvatarClick={handleClick}
                        onClickRight={openLeftRightComponent}
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
            {(activeGroup && activeGroup.userId == user.id) && 
                <MenuItem onClick={handleClose} id="editGroup">Редагувати групу</MenuItem>  
            }

            {(activeGroup && activeGroup.userId == user.id) &&
                <MenuItem onClick={handleClose} id="deleteGroup">Видалити групу</MenuItem>
            }

            {(activeGroup && activeGroup.userId != user.id) &&

                <MenuItem onClick={handleClose} id="exitGroup">Вийти з групи</MenuItem>
            }
            
        </Menu>
    </>);
}

export default Groups;
