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
        case GROUP_TYPES.EDIT_GROUP: {
            let payload = action.payload;
            let group = state.filter(x => x.id == payload.id)[0];
            group.title = payload.title;
            group.description= payload.description;
            group.meta = payload.meta;
            group.image = payload.image;
            group.tags = payload.tags;


            return [...state.filter(x => x.id != payload.id), group];
        }
        case GROUP_TYPES.DELETE_GROUP: {
            return [...state.filter(x => x.id != action.payload)]
        }
        case GROUP_TYPES.CLEAR_GROUPS: {
            return [];
        }
        default: {
            return state;
        }
    }
}

export default groupReducer;