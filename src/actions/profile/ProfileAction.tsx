import axios, {AxiosError} from "axios";
import { Dispatch } from "react";
import { useCookies } from "react-cookie";
import axiosService from "../../axios/axiosService";
import { IGroupCreate, IGroupErrors, IGroupForm } from "../../components/Profile/CreateGroup/types";
import { IEditImage, IUserFull } from "../../components/Profile/Edit/types/UserTypes";
import { GROUP_TYPES, IGroupShort, RequestGroupById, SetGroupsShort } from "../../redux/reducers/types/groupsTypes";

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

export const CreateGroup = (data: IGroupCreate) => async (dispatch: Dispatch<any>) => {
    try {
        var res = (await axiosService.createGroup(data)).data;
        return Promise.resolve(res);
    }
    catch(ex) {
        if (axios.isAxiosError(ex)) {
            let err = ex as AxiosError;
            let errors = err.response?.data as IGroupErrors;
            return Promise.reject(errors);
        }
    }
}

export const SetGroups = (id: RequestGroupById ) => async (dispatch: Dispatch<SetGroupsShort>) => {
    let res: Array<IGroupShort> = (await axiosService.getGroups(id)).data;
    console.log(res);
    dispatch({
        type: GROUP_TYPES.SET_GROUPS,
        payload: res
    });
}