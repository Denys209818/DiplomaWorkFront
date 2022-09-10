import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import * as ProfileActions from "./ProfileAction";
import * as ImageActions from "./ImageAction";
import * as FriendActions from "./FriendAction";


export const useProfileAction = () => {
    var dispatch = useDispatch();
    const actions = {...ProfileActions, ...ImageActions, ...FriendActions};
    return bindActionCreators(actions, dispatch);
}

 