import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import * as ProfileActions from "./ProfileAction"


export const useProfileAction = () => {
    var dispatch = useDispatch();
    const actions = {...ProfileActions};
    return bindActionCreators(actions, dispatch);
}

 