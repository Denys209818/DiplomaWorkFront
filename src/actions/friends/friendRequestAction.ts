import { Dispatch } from "react";
import { DataType } from "../../components/Profile/SearchFriends/types";
import { AddFriendsRequest, ClearFriendsRequest, FRREQUEST_TYPES, SetFriendsRequest } from "../../redux/reducers/types/friendRequest";


export const SetFriendsOnRequest=(friends: Array<DataType>)  => async (dispatch: Dispatch<SetFriendsRequest>) => 
{
    dispatch({
        type: FRREQUEST_TYPES.SET_FRIENDS_REQUEST,
        payload: friends
    });
}

export const AddFriendOnRequest = (item: DataType) => async (dispatch: Dispatch<AddFriendsRequest>) => {
    dispatch({
        type: FRREQUEST_TYPES.ADD_FRIENDS_REQUEST,
        payload: item
    });
}

export const ClearFriendsOnRequest = () => async (dispatch: Dispatch<ClearFriendsRequest>) =>  
{
    dispatch({
        type: FRREQUEST_TYPES.CLEAR_FRIENDS_REQUEST
    });
}