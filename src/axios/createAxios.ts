import axios from "axios";
import { useEffect, useState } from "react";

export const token = localStorage.getItem("token");

const createAxios = axios.create({
    baseURL: 'http://localhost:5053',
    headers: {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    }
})

export default createAxios;