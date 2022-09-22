import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";


export const token:string = localStorage.getItem("token") as string || new Cookies().get("token");


const createAxios = axios.create({
    baseURL: 'http://localhost:5053',
    headers: {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    }
})

export default createAxios;