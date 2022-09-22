import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { IUserDataCount } from "../../../actions/types/AuthTypes";
import axiosService from "../../../axios/axiosService";
import { defaultImage } from "../../../constants/defaultConsts";
import { typedSelector } from "../../../redux/services/useTypedSelector";
import Card from "../Card";
import PostContainer from "../PostContainer";
import { IUserSubscribersPosts } from "../types/IProfileTypes";
import "./styles/style.css";


const ProfileFriends: React.FC = () => {

    const [groupPosts, setGroupPosts] = useState<Array<IUserSubscribersPosts>>([]);
    const user = typedSelector(user => user.user);

    const [userDataCount, setUserDataCount] = useState<IUserDataCount>();

    const setUserData = async () => {
        let res = (await axiosService.getUserData()).data;

        let groupPosts = (await axiosService.getPostsByUserSubscribers()).data;


        setGroupPosts(groupPosts);

        setUserDataCount(res);


    }
    useEffect(() => {
        setUserData();


        
    },[]);

    return (<div className="profile-card-wrapper">
        <Row id="profileCardRow">
            <Col lg={8} md={24}>

                <div className="card-content">
                    {/* <Card name={user.firstName + " " + user.secondName } stage={user.email}
                        postsCount={userDataCount ? userDataCount.postsCount : 0} 
                        groupsCount={userDataCount ? userDataCount.groupsCount : 0} 
                        friendsCount={userDataCount ? userDataCount.friendsCount : 0} image={defaultImage + user.image} /> */}
                </div>
            </Col>
            <Col lg={16} md={24}>
                <div className="card-posts">
                    <div className="card-post-inner">
                        
                        {groupPosts && groupPosts.map((element)=> {
                            return ( <PostContainer {...element} />)
                        })}

                    </div>
                </div>

            </Col>
        </Row>
    </div>);
}

export default ProfileFriends;