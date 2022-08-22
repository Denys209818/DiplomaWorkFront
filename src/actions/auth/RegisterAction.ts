import { Dispatch } from "react";
import { IUser, IUserTypes, RegisterUserAction } from "../../redux/reducers/types/userTypes";


export const RegisterAction = () => async (dispatch: Dispatch<RegisterUserAction>) => {



        let user: IUser = {
            firstName: 'firstName',
            secondName: 'secondName',
            phone: 'phone',
            email: 'email',
            id: 0,
            image: ''
        };

        dispatch({
            type: IUserTypes.REGISTER_USER,
            payload: user
        });


}


    export default RegisterAction;
