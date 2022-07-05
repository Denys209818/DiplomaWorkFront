import React from "react";
import { RouteObjectType } from "./types";

const Main = React.lazy(() => import("../components/Default/Main/Main"));
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const Register = React.lazy(() => import("../components/Auth/Register/Register"));
const News = React.lazy(() => import("../components/Default/News/Blog"));
const Groups = React.lazy(() => import("../components/Default/Groups"));

const ProfileMain = React.lazy(() => import("../components/Profile/Main"));
const CreateGroup = React.lazy(() => import("../components/Profile/CreateGroup"));
const SearchFriends = React.lazy(() => import("../components/Profile/SearchFriends"));

export const DefaultRoutes : Array<RouteObjectType>  = 
[
    {path: '/groups', element:Groups},
    {path: '/news', element:News },
    {path: '/', element: Main}
];

export const LoginRoutes : Array<RouteObjectType> = [
    {path: '/auth/login', element: Login},
    {path: '/auth/register', element: Register}
];


export const ProfileRoutes : Array<RouteObjectType> = [
    {path: '/profile/searchFriends', element: SearchFriends},
    {path: '/profile/createGroup', element: CreateGroup},
    {path: '/profile', element: ProfileMain}
];

