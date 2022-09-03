import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import {DeleteGroup, GROUP_TYPES} from "../../redux/reducers/types/groupsTypes";

export const DeleteGroupAction =  (groupId: number) => 
async (dispatch: Dispatch<DeleteGroup>) => {
    
    await DeleteGroupRedux(groupId);

    let res = await axiosService.deleteGroup({
        groupId: groupId
    });
}


export const DeleteGroupRedux = (groupId: number) => async (dispatch: Dispatch<DeleteGroup>) => {
    dispatch({
        type: GROUP_TYPES.DELETE_GROUP,
        payload:groupId
    });
}

export const DeleteUserGroup = (groupId: number, userId: number) => 
async (dispatch: Dispatch<any>) => {
    let res = await axiosService.deleteUserGroup({
        groupId: groupId,
        userId: userId
    });
}