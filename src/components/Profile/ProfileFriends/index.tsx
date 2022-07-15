import { Col, Row } from "antd";
import Card from "../Card";
import PostContainer from "../PostContainer";
import "./styles/style.css";


const ProfileFriends: React.FC = () => {
    return (<div className="profile-card-wrapper">
        <Row id="profileCardRow">
            <Col lg={8} md={24}>

                <div className="card-content">
                    <Card name="John" stage="Web Designer"
                        posts={100} following={56} follows={45} />
                </div>
            </Col>
            <Col lg={16} md={24}>
                <div className="card-posts">
                    <div className="card-post-inner">
                        
                        <PostContainer />
                        <PostContainer />
                        <PostContainer />

                    </div>
                </div>

            </Col>
        </Row>
    </div>);
}

export default ProfileFriends;