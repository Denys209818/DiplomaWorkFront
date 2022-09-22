import { Dispatch } from "react";
import { DataType } from "../../components/Profile/SearchFriends/types";
import { AddFriend, ClearFriends, FRPAGE_TYPES, SetFriends } from "../../redux/reducers/types/friendPageTypes";


export const SetFriendsOnPage =(friends: Array<DataType>)  => async (dispatch: Dispatch<SetFriends>) => 
{
    dispatch({
        type: FRPAGE_TYPES.SET_FRIENDS,
        payload: friends
    });
}

export const AddFriendOnPage =(item: DataType) => async (dispatch: Dispatch<AddFriend>) => {
    dispatch({
        type: FRPAGE_TYPES.ADD_FRIEND,
        payload: item
    });
}

export const ClearFriendsOnPage = () => async (dispatch: Dispatch<ClearFriends>) =>  
{
    dispatch({
        type: FRPAGE_TYPES.CLEAR_FRIENDS
    });
}