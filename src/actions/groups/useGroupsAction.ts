import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as GroupActions from "./groupAction";

export const useGroupsAction = () => {
    const dispatch = useDispatch();
    const actions = {...GroupActions};
    return bindActionCreators(actions, dispatch);
}