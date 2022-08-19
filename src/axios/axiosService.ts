
import { ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";

import createAxios from "./createAxios";



class AxiosService {

    login = (data: ILoginModel) => {
        return createAxios.post<ReturnedData>("/api/account/login", data);
    }

    register = () => {
        return createAxios.post("/api/account/register");
    }

    editUser = (user: IUserFull) => {
        return createAxios.post("/api/account/update", user);
    }

    editImage = (image: IEditImage) => {
        return createAxios.post("/api/account/changeimage", image);

    login = () => {
        createAxios.post("/api/account/login");
    }

    register = () => {
        createAxios.post("/api/account/register");
    }
}

export default new AxiosService();