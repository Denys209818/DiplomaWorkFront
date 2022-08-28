import { IUser, IUserTypes,  ServerUser } from "../../redux/reducers/types/userTypes";
import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { Errors, ErrorServer, ILoginModel } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";
import axios, {  AxiosError } from "axios";
import { SetGroups } from "../profile/ProfileAction";
import { useProfileAction } from "../profile/useProfileActions";



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

    await dispatch({
        type: IUserTypes.LOGIN_USER,
        payload: user
    });

    await dispatch(SetGroups({ 
        id: user.id
    }));
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
}

export default LoginAction;
