
export interface IContactCard {
    image: string,
    name: string,
    id: Number,
    onClickChatGroup: (groupId: Number) => void
}



const ContactCard: React.FC<IContactCard> = ({image, name, id, onClickChatGroup}) => {

    const onClickDivHandler = () => {
        onClickChatGroup(id);
    }


    return(<>
        <div className='d-flex bd-highlight cardContact'
        onClick={onClickDivHandler}
        >
            <div className='img_cont'>
                <img src={image} className='rounded-circle user_img' />
            </div>
            <div className='user_info'>
                <span>{name}</span>
            </div>
        </div> 
    </>);
}

export default ContactCard;