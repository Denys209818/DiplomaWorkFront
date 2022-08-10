import { IUser, IUserTypes, LoginUserAction, ServerUser } from "../../redux/reducers/types/userTypes";
import {Dispatch} from "react";
import axiosService from "../../axios/axiosService";
import { ILoginModel } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";


export const LoginAction = (data: ILoginModel) => async (dispatch: Dispatch<LoginUserAction>) => 
{
    try {
        var res = await axiosService.login(data);
        var token = res.data.token;

        let resultServer =  jwt_decode<ServerUser>(token);
        var user: IUser = {
            firstName: resultServer.firstName,
            secondName: resultServer.secondName,
            phone: resultServer.phone,
            email:resultServer.email,
            id: resultServer.id,
            image: resultServer.image
        }
        dispatch({
            type: IUserTypes.LOGIN_USER,
            payload: user
        });
    }
    catch
    {
        console.log("Error in LoginAction line 20");
    }
}