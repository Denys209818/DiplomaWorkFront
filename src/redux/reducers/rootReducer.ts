import { combineReducers } from "redux";
import groupReducer from "./groupsReducer";
import imageReducer from "./imageReducer";
import messageReducer from "./messageReducer";
import { postReducer } from "./postReducer";
import userReducer from "./userReducer";



export const rootReducer = combineReducers({
    user: userReducer,
    groups: groupReducer,
    images: imageReducer,
    posts: postReducer,
    messages: messageReducer
});

export type RootReducer = ReturnType<typeof rootReducer>