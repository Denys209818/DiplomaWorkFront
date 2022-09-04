import axios from "axios";

const token = localStorage.getItem("token");

const createAxios = axios.create({
    baseURL: 'http://localhost:5053',
    headers: {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    }
})

export default createAxios;