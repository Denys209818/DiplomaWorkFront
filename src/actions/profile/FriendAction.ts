import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { AddFriend, DelFriend, FRIEND_TYPES, IFriendData, RequestFriendId, SetFriend } from "../../redux/reducers/types/friendTypes";

export const SetFriendAction = (id: RequestFriendId) => async (dispatch: Dispatch<SetFriend>) => {
    let res: Array<IFriendData> = (await axiosService.getFriend(id)).data;

    dispatch({
        type: FRIEND_TYPES.SET_FRIEND,
        payload: res
    });
}

export const AddFriendAction = (friendId: number) => async (dispatch: Dispatch<AddFriend>) => {
    let res = await axiosService.addFriend({friendId: friendId});
        
    dispatch ({
        type: FRIEND_TYPES.ADD_FRIEND,
        payload: friendId
    });
}

export const DeleteFriendAction = (friendId: number) => async (dispatch: Dispatch<DelFriend>) => {
    let res = await axiosService.deleteFriend({friendId: friendId});

    dispatch ({
        type: FRIEND_TYPES.DEL_FRIEND,
        payload: friendId
    });
}