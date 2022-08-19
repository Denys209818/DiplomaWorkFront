import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootReducer } from "../reducers/rootReducer";


export const typedSelector : TypedUseSelectorHook <RootReducer> = useSelector;