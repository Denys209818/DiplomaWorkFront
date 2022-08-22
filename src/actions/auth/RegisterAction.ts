import { Dispatch } from "react";
import { IUser, IUserTypes, RegisterUserAction } from "../../redux/reducers/types/userTypes";


<<<<<<< HEAD
export const RegisterAction = () => async (dispatch: Dispatch<RegisterUserAction>) => {
=======

export const RegisterAction = () => async (dispatch: Dispatch<RegisterUserAction>) => {

const RegisterAction = () => async (dispatch: Dispatch<RegisterUserAction>) => {
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
let user : IUser = {
    firstName: 'firstName',
    secondName: 'secondName',
    phone: 'phone',
    email: 'email',
    id: 0,
    image: ''
<<<<<<< HEAD
=======
    id: 0
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
};

    dispatch({
        type: IUserTypes.REGISTER_USER,
        payload: user
    });
<<<<<<< HEAD
}
=======
}
}

export default RegisterAction;
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
