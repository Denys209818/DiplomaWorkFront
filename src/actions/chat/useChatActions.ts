import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatActions from './ChatActions';


export const useChatActions = () => {
    var dispatch = useDispatch();
    let actions = {...ChatActions};
    return bindActionCreators(actions, dispatch);
}