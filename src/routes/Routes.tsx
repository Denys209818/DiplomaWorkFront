import React from "react";
import { RouteObjectType } from "./types";

const Main = React.lazy(() => import("../components/Default/Main/Main"));
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const Register = React.lazy(() => import("../components/Auth/Register/Register"));
const News = React.lazy(() => import("../components/Default/News/Blog"));
const Groups = React.lazy(() => import("../components/Default/Groups"));
const Chat = React.lazy(() => import("../components/Default/Chat"));


const ProfileMain = React.lazy(() => import("../components/Profile/Main"));
const CreateGroup = React.lazy(() => import("../components/Profile/CreateGroup"));
const SearchFriends = React.lazy(() => import("../components/Profile/SearchFriends"));
const CreatePost = React.lazy(() => import("../components/Profile/CreatePost"));
const ProfileFriends = React.lazy(() => import("../components/Profile/ProfileFriends"));
const Edit = React.lazy(() => import("../components/Profile/Edit"));



export const DefaultRoutes : Array<RouteObjectType>  = 
[
    {path: '/groups', element:Groups},
    {path: '/news', element:News },
    {path: '/chat', element:Chat },
    {path: '/', element: Main}
];

export const LoginRoutes : Array<RouteObjectType> = [
    {path: '/auth/login', element: Login},
    {path: '/auth/register', element: Register}
];


export const ProfileRoutes : Array<RouteObjectType> = [
    {path: '/profile/createPost', element: CreatePost},
    {path: '/profile/searchFriends', element: SearchFriends},
    {path: '/profile/createGroup', element: CreateGroup},
    // { path: '/profile/profileFriend', element: ProfileFriends },
    {path: '/profile/edit', element: Edit},
    {path: '/profile', element: ProfileMain}
];

