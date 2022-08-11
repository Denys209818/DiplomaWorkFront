import { Dispatch } from "react";
import { IUser, IUserTypes, LoginUserAction } from "../../redux/reducers/types/userTypes";


const LoginAction = () => async (dispatch: Dispatch<LoginUserAction>) => {
let user : IUser = {
    firstName: 'firstName',
    secondName: 'secondName',
    phone: 'phone',
    email: 'email',
    id: 0
};

    dispatch({
        type: IUserTypes.LOGIN_USER,
        payload: user
    });
}

export default LoginAction;