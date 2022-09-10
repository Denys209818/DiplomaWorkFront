
import axios from "axios";
import { IRegisterModel, ILoginModel, ReturnedData } from "../actions/types/AuthTypes";
import { IFriendAdd, IFriendDelete } from "../components/Profile/Components/SearchFriendsUI/types/SelectTypes";
import { IDelImageRequest, ISendImage } from "../components/Profile/Components/SelectImage/types/SelectTypes";
import { IGroupCreate, IGroupForm } from "../components/Profile/CreateGroup/types";
import { IAddPublication } from "../components/Profile/CreatePost/types";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";
import { RequestFriendId } from "../redux/reducers/types/friendTypes";

import { RequestGroupById, RequestGroupByName } from "../redux/reducers/types/groupsTypes";

import createAxios from "./createAxios";



class AxiosService {
    login = (data: ILoginModel) => {
        return createAxios.post<ReturnedData>("/api/account/login", data);
    }

    register = (data: IRegisterModel) => {
        return createAxios.post<ReturnedData>("/api/account/register", data);
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

    getFriend = (id: RequestFriendId) => {
        return createAxios.post("/api/friend/getbyid", id);
    }

    addFriend = (friendId: IFriendAdd) => {
        return createAxios.post("/api/friend/add",friendId);
    }

    deleteFriend = (friendId: IFriendDelete) => {
        return createAxios.post("/api/friend/delete",friendId);
    }
}

export default new AxiosService();