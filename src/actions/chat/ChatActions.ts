import { Dispatch } from "redux";
import axiosService from "../../axios/axiosService";
import { IAddMessage, ICreateMessage, IFriendMessageRedux, IMessageRedux, ISetMessages, MESSAGE_TYPES } from "../../redux/reducers/types/messageTypes";


export const AddMessage = (message: ICreateMessage, userImage: string) => 
async (dispatch: Dispatch<IAddMessage>) => {
    // console.log("awdaw");
    // await axiosService.addMessage(message);

    dispatch({
        type: MESSAGE_TYPES.ADD_MESSAGE,
        payload: {
            text: message.message,
            date: message.dateCreated,
            image: userImage
        }
    });
}

export const SetMessages = (groupId: number) => 
async (dispatch: Dispatch<ISetMessages>) => {

    let messages: Array<IMessageRedux> = []; 
    (await axiosService.getMessages(groupId)).data.forEach((element) => {
        messages.push({
            text: element.text,
            image: element.image,
            date: new Date(element.date)
        });
    });

    dispatch({
        type: MESSAGE_TYPES.SET_MESSAGES,
        payload: messages
    });
}


export const SetMessagesWithoutRequest = (messages: Array<IMessageRedux>) => 
async (dispatch: Dispatch<ISetMessages>) => {
    dispatch({
        type: MESSAGE_TYPES.SET_MESSAGES,
        payload: messages
    });
} 


export const CreateMessageFriend = (message: IFriendMessageRedux) =>
async (dispatch: Dispatch<IAddMessage>) =>  {

    await axiosService.addFriendMessage({
        message: message.text,
        date: message.date,
        chatId: Number.parseInt(message.chatId.substring(10)),
        fullName: message.fullName,
        image: message.image
    });

    dispatch({
        type: MESSAGE_TYPES.ADD_MESSAGE,
        payload: {
            text: message.text,
            date: new Date(message.date),
            image: message.image,
            userId: message.userId
        }
    });
}
