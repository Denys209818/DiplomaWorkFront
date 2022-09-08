import { IUser, IUserTypes, UserActions } from "./types/userTypes"


const initialState: IUser = 
{
    firstName: '',
    secondName:'',
    phone:'',
    email:'',
    id: 0,
    image: ''
}

const userReducer = (state = initialState, action: UserActions) => {
    switch(action.type) {
        case IUserTypes.LOGIN_USER: {

            return action.payload;
        }
        case IUserTypes.REGISTER_USER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default userReducer;