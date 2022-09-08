import classnames from "classnames";
import { useEffect } from "react";
import { IChatMessage } from "../types/chatTypes";


const ChatMessage: React.FC<IChatMessage> = ({text, date, image, isLeft}) => {

    return (<>
    {/* className='d-flex justify-content-end mb-4' */}
    {/* className='msg_cotainer_send' */}
        <div  className={classnames("d-flex", "mb-4", {"justify-content-start": isLeft},
        {"justify-content-end": !isLeft})}>
            {isLeft && 
            <div className='img_cont_msg'>
                <img src={image} className='rounded-circle user_img_msg' />
            </div>}
            <div className={classnames({"msg_cotainer_send": !isLeft}, {"msg_cotainer": isLeft})}>
                {text}
            <span className='msg_time_send'>{date}</span>
            </div>
            {!isLeft && 
            <div className='img_cont_msg'>
                <img src={image} className='rounded-circle user_img_msg' />
            </div>
            }
        </div>
    </>);
}

export default ChatMessage;