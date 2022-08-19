import { ILoginModel, IRegisterModel, ReturnedData } from "../actions/types/AuthTypes";
import createAxios from "./createAxios";



class AxiosService {
    login = (data: ILoginModel) => {
        return createAxios.post<ReturnedData>("/api/account/login", data);
    }

    register = (data: IRegisterModel) => {
        return createAxios.post<ReturnedData>("/api/account/register", data);
    }
}

export default new AxiosService();