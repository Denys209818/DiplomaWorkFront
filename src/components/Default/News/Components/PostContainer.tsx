import { defaultImage } from "../../../../constants/defaultConsts";

interface IPostContainer {
    image: string,
    groupName: string,
    title: string,
    date: Date,
    description: string,
    groupImage: string,
    likes: number
}

const PostContainer: React.FC<IPostContainer> = ({image, groupImage, title,groupName,date,description,likes}) => {
    let dateCreated = new Date(date);
    return (<div className="post-box">

        {image && 
            <img src={defaultImage + "Post/" +image} alt="" className='post-img'></img>
        }
        {/* <h2 className="category">{likes} вподобайок</h2> */}
        <a href="post-page.html" className="post-title">
            {title}
        </a>
        <span className="post-date">{dateCreated.getFullYear()+ "-" + dateCreated.getMonth() + "-" + 
        dateCreated.getDay()}</span>
        <div className="post-decription" dangerouslySetInnerHTML={{
            __html: description
        }}></div>
        <div className="profile">
            <img src={defaultImage + "Group/" + groupImage} alt="" className="profile-img"></img>
            <span className="profile-name">{groupName}</span>
        </div>
    </div>);
}

export default PostContainer;