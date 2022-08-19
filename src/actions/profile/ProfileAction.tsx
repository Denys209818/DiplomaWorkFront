import axios, {AxiosError} from "axios";
import { Dispatch } from "react";
import { useCookies } from "react-cookie";
import axiosService from "../../axios/axiosService";
import { IEditImage, IUserFull } from "../../components/Profile/Edit/types/UserTypes";
import { useActions } from "../auth/UseActions";
import { ErrorProfileServer } from "./types/profileError";


export const ProfileAction = (edit: IUserFull) => async (dispatch: Dispatch<any>) => {
    try {
        var res = (await axiosService.editUser(edit)).data;

        await localStorage.setItem("token", res);
        
        
        return Promise.resolve();
    }
    catch(ex) {
        if (axios.isAxiosError(ex)) {
            let err = ex as AxiosError;
            let errors: ErrorProfileServer = err.response?.data as ErrorProfileServer;
            return Promise.reject(errors.errors);
        }
    }
}

export const ChangeImage = (image: IEditImage) => async (dispatch: Dispatch<any>)=> {
    try {
        var res = (await axiosService.editImage(image)).data;

        await localStorage.setItem("token", res);
        
        
        return Promise.resolve();
    }
    catch(ex) {
        if (axios.isAxiosError(ex)) {
            let err = ex as AxiosError;
            let errors: ErrorProfileServer = err.response?.data as ErrorProfileServer;
            return Promise.reject(errors.errors);
        }
    }
}