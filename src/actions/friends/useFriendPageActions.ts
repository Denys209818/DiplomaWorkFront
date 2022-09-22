import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as FriendPageActions from './friendPageAction';
import * as FriendRequestActions from './friendRequestAction';


export const useFriendPageActions = () => {
    let dispatch = useDispatch();
    const actions = {...FriendPageActions, ...FriendRequestActions};

    return bindActionCreators(actions, dispatch);
}