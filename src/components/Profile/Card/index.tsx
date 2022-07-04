import "./../styles/cardStyles.css";

interface ICardInfo {
    name: String,
    stage: String,
    posts: Number,
    follows: Number,
    following: Number
}

const Card: React.FC<ICardInfo> = ({name, stage, posts, follows, following}) => {
    return (<>
        <div className="card">
            <div className="imgBx">
                <img src="https://i.pinimg.com/originals/bd/94/5b/bd945b1a518afce06a405e69123974d9.jpg" alt="" />
            </div>

            <div className="content">
                <div className="details">
                    <h2>{name} <br /> <span>{stage}</span></h2>

                    <div className="data">
                        <h3> {posts.toString()} <br /> <span>Posts</span></h3>
                        <h3> {follows.toString()} <br /> <span>Followers</span></h3>
                        <h3> {following.toString()} <br /> <span>Following</span></h3>
                    </div>

                    <div className="actionBtn">
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Card;