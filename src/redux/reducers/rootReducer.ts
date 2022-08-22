import { combineReducers } from "redux";
import groupReducer from "./groupsReducer";
import userReducer from "./userReducer";



export const rootReducer = combineReducers({
    user: userReducer,
    groups: groupReducer
});

export type RootReducer = ReturnType<typeof rootReducer>