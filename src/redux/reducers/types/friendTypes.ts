export enum FRIEND_TYPES {
    SET_FRIEND="SET_FRIEND",
    ADD_FRIEND="ADD_FRIEND",
    DEL_FRIEND="DEL_FRIEND",
    SEARCH_FRIEND="SEARCH_FRIEND"
}

export interface IFriend {
    id: number
}

export interface SetFriend {
    type: FRIEND_TYPES.SET_FRIEND,
    payload: Array<IFriend>
}

export interface AddFriend {
    type: FRIEND_TYPES.ADD_FRIEND,
    payload: string
}
   
export interface DelFriend {
   type: FRIEND_TYPES.DEL_FRIEND,
   payload: string
}
   
export interface SearchFriend {
    type: FRIEND_TYPES.SEARCH_FRIEND,
}

export type FriendActions = SetFriend | AddFriend | DelFriend | SearchFriend;

export interface RequestFriendId {
    id: number
}
