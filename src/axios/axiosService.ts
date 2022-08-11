import createAxios from "./createAxios";



class AxiosService {
    login = () => {
        createAxios.post("/api/account/login");
    }

    register = () => {
        createAxios.post("/api/account/register");
    }
}

export default new AxiosService();