import { Col, Input, Row } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import './../styles/customModalDialog.css'
import React from 'react';


export interface ICustomModal {
    visibleFunc: React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean
}

export interface DataSearchGroup {
    href: string,
    title: string,
    avatar:string,
    description:string,
    content:string
}

const data : Array<DataSearchGroup> = 
Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const { Search } = Input;

const CustomModalDialog: React.FC<ICustomModal> = ({ visibleFunc, isVisible }) => {

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
                    <Search placeholder="Введіть назву групи..." autoFocus={isVisible} enterButton="Пошук" size="large" loading />
                </div>
                <div className="body">
                    <List
                    
                        id='listGroups'
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            showTitle:false,
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        
                        }}
                        dataSource={data}
                        locale={
                            {
                                emptyText: 'Немає результатів'
                            }
                        }
                        renderItem={item => (
                            <List.Item
                                
                                key={item.title}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
                {/* <div className="footer">
                    <button
                        onClick={() => {
                            visibleFunc(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div> */}
            </div>
        </div>
    </div>);
}

export default CustomModalDialog;