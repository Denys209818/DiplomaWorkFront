import { ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import createAxios from "./createAxios";



class AxiosService {
    login = (data: ILoginModel) => {
        return createAxios.post<ReturnedData>("/api/account/login", data);
    }

    register = () => {
        return createAxios.post("/api/account/register");
    }
}

export default new AxiosService();