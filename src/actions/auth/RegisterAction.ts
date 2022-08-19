import { Dispatch } from "react";
import { IUser, IUserTypes, RegisterUserAction, ServerUser } from "../../redux/reducers/types/userTypes";
import axiosService from "../../axios/axiosService";
import { ILoginModel, IRegisterModel } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";

export const RegisterAction = (data: IRegisterModel) => async (dispatch: Dispatch<RegisterUserAction>) => {

    try {
        var res = await axiosService.register(data);
        var token = res.data.token;
        
        let resultServer = jwt_decode<ServerUser>(token);
        let user : IUser = {
            firstName: resultServer.firstName,
            secondName: resultServer.secondName,
            phone: resultServer.phone,
            email: resultServer.email,
            id: resultServer.id,
            image: resultServer.image
        };

        dispatch({
            type: IUserTypes.REGISTER_USER,
            payload: user
        });
    }
    catch
    {
        console.log("error");
    }
}