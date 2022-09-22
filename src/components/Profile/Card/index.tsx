import { userInfo } from "os";
import { useNavigate } from "react-router-dom";
import "./../styles/cardStyles.css";

interface ICardInfo {
    name: String,
    stage: String,
    groupsCount: Number,
    friendsCount: Number,
    postsCount: Number,
    image: string,
    isFriend: boolean
}

const Card: React.FC<ICardInfo> = ({name, stage, groupsCount, friendsCount, postsCount,image, isFriend}) => {

    const navigate = useNavigate();
    const onClickFriends = () => {
        navigate("/profile/searchFriends");
    }

    const onClickCreatePost = () => {
        navigate("/profile/createPost");
    }


    return (<>
        <div className="card">
            <div className="imgBx">
                <img src={image} alt="" />
            </div>

            <div className="content">
                <div className="details">
                    <h2>{name} <br /> <span>{stage}</span></h2>

                    <div className="data">
                        <h3> {groupsCount.toString()} <br /> <span>Груп</span></h3>
                        <h3> {friendsCount.toString()} <br /> <span>Друзів</span></h3>
                        <h3> {postsCount.toString()} <br /> <span>Постів</span></h3>
                    </div>

                    <div className="actionBtn">
                        {!isFriend ?<>
                        <button onClick={onClickFriends}>Додати друзів</button>
                        <button onClick={onClickCreatePost}>Створити пост</button>
                        </> 
                    : <><br/><br/></>}
                       
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Card;