import { FriendActions, FRIEND_TYPES, IFriend } from "./types/friendTypes";


const initialState: Array<IFriend> = [];

const friendReducer = (state = initialState, action: FriendActions) => {
    switch(action.type) {
        case FRIEND_TYPES.SET_FRIEND: {
            return action.payload;
        }
        case FRIEND_TYPES.ADD_FRIEND: {
            return [...state, action.payload];
        }
        case FRIEND_TYPES.DEL_FRIEND: {
            return [...state, action.payload];
        }
        case FRIEND_TYPES.SEARCH_FRIEND:{
            return [...state];
        }
        default: {
            return state;
        }
    }
}

export default friendReducer;