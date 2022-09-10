import { IUser, IUserTypes,  ServerUser } from "../../redux/reducers/types/userTypes";
import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { Errors, ErrorServer, ILoginModel, IRegisterModel } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";
import axios, {  AxiosError } from "axios";
import { SetGroups } from "../profile/ProfileAction";
import { Token } from "@mui/icons-material";

export const RegisterAction = (data: IRegisterModel) => async (dispatch: Dispatch<any>) => {

    try {
        let res = await axiosService.register(data);
        var token = res.data.token;
        await localStorage.setItem("token", token);
        let user = getUser(token);
        dispatch ({
            type: IUserTypes.REGISTER_USER,
            payload: user
        });
    } catch(ex) {
        if(axios.isAxiosError(ex)) {
            let err = ex as AxiosError;
            let errors: ErrorServer = err.response?.data as ErrorServer;
            let errs: Errors = errors.errors;

            return Promise.reject(errs);
        }
    }
}

const getUser = (token: string) : IUser => {
    let resultServer = jwt_decode<ServerUser>(token);
    var user: IUser = {
        firstName: resultServer.firstName,
        secondName: resultServer.secondName,
        email: resultServer.email,
        phone: resultServer.phone,
        id: resultServer.id,
        image: resultServer.image
    }
    return user;
}

export default RegisterAction;


