import { combineReducers } from "redux";
import groupReducer from "./groupsReducer";
import imageReducer from "./imageReducer";
import userReducer from "./userReducer";



export const rootReducer = combineReducers({
    user: userReducer,
    groups: groupReducer,
    images: imageReducer
});

export type RootReducer = ReturnType<typeof rootReducer>