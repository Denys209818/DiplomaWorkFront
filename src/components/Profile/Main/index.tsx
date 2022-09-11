import "./../styles/mainStyles.css";
import { Col, Row } from "antd";
import PostContainer from "../PostContainer";
import Card from "../Card";
import FriendsCard from "../FriendsCard";
import { IFriendData, IFriendDataArray } from "../FriendsCard/types/friendsCardInterfaces";

import { Avatar, List } from 'antd';
import PhoneNavbar from "../PhoneNavbar";
import { Link } from "react-router-dom";
import { typedSelector } from "../../../redux/services/useTypedSelector";
import { defaultImage } from "../../../constants/defaultConsts";
import axiosService from "../../../axios/axiosService";
import { startTransition, useContext, useEffect, useState } from "react";
import { IUserDataCount } from "../../../actions/types/AuthTypes";
import { IGetGroup, IUserSubscribersPosts } from "../types/IProfileTypes";
import { token } from "../../../axios/createAxios";
import Loader from "../../Custom/Loader";
import { LoaderIs } from "../../../App";



const ProfileMain: React.FC = () => {
    const [data, setData] = useState< IFriendDataArray>({
        friends: []
    });

    const [dataSource, setDataSource] = useState<Array<IGetGroup>>([]);
    const [groupPosts, setGroupPosts] = useState<Array<IUserSubscribersPosts>>([])

    const user = typedSelector(x => x.user);

    const [userDataCount, setUserDataCount] = useState<IUserDataCount>();

    const {load, setLoad} = useContext(LoaderIs)

    const setUserData = async () => {
        setLoad(true);
        
        let res = (await axiosService.getUserData()).data;

        let groups: Array<IGetGroup> = (await axiosService.getAllUserGroups(
            user.id
        )).data;

        let friends = (await axiosService.getFriends()).data;
        
        let friendsObj: IFriendDataArray = {
            friends: friends.map((item) => {
                let friendData: IFriendData = {
                    name: item.firstName + " " + item.secondName,
                    description: item.email,
                    image: defaultImage + item.image
                }
                return friendData;
            })
        };

        let groupPosts = (await axiosService.getPostsByUserSubscribers()).data;

        console.log(groupPosts);
            setGroupPosts(groupPosts);
            setData(friendsObj);
            setDataSource(groups
        );
            setUserDataCount(res);
        setLoad(false);

        
    }



    useEffect(() => {
        
        setUserData();

        
    },[]);

    return (<>
            
            <Row>
                <Col md={24} xs={24} className="navbar-small">

                <PhoneNavbar />
                </Col>
                <Col md={22} offset={1}
                    lg={13} xs={22}>
                    <div className="post-container-block">

                        {/* <PostContainer />
                        <PostContainer />

                        <PostContainer />
                        <PostContainer />
                        <PostContainer /> */}

                        {groupPosts && groupPosts.map((element) => {
                            return (<PostContainer key={"postIndexItem" + element.id} {...element} />);
                        })}
                        {groupPosts && groupPosts.length == 0 &&
                        <h3>У вас поки що немає публікацій...</h3>}


                    </div>
                </Col>
                <Col md={0}
                    lg={0} xs={1}></Col>
                <Col md={22}
                    lg={9} xs={22}>
                    <div className="parent-element">
                        <div className="content-body">

                        <Card name={user.firstName + " " + user.secondName } stage={user.email}
                        postsCount={userDataCount ? userDataCount.postsCount : 0} 
                        groupsCount={userDataCount ? userDataCount.groupsCount : 0} 
                        friendsCount={userDataCount ? userDataCount.friendsCount : 0} image={defaultImage + user.image} />


                            <FriendsCard friends={data.friends} />

                            <div className="groups-block">
                                <h3>Мої групи</h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={dataSource}
                                    renderItem={item => (
                                        <List.Item key={"Index" + item.id}>
                                            <List.Item.Meta
                                                avatar={<Avatar src={defaultImage + "Group/" + item.image} />}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                    footer={<>
                                        <List.Item key="lastItem">
                                            <Link to="/profile/createGroup" className="link-in-block">Створити групу</Link>
                                            
                                            {/* <Link to="/profile/createPost" className="link-in-block">Створити пост</Link> */}


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