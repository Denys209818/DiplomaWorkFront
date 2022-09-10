export enum FRIEND_TYPES {
    SET_FRIEND="SET_FRIEND",
    ADD_FRIEND="ADD_FRIEND",
    DEL_FRIEND="DEL_FRIEND",
    SEARCH_FRIEND="SEARCH_FRIEND"
}

export interface IFriendData {
    id: number,
    firstName: string,
    secondName: string,
    image: string,
    friendId: number,
    userId: number
}

export interface SetFriend {
    type: FRIEND_TYPES.SET_FRIEND,
    payload: Array<IFriendData>
}

export interface AddFriend {
    type: FRIEND_TYPES.ADD_FRIEND,
    payload: Number
}
   
export interface DelFriend {
   type: FRIEND_TYPES.DEL_FRIEND,
   payload: Number
}
   
export interface SearchFriend {
    [x: string]: any;
    type: FRIEND_TYPES.SEARCH_FRIEND,
}

export type FriendActions = SetFriend | AddFriend | DelFriend | SearchFriend;

export interface RequestFriendId {
    id: number,
    firstName: string,
    secondName: string,
    image: string
}
