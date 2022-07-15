import { SearchOutlined } from '@ant-design/icons';
import { InputRef, Modal } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { startTransition, useRef, useState } from 'react';
import { DataIndex, DataType } from '../../SearchFriends/types';
import Highlighter from 'react-highlight-words';
import { Avatar } from '@mui/material';
import { MessageOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MenuForPhone from '../../SearchFriends/MenuForPhone';





const SearchFriendsUI: React.FC = () => {
    const [data, setData] = useState<DataType[]>([
        {
            key: '1',
            name: 'John Brown',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '2',
            name: 'Joe Black',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '3',
            name: 'Jim Green',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '4',
            name: 'Jim Red',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },

        {
            key: '5',
            name: 'John Brown',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '6',
            name: 'Joe Black',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '7',
            name: 'Jim Green',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '8',
            name: 'Jim Red',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },

        {
            key: '9',
            name: 'John Brown',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '10',
            name: 'Joe Black',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '11',
            name: 'Jim Green',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
        {
            key: '12',
            name: 'Jim Red',
            lastPosts: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            url: 'https://mui.com/static/images/avatar/1.jpg'
        },
    ]);
    const [visible, setVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [key, setKey] = useState<string>("");

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const onOkClick = () => {
        setVisible(false);
        setData(data.filter(x => x.key != key));
    }


    const onDeleteFriend = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        var el = (e.target as HTMLElement).closest("tr.ant-table-row") as HTMLTableElement;
        let key:string = el.getAttribute("data-row-key") as string;
        startTransition(() => {

            setKey(key);
            setVisible(true);
        });
    }

    const onDeleteFriendRemote = async (key: string) => {
        await startTransition(() => {
            setKey(key);
            setVisible(true);
        });
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Ім\'я',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: ((value, record: DataType, index) => {
                return (<div className="avatar-block">
                    <Avatar src={record.url} />
                    <span>{value}</span>
                    <MessageOutlined />
                </div>);
            }),
        },
        {
            title: 'Інструменти',
            dataIndex: 'settings',
            key: 'settings',
            width: '20%',
            render: ((value, record: DataType, index) => {
                return (<div className='command-block'>
                    <Link to="/" onClick={onDeleteFriend}>Видалити друга</Link>
                    <span> | </span>
                    <Link to="/">Перейти на профіль</Link>

                </div>);
            })
        },
        {
            title: 'Останні повідомлення',
            dataIndex: 'lastPosts',
            key: 'lastPosts',
            render: ((value, record: DataType, index) => {
                return (<div className='message-block'>
                    <b>Повідомлення: </b><span>{record.lastPosts}</span>
                </div>);
            })
        },
    ];

    const columnsForPhone: ColumnsType<DataType> = [
        {
            title: 'Ім\'я',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: ((value, record: DataType, index) => {
                return (<div className="avatar-block">
                    
                    <Avatar src={record.url} onClick={handleClick} />
                    <span>{value}</span>
                    <MessageOutlined />
                    <span>{record.lastPosts}</span>
                </div>);
            }),
        },
    ];

    return (<>
        <Table locale={{ emptyText: "Немає співпадінь" }} className='table-of-friends'
            bordered={true} columns={window.innerWidth > 700 ? columns : columnsForPhone} dataSource={data} />

        <Modal
            title="Підтвердження"
            visible={visible}
            onOk={onOkClick}
            onCancel={hideModal}
            okText="Підтвердити"
            cancelText="Скасувати"
        >
            <p>Ви точно хочете видалити друга?</p>
            
        </Modal>

        <MenuForPhone anchorEl={anchorEl} linkToProfile={"/profile"}
                        handleClose={handleClose} onDeleteFriendRemote={onDeleteFriendRemote}/>
    </>);
}

export default SearchFriendsUI;