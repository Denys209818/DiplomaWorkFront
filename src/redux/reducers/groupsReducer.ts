import { IGroup } from "../../components/Default/Groups/types/groupTypes";
import { GroupActions, GROUP_TYPES, IGroupShort } from "./types/groupsTypes";


const initialState: Array<IGroup> = [];

const groupReducer = (state = initialState, action: GroupActions) => {
    switch(action.type) {
        case GROUP_TYPES.SET_GROUPS: {
            return action.payload;
        }
        case GROUP_TYPES.ADD_GROUP: {
            return [...state, action.payload]
        }
        default: {
            return state;
        }
    }
}

export default groupReducer;