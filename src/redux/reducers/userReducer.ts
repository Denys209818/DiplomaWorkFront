import { IUser, IUserTypes, UserActions } from "./types/userTypes"


const initialState: IUser = 
{
    firstName: '',
    secondName:'',
    phone:'',
    email:'',
    id: 0
};

const userReducer = (state = initialState, action: UserActions) => {
    switch(action.type) {
        case IUserTypes.LOGIN_USER: {
            return state;
        }
        case IUserTypes.REGISTER_USER: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default userReducer;