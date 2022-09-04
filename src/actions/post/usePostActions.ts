import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as postActions from './postActions';


export const usePostActions = () => {
    let dispatch = useDispatch();
    const actions = {...postActions};
    return bindActionCreators(actions, dispatch);
}