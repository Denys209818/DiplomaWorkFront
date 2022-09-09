import { IPublication } from "./groupsTypes";

export enum POST_TYPES {
    SET_POSTS = "SET_POSTS",
    DELETE_POST="DELETE_POST",
    CLEAR_POSTS ="CLEAR_POSTS"
}


export interface SetPost {
    type: POST_TYPES.SET_POSTS,
    payload: Array<IPublication>
}

export interface DelPost {
    type: POST_TYPES.DELETE_POST,
    payload: Number
}

export interface IClearPosts {
    type: POST_TYPES.CLEAR_POSTS
}

export type PostActions = SetPost | DelPost | IClearPosts;