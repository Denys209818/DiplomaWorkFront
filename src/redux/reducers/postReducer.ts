import { IPublication } from "./types/groupsTypes";
import { PostActions, POST_TYPES } from "./types/postTypes";

let initialState: Array<IPublication>=[];

export const postReducer = (state = initialState, action: PostActions) => 
{
   switch(action.type) {
    case POST_TYPES.SET_POSTS: {
        return action.payload;
    }
    case POST_TYPES.DELETE_POST: {
        let id = action.payload;
        return [...(state.filter(x => x.id != id))]
    }
    case POST_TYPES.CLEAR_POSTS: {
        return [];
    }
    default: {
        return state;
    }
   }
}