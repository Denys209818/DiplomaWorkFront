
import { legacy_createStore as createStore, applyMiddleware, AnyAction} from 'redux'
import thunk, { ThunkDispatch } from "redux-thunk";
import { RootReducer, rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from 'react-redux';

import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";


var middleware = [thunk];

export const store = createStore(rootReducer, {}, 
    composeWithDevTools(applyMiddleware(...middleware)));