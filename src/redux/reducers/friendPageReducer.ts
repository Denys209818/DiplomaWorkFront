import { DataType } from "../../components/Profile/SearchFriends/types"
import { FriendPageTypes, FRPAGE_TYPES } from "./types/friendPageTypes";


var initialState: Array<DataType> = [];

export const friendPageReducer = (state= initialState, action: FriendPageTypes) => {

    switch(action.type){
        case FRPAGE_TYPES.SET_FRIENDS: {
            return [...action.payload]
        }
        case FRPAGE_TYPES.CLEAR_FRIENDS: {
            return [];
        }
        case FRPAGE_TYPES.ADD_FRIEND: {
            return [...state, action.payload];
        }
        default: {
            return [...state];
        }
    }

}

