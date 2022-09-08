import { IUserContactCard } from "../../../../redux/reducers/types/messageTypes";

const ContactUserCard: React.FC<IUserContactCard> = ({image, title, chatId, onClickUser}) => {
    const onClickedOnThisItem = () => {
        onClickUser(chatId);
    }
    
    return (<>
    <div className='d-flex bd-highlight cardContact'
        onClick={onClickedOnThisItem}
        >
            <div className='img_cont'>
                <img src={image} className='rounded-circle user_img' />
            </div>
            <div className='user_info'>
                <span>{title}</span>
            </div>
        </div> 
    </>);
}

export default ContactUserCard;