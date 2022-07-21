import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from './LoginAction';
import * as RegisterActions from './RegisterAction';


export const useActions = () => 
{
    const actions = {...LoginActions, ...RegisterActions};

    
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}

