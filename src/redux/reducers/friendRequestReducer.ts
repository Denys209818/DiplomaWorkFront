import { DataType } from "../../components/Profile/SearchFriends/types"
import { FriendRequestPageTypes, FRREQUEST_TYPES } from "./types/friendRequest";


var initialState: Array<DataType> = [];

export const friendRequestReducer = (state: Array<DataType>= initialState, action: FriendRequestPageTypes) => {

    switch(action.type){
        case FRREQUEST_TYPES.SET_FRIENDS_REQUEST: {
            
            return [...action.payload]
        }
        case FRREQUEST_TYPES.ADD_FRIENDS_REQUEST: {
            return [...state, action.payload];
        }
        case FRREQUEST_TYPES.CLEAR_FRIENDS_REQUEST: {
            return [];
        }
        default: {
            return [...state];
        }
    }

}
