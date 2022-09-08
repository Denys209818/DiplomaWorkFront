import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { FRIEND_TYPES, IFriend, RequestFriendId, SetFriend } from "../../redux/reducers/types/friendTypes";

export const SetFriendAction = (id: RequestFriendId) => async (dispatch: Dispatch<SetFriend>) => {
    let res: Array<IFriend> = (await axiosService.getFriends(id)).data;

    dispatch({
        type: FRIEND_TYPES.SET_FRIEND,
        payload: res
    });
}