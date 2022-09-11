import "./../styles/postStyles.css";
import { Link } from "react-router-dom";
import { IUserSubscribersPosts } from "../types/IProfileTypes";
import { defaultImage } from "../../../constants/defaultConsts";

const PostContainer : React.FC<IUserSubscribersPosts> = ({id, images, title, description, tags, 
    userEmail, userImage, userName, countLikes, groupImage, groupName}) => {
    return (<>
        <div className="post-container">
                        <div className="user-profile">
                            <img src={defaultImage + "Group/" + groupImage} alt="No Avatar" />

                            <div>
                                <p>{groupName}</p>
                                <span>{title}</span>
                            </div>
                        </div>
                        <div className="post-text" dangerouslySetInnerHTML={{ __html: description }}></div>
                        <Link to="#">{tags}</Link>
                        {images && images[0] &&
                        <img src={defaultImage+ "Post/" +images[0]} alt="Np image" className="post-img" />
                        }

                        <div className="post-row">
                            <div className="activity-icons">
                                <div>
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    <span>{countLikes}</span>
                                </div>
                                
                            </div>
                            <div className="post-profile-icon">
                                <span><b>{userName}</b></span>
                                <img src={defaultImage+userImage} alt="Profile Icon" />


                            </div>
                        </div>
                    </div>
    </>);
}

export default PostContainer;