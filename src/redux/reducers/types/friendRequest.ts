import { DataType } from "../../../components/Profile/SearchFriends/types";



export enum FRREQUEST_TYPES {
    SET_FRIENDS_REQUEST ="SET_FRIENDS_REQUEST",
    CLEAR_FRIENDS_REQUEST="CLEAR_FRIENDS_REQUEST",
    ADD_FRIENDS_REQUEST="ADD_FRIENDS_REQUEST"
}

export interface SetFriendsRequest {
    type: FRREQUEST_TYPES.SET_FRIENDS_REQUEST,
    payload: Array<DataType>
}

export interface AddFriendsRequest {
    type: FRREQUEST_TYPES.ADD_FRIENDS_REQUEST,
    payload: DataType
}

export interface ClearFriendsRequest {
    type: FRREQUEST_TYPES.CLEAR_FRIENDS_REQUEST,
}

export type FriendRequestPageTypes = SetFriendsRequest | ClearFriendsRequest | AddFriendsRequest;