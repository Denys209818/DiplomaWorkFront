import "./../styles/postStyles.css";
import { Link } from "react-router-dom";

const PostContainer : React.FC = () => {
    return (<>
        <div className="post-container">
                        <div className="user-profile">
                            <img src="https://i.pinimg.com/originals/b8/59/bd/b859bd54eeb0a7e25869d4726fde8fdb.jpg" alt="No Avatar" />

                            <div>
                                <p>John Nockson</p>
                                <span>June 24 2022, 12:40 pm</span>
                            </div>
                        </div>
                        <p className="post-text">Subscribe <span>Chanel</span> to watch more videos on website
                            development and designs. <Link to="#">#MyChanel</Link></p>

                        <img src="/images/post1.jpg" alt="Np image" className="post-img" />

                        <div className="post-row">
                            <div className="activity-icons">
                                <div>
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    <span>120</span>
                                </div>
                                <div>
                                    <i className="fa fa-comments-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="post-profile-icon">
                                <span><b>Yeahn Stoltenberg</b></span>
                                <img src="https://i.pinimg.com/originals/b8/59/bd/b859bd54eeb0a7e25869d4726fde8fdb.jpg" alt="Profile Icon" />


                            </div>
                        </div>
                    </div>
    </>);
}

export default PostContainer;