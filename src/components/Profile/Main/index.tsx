import "./../styles/mainStyles.css";
import { Col, Row } from "antd";
import PostContainer from "../PostContainer";
import Card from "../Card";
import FriendsCard from "../FriendsCard";
import { IFriendDataArray } from "../FriendsCard/types/friendsCardInterfaces";

import { Avatar, List } from 'antd';
import PhoneNavbar from "../PhoneNavbar";
import { Link } from "react-router-dom";



const ProfileMain: React.FC = () => {
    const data: IFriendDataArray = {
        friends: [
            {
                name: "Ali Connors",
                description: "I'll be in your neighborhood doing errands this…",
                image: "https://mui.com/static/images/avatar/1.jpg",
                isOnline: true
            },
            {
                name: "to Scott, Alex, Jennifer",
                description: "Wish I could come, but I'm out of town this…",
                image: "https://mui.com/static/images/avatar/2.jpg", isOnline: false
            },
            {
                name: "Sandra Adams",
                description: "Do you have Paris recommendations? Have you ever…",
                image: "https://mui.com/static/images/avatar/3.jpg", isOnline: false
            }
        ]
    }

    const dataSource = [
        {
            title: 'Ant Design Title 1',
            id: "1214124"
        },
        {
            title: 'Ant Design Title 2',
            id: "1214122"
        },
        {
            title: 'Ant Design Title 3',
            id: "1214121"
        },
        {
            title: 'Ant Design Title 4',
            id: "1214125"
        },
    ];

    return (<>
        
            <Row>
                <Col md={24} xs={24} className="navbar-small">

                <PhoneNavbar />
                </Col>
                <Col md={22} offset={1}
                    lg={13} xs={22}>
                    <div className="post-container-block">

                        <PostContainer />
                        <PostContainer />

                        <PostContainer />
                        <PostContainer />
                        <PostContainer />


                    </div>
                </Col>
                <Col md={0}
                    lg={0} xs={1}></Col>
                <Col md={22}
                    lg={9} xs={22}>
                    <div className="parent-element">
                        <div className="content-body">

                            <Card name="Денис Кравчук" stage="Senior Developer" posts={123} follows={500} following={300} />


                            <FriendsCard friends={data.friends} />

                            <div className="groups-block">
                                <h3>Групи</h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={dataSource}
                                    renderItem={item => (
                                        <List.Item key={"Index" + item.id}>
                                            <List.Item.Meta
                                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                                title={<a href="https://ant.design">{item.title}</a>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />
                                        </List.Item>
                                    )}
                                    footer={<>
                                        <List.Item key="lastItem">
                                            <Link to="/profile/createGroup" className="link-in-block">Створити групу</Link>
<<<<<<< HEAD
                                            
                                            <Link to="/profile/createPost" className="link-in-block">Створити пост</Link>

=======

                                            
                                            <Link to="/profile/createPost" className="link-in-block">Створити пост</Link>


                                            <Link to="/createGroup" className="link-in-block">Створити групу</Link>

>>>>>>> 4c3fbfd7746cf1a520c93681293fb2c7ecc45948
                                        </List.Item>
                                    </>
                                    }

                                />
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>


    </>);
}

export default ProfileMain;