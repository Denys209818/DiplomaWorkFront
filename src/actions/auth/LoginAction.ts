import { IUser, IUserTypes,  ServerUser } from "../../redux/reducers/types/userTypes";
import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { Errors, ErrorServer, ILoginModel } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";
import axios, {  AxiosError } from "axios";
<<<<<<< HEAD
import { SetGroups } from "../profile/ProfileAction";
import { useProfileAction } from "../profile/useProfileActions";

=======
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8


export const LoginAction = (data: ILoginModel) => async (dispatch: Dispatch<any>) => {
        
    try{
        let res = await axiosService.login(data);
            var token = res.data.token;
            await localStorage.setItem("token", token);
            let user = getUser(token);
            dispatch({
                type: IUserTypes.LOGIN_USER,
                payload: user
            });
            return Promise.resolve();
    }catch(ex) {
        if (axios.isAxiosError(ex)) {
            let err = ex as AxiosError;
            let errors: ErrorServer = err.response?.data as ErrorServer;
            let errs: Errors = errors.errors;
            
            return Promise.reject(errs);
        }
    }
};


export const AuthUserWithToken = (token: string) => async (dispatch: Dispatch<any>) => {
    var user: IUser =getUser(token);
<<<<<<< HEAD
    await dispatch(SetGroups({ 
        id: user.id
    }));
=======
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

>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
    dispatch({
        type: IUserTypes.LOGIN_USER,
        payload: user
    });
} 


const getUser = (token: string) : IUser => {
    let resultServer = jwt_decode<ServerUser>(token);
    var user: IUser = {
        firstName: resultServer.firstName,
        secondName: resultServer.secondName,
        phone: resultServer.phone,
        email: resultServer.email,
        id: resultServer.id,
        image: resultServer.image
    }

    return user;
<<<<<<< HEAD
}
=======
}
}

export default LoginAction;
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
