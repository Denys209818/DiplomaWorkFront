import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { DelPost, POST_TYPES, SetPost } from "../../redux/reducers/types/postTypes";


export const SetPosts =(groupId: Number) => async (dispatch: Dispatch<SetPost>) =>  
{
    let dataOne = (await axiosService.getAllPublicationsByGroupId(groupId)).data ;
    
    dispatch({
        type: POST_TYPES.SET_POSTS,
        payload: dataOne
    });
}

export const DelPosts = (postId: Number) => async (dispatch: Dispatch<DelPost>) => {
    let res = await axiosService.deletePublication(postId);

    dispatch({
        type: POST_TYPES.DELETE_POST,
        payload: postId
    })
}

export const ClearPost = () => async (dispatch: Dispatch<SetPost>) => {
    dispatch({
        type: POST_TYPES.SET_POSTS,
        payload: []
    });
}