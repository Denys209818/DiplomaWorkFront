import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import * as ProfileActions from "./ProfileAction";
import * as ImageActions from "./ImageAction";


export const useProfileAction = () => {
    var dispatch = useDispatch();
    const actions = {...ProfileActions, ...ImageActions};
    return bindActionCreators(actions, dispatch);
}

 