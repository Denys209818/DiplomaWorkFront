import { combineReducers } from "redux";
import groupReducer from "./groupsReducer";
import imageReducer from "./imageReducer";
import { postReducer } from "./postReducer";
import userReducer from "./userReducer";



export const rootReducer = combineReducers({
    user: userReducer,
    groups: groupReducer,
    images: imageReducer,
    posts: postReducer
});

export type RootReducer = ReturnType<typeof rootReducer>