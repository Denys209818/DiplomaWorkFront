import axios from "axios";

const createAxios = axios.create({
    baseURL: 'http://localhost:5053',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default createAxios;