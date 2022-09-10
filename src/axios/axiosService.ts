
import { ILoginModel, IUserDataCount, ReturnedData } from "../actions/types/AuthTypes";
import { IMessageReturned } from "../components/Default/Chat/types/chatTypes";

import { IEditDynamicImage, IEditPost, IEditPostModal, IPostDataReturned } from "../components/Default/Groups/CustomComponents/types/EditPostModalTypes";
import { IGroup, IGroupDataMain, IGroupDelete, IGroupInfo } from "../components/Default/Groups/types/groupTypes";

import { IDelImageRequest, ISendImage } from "../components/Profile/Components/SelectImage/types/SelectTypes";
import { IGroupCreate, IGroupForm } from "../components/Profile/CreateGroup/types";
import { IAddPublication } from "../components/Profile/CreatePost/types";
import { IEditImage, IUserEdit, IUserFull } from "../components/Profile/Edit/types/UserTypes";
import { IUserMainInfo, IUserSubscribersPosts } from "../components/Profile/types/IProfileTypes";

import { IDelUserGroup, IGroupData, ILikePost, IPublication, RequestGroupById, RequestGroupByName, ReturnedGroupData } from "../redux/reducers/types/groupsTypes";
import { ICreateMessage, IMessageRedux, IRetCreateMessage, IUserFriend, IUserMessage } from "../redux/reducers/types/messageTypes";


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

    getPostDataById = (id: Number) => {
        return createAxios.post<IPostDataReturned>("/api/publication/getpostdatabyid", id);
    }

    editPost = (edit: IEditPostModal) => {
        return createAxios.post("/api/publication/edit", edit);
    }

    editGroup = (edit: IGroupInfo) => {
        return createAxios.post<string>("/api/group/edit", edit);
    }

    editDynamicImage = (image: IEditDynamicImage) => {
        return createAxios.post("/api/publication/imagedynamicupdate", image);
    }

    deletePublication = (id: Number) => {
        return createAxios.post("/api/publication/delete",{
            postId: id
        });
    }

    deleteGroup = (groupId: IGroupDelete) => {
        return createAxios.post("/api/group/delete", groupId);
    }

    deleteUserGroup = (data: IDelUserGroup) => {
        return createAxios.post("/api/group/delusergroup", data);
    }

    likedPost = (data: ILikePost) => {
        return createAxios.post("/api/publication/likepost", data);
    }

    addMessage = (message: ICreateMessage) => {
        return createAxios.post<IRetCreateMessage>("/api/chat/add", message);
    }

    getMessages = (groupId: Number) => {
        return createAxios.get<Array<IMessageReturned>>(`/api/chat/getbygroupid?groupId=${groupId.toString()}`);
    }
    
    getFriends = () => {
        return createAxios.get<Array<IUserFriend>>("/api/account/friends");
    }

    getFriendsMessages = (friendUserId: number) => {
        return createAxios.get<Array<IUserMessage>>(`/api/chat/getbyfriendid?friendUserId=${friendUserId}`);

    }

    addFriendMessage = (message: any) => {
        return createAxios.post("/api/chat/addfriendmessage", message);
    }


    getUserData = () => {
        return createAxios.get<IUserDataCount>("/api/account/getuserdata");
    }

    getPostsByUserSubscribers = () => {
        return createAxios.get<Array<IUserSubscribersPosts>>("/api/publication/getpopularfromgroupbyuserid");
    }

    getPopularPosts = (items: number) => {
        return createAxios.get<Array<IUserMainInfo>>(`/api/publication/getpopularposts?items=${items}`);
    }

    getPopularGroups = (items: number) => {
        return createAxios.get<Array<IGroupDataMain>>(`/api/group/getpopulargroups?items=${items}`);
    }
}

export default new AxiosService();