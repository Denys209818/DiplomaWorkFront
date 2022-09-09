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
            return state;
        }
        case IUserTypes.CLEAR_USER: {
            return {firstName: '',
            secondName:'',
            phone:'',
            email:'',
            id: 0,
            image: ''};
        }
        default: {
            return state;
        }
    }
}

export default userReducer;