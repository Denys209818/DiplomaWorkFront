import { legacy_createStore as createStore, applyMiddleware, AnyAction} from 'redux'
import thunk, { ThunkDispatch } from "redux-thunk";
import { RootReducer, rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from 'react-redux';

var middleware = [thunk];

export const store = createStore(rootReducer, {}, 
    composeWithDevTools(applyMiddleware(...middleware)));