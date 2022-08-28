import { Button, Col, Input, Row, Skeleton } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import './../styles/customModalDialog.css'
import React, { startTransition, useState } from 'react';
import axiosService from '../../../../axios/axiosService';
import { GROUP_TYPES, ReturnedGroupData } from '../../../../redux/reducers/types/groupsTypes';
import { defaultImage } from '../../../../constants/defaultConsts';
import { typedSelector } from '../../../../redux/services/useTypedSelector';
import { useDispatch } from 'react-redux';


export interface ICustomModal {
    visibleFunc: React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean
}

export interface DataSearchGroup {
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string
}



const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const dataItems: Array<DataSearchGroup> =
    Array.from({ length: 23 }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));


const { Search } = Input;

const CustomModalDialog: React.FC<ICustomModal> = ({ visibleFunc, isVisible }) => {

    const [data, setData] = useState<Array<ReturnedGroupData>>([]);
    const [searching, setSearching] = useState<boolean>(false);
    const [searchParam, setSearchParam] = useState<string>("");

    const user = typedSelector(x => x.user);

    const onChangeParam = (e: any) => {
        if (e.target) {

            let value = e.target.value;

            setSearchParam(value);
        }
    }

    const [page, setPage] = useState<number>(0);

    const onClickSearch =async () => {
        
        setPage(0);
        setSearching(true);
        
        searchQuery(searchParam, 0, user.id, true);
    }

    const onAddMore = () => {
            searchQuery(searchParam, page, user.id, false);
    }

    const searchQuery = (searchParam: string, page: number, userId: number, isNew: boolean) => {
        axiosService.searchGroupsByQuery(searchParam, page, userId)
            .then(res => {
                let dataRes = res.data;
                if(isNew) {
                    setData(dataRes);
                }else {
                    setData([...data, ...dataRes]);
                }

                setSearching(false);
                setInitLoading(false);
                if(dataRes.length > 0) {
                    setPage(page + 1);
                    console.log(page);
                }
            });
    }

    const [initLoading, setInitLoading] = useState(false);

    const onLoadMore = () => {
        setInitLoading(true);
        onAddMore();
    }

    const loadMore =
        !initLoading && data.length > 0 ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>Завантажити ще</Button>
            </div>
        ) : null;

    const dispatch = useDispatch();

    const onSubscribe = (e:any) => {
        if(e.target) {
            let item = e.target.closest(".ant-list-item");
            let id = (e.target as HTMLElement).getAttribute("data-id");
            
            setInitLoading(true);

            axiosService.subscribeOnGroup(Number.parseInt(id!), user.id)
            .then(res => {
                (item as HTMLElement).remove();
                setInitLoading(false);
                dispatch({
                    type: GROUP_TYPES.ADD_GROUP,
                    payload: data.filter(x => x.id == Number.parseInt(id!))[0]
                });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    return (<div className="custom-modal-dialog">
        <div className="modalBackground">
            <div className="modalContainer">
                <Row>
                    <Col span={20}>
                        <h1>Пошук групи</h1>
                    </Col>
                    <Col span={4}>
                        <div className="titleCloseBtn">
                            <button
                                onClick={() => {
                                    visibleFunc(false);
                                }}
                            >
                                X
                            </button>
                        </div>
                    </Col>


                </Row>
                <div className="title">
                    <Search placeholder="Введіть назву групи..." value={searchParam}
                        onChange={onChangeParam} autoFocus={isVisible} enterButton="Пошук"
                        onSearch={onClickSearch} loading={searching} disabled={searching}
                        size="large" />
                </div>
                <div className="body">
                    <List
                        id='listGroups'
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={data}
                        locale={
                            {
                                emptyText: "Немає збігів"
                            }
                        }
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="list-loadmore-subscribe" onClick={onSubscribe} data-id={item.id}>Підписатися</a>]}
                            >
                                    <List.Item.Meta
                                        avatar={<Avatar style={
                                            {
                                                position: 'relative',
                                                left: '0',
                                                top: '0',
                                                transform: 'translate(0, 0)',
                                                width: '40px',
                                                height: '40px'
                                            }
                                        } src={defaultImage + "Group/" + item.image} />}
                                        title={<p>{item.title}</p>}
                                        description={item.description + "   " + item.tags}
                                    />
                                    <div>{item.meta}</div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    </div>);
}

export default CustomModalDialog;