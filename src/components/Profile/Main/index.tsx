import "./../styles/mainStyles.css";
import { Col, Row } from "antd";
import PostContainer from "../PostContainer";
import Card from "../Card";
import FriendsCard from "../FriendsCard";
import { IFriendData, IFriendDataArray } from "../FriendsCard/types/friendsCardInterfaces";

import { Avatar, List } from 'antd';
import PhoneNavbar from "../PhoneNavbar";
import { Link, useLocation } from "react-router-dom";
import { typedSelector } from "../../../redux/services/useTypedSelector";
import { defaultImage } from "../../../constants/defaultConsts";
import axiosService from "../../../axios/axiosService";
import { startTransition, useContext, useEffect, useState } from "react";
import { GetUserInfo, IUserDataCount } from "../../../actions/types/AuthTypes";
import { IGetGroup, IUserSubscribersPosts } from "../types/IProfileTypes";
import { token } from "../../../axios/createAxios";
import Loader from "../../Custom/Loader";
import { LoaderIs } from "../../../App";
import { IUserFriend } from "../../../redux/reducers/types/messageTypes";



const ProfileMain: React.FC = () => {
    const [data, setData] = useState<IFriendDataArray>({
        friends: []
    });

    const [dataSource, setDataSource] = useState<Array<IGetGroup>>([]);
    const [groupPosts, setGroupPosts] = useState<Array<IUserSubscribersPosts>>([])

    const user = typedSelector(x => x.user);

    const [userDataCount, setUserDataCount] = useState<IUserDataCount>();

    const { load, setLoad } = useContext(LoaderIs)

    const setUserData = async () => {
        setLoad(true);

        let res = (await axiosService.getUserData()).data;

        let groups: Array<IGetGroup> = (await axiosService.getAllUserGroups(
            user.id
        )).data;

        let friends = (await axiosService.getFriends()).data;


        let formedFriends = formFriends(friends);
        let friendsObj: IFriendDataArray = {
            friends: formedFriends

        };

        let groupPosts = (await axiosService.getPostsByUserSubscribers()).data;

        setGroupPosts(groupPosts);
        setData(friendsObj);
        setDataSource(groups
        );
        setUserDataCount(res);
        setLoad(false);


    }

    const formFriends = (friends: Array<IUserFriend>) => {
        return friends.map((item) => {
            let friendData: IFriendData = {
                name: item.firstName + " " + item.secondName,
                description: item.email,
                image: defaultImage + item.image
            }
            return friendData;
        })
    }

    const [userData, setUserDataState] = useState<GetUserInfo | null>(null);
    const location = useLocation();

    const getUserInfo = async (email: string) => {
        try {

            let data = (await axiosService.getUserInfoByEmail(email)).data;

            setUserDataState(data);
        } catch (ex) {
            console.log("Користувача не існує!");
        }
    }

    const setEmptyProfile = () => {
        setUserDataState(null);
        setUserData();
    }

    useEffect(() => {

        let profileLink = document.querySelectorAll("ul.nav-list>li>a[href='/profile']")[0];

        profileLink.addEventListener("click", setEmptyProfile);

        let search = location.search.substring(1);
        let params = search.split("=") as Array<string>;


        if (params[0] === 'user' && params[1] != undefined && params[1] != '') {
            let email = params[1];
            getUserInfo(email);
        }
        else {

            setUserData();
        }

        return () => {
            profileLink.removeEventListener("click", setEmptyProfile);
        };
    }, []);



    return (<>

        <Row>
            <Col md={24} xs={24} className="navbar-small">

                <PhoneNavbar />
            </Col>
            <Col md={22} offset={1}
                lg={13} xs={22}>
                <div className="post-container-block">
                    {userData == null && groupPosts && groupPosts.map((element) => {
                        return (<PostContainer key={"postIndexItem" + element.id} {...element} />);
                    })}
                    {userData == null && groupPosts && groupPosts.length == 0 &&
                        <h3>У вас поки що немає публікацій...</h3>}


                    {userData != null && userData.posts && userData.posts.map((element) => {
                        return (<PostContainer key={"postIndexItemUser" + element.id} {...element} />);
                    })}
                </div>
            </Col>
            <Col md={0}
                lg={0} xs={1}></Col>
            <Col md={22}
                lg={9} xs={22}>
                <div className="parent-element">
                    <div className="content-body">

                        <Card isFriend={userData != null} name={userData == null ? user.firstName + " " + user.secondName : userData.fullName}
                            stage={userData == null ? user.email : userData.email}
                            postsCount={userData == null ? (userDataCount ? userDataCount.postsCount : 0) : userData.postsCount}
                            groupsCount={userData == null ? (userDataCount ? userDataCount.groupsCount : 0) : userData.groupsCount}
                            friendsCount={userData == null ? (userDataCount ? userDataCount.friendsCount : 0) : userData.friendsCount}
                            image={userData == null ? (defaultImage + user.image) : defaultImage + userData.image} />


                        <FriendsCard friends={userData == null ? data.friends : formFriends(userData.friends)} />

                        <div className="groups-block">
                            <h3>Мої групи</h3>
                            <List
                                itemLayout="horizontal"
                                dataSource={userData == null ? dataSource : userData.groups}
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
                                    {userData == null &&
                                        <List.Item key="lastItem">
                                            <Link to="/profile/createGroup" className="link-in-block">Створити групу</Link>

                                            {/* <Link to="/profile/createPost" className="link-in-block">Створити пост</Link> */}


                                        </List.Item>
                                    }
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