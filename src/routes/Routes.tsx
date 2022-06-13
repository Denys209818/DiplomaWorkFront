import React from "react";
import { RouteObjectType } from "./types";

const Main = React.lazy(() => import("../components/Default/Main"));
const Login = React.lazy(() => import("../components/Default/Login"));


export const DefaultRoutes : Array<RouteObjectType>  = 
[
    {path: '/', element: Main},
    {path: '/login', element: Login}
];


