import { Dispatch } from "react";
import axiosService from "../../axios/axiosService";
import { IPublication } from "../../redux/reducers/types/groupsTypes";
import { DelPost, IClearPosts, POST_TYPES, SetPost } from "../../redux/reducers/types/postTypes";


export const SetPosts =(groupId: Number) => async (dispatch: Dispatch<SetPost>) =>  
{
    let dataOne = (await axiosService.getAllPublicationsByGroupId(groupId)).data ;
    
    dispatch({
        type: POST_TYPES.SET_POSTS,
        payload: dataOne
    });
}

export const DelPosts = (posts: Array<IPublication>, postId: Number) => async (dispatch: Dispatch<SetPost | IClearPosts>) => {
    let res = await axiosService.deletePublication(postId);
    let newPosts = posts.filter(x => x.id != postId);

    await dispatch({
        type: POST_TYPES.CLEAR_POSTS
    });
    await dispatch({
        type: POST_TYPES.SET_POSTS,
        payload: newPosts
    })
}

export const ClearPost = () => async (dispatch: Dispatch<SetPost>) => {
    dispatch({
        type: POST_TYPES.SET_POSTS,
        payload: []
    });
}