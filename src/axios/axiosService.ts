<<<<<<< HEAD
import { ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import { IDelImageRequest, ISendImage } from "../components/Profile/Components/SelectImage/types/SelectTypes";
import { IGroupCreate, IGroupForm } from "../components/Profile/CreateGroup/types";
import { IAddPublication } from "../components/Profile/CreatePost/types";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";
import { RequestGroupById, RequestGroupByName } from "../redux/reducers/types/groupsTypes";
=======

import { ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";

>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
import createAxios from "./createAxios";



class AxiosService {
<<<<<<< HEAD
=======

>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
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
<<<<<<< HEAD
    }

    createGroup = (data: IGroupCreate) => {
        return createAxios.post("/api/group/create", data);
    }

    getGroups = (id: RequestGroupById) => {
        return createAxios.post("/api/group/getbyid", id);
    }

    getGroupsByName = (name: RequestGroupByName) => {
        return createAxios.post("/api/group/getbyname", name);
    }

    addPostImage = (image: ISendImage) => {
        return createAxios.post("/api/publication/publicationimage", image);
    }

    delPostImage = (image: IDelImageRequest) => {
        return createAxios.post("/api/publication/deletepublicationimage", image)
    }

    addPublication = (publication: IAddPublication) => {
        return createAxios.post("/api/publication/create", publication);
=======

    login = () => {
        createAxios.post("/api/account/login");
    }

    register = () => {
        createAxios.post("/api/account/register");
>>>>>>> 9d4fda03a9922541676631679a40c60c776f8eb8
    }
}

export default new AxiosService();