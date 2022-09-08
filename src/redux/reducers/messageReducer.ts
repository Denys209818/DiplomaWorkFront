import { IMessageRedux, MessageTypes, MESSAGE_TYPES } from "./types/messageTypes";


var initialValues: Array<IMessageRedux> = [];

const messageReducer = (state = initialValues, action: MessageTypes) => {
    switch(action.type) {
        case MESSAGE_TYPES.ADD_MESSAGE: {
            return [...state, action.payload];
        }
        case MESSAGE_TYPES.SET_MESSAGES: {
            return [...action.payload];
        }
        default: {
            return state;
        }
    }
}

export default messageReducer;