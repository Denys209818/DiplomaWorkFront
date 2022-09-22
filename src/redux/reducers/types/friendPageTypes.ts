import { DataType } from "../../../components/Profile/SearchFriends/types";



export enum FRPAGE_TYPES {
    SET_FRIENDS ="SET_FRIENDS",
    CLEAR_FRIENDS="CLEAR_FRIENDS",
    ADD_FRIEND="ADD_FRIEND"
}

export interface SetFriends {
    type: FRPAGE_TYPES.SET_FRIENDS,
    payload: Array<DataType>
}

export interface AddFriend {
    type: FRPAGE_TYPES.ADD_FRIEND,
    payload: DataType
}

export interface ClearFriends {
    type: FRPAGE_TYPES.CLEAR_FRIENDS,
}

export type FriendPageTypes = SetFriends | ClearFriends | AddFriend;