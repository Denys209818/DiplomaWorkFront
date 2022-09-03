
import { ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import { IGroup } from "../components/Default/Groups/types/groupTypes";
import { IDelImageRequest, ISendImage } from "../components/Profile/Components/SelectImage/types/SelectTypes";
import { IGroupCreate, IGroupForm } from "../components/Profile/CreateGroup/types";
import { IAddPublication } from "../components/Profile/CreatePost/types";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";

import { IGroupData, IPublication, RequestGroupById, RequestGroupByName, ReturnedGroupData } from "../redux/reducers/types/groupsTypes";


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
    }

    getAllUserGroups = (id: Number) => {
        return createAxios.post<Array<IGroup>>("/api/group/getgroupsbyid", id); 
    }

    getAllPublicationsByGroupId = (groupId: Number) => {
        return createAxios.post<Array<IPublication>>("/api/publication/getpostbygroupid", groupId);
    } 

    getGroupDataById = (groupId: Number) => {
        return createAxios.post<IGroupData>("/api/group/getgroup", groupId);
    }

    searchGroupsByQuery = (query: string, page: number, userId: number) => {
        return createAxios.post<Array<ReturnedGroupData>>("/api/group/search", {
            param: query,
            page: page,
            userId: userId
        });
    }

    subscribeOnGroup = (groupId: number, userId: number) => {
        return createAxios.post("/api/group/subscribe", {
          groupId: groupId,
          userId: userId  
        });
    }
}

export default new AxiosService();