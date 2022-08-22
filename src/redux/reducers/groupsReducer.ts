import { GroupActions, GROUP_TYPES, IGroupShort } from "./types/groupsTypes";


const initialState: Array<IGroupShort> = [];

const groupReducer = (state = initialState, action: GroupActions) => {
    switch(action.type) {
        case GROUP_TYPES.SET_GROUPS: {
            return action.payload;
        }default: {
            return state;
        }
    }
}

export default groupReducer;