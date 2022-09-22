import { IFriendData, IFriendDataArray } from "../../components/Profile/FriendsCard/types/friendsCardInterfaces"
import { IGetGroup, IUserSubscribersPosts } from "../../components/Profile/types/IProfileTypes"
import { IUserFriend } from "../../redux/reducers/types/messageTypes"


export interface ILoginModel {
    email: string,
    password: string
}

export interface IRegisterModel {
    firstName: string,
    secondName: string,
    phone: string,
    email: string,
    password: string
    confirmPassword: string
}

export interface ReturnedData {
    token: string
}

export interface GetUserInfo {
    image: string,
    fullName: string,
    email: string,
    groupsCount: number,
    postsCount: number,
    friendsCount: number,
    friends: Array<IUserFriend>,
    groups: Array<IGetGroup>,
    posts: Array<IUserSubscribersPosts>
}

export interface ErrorServer {
    errors: Errors
}

export interface Errors {
    fitstName: Array<string>,
    secondName: Array<string>,
    phone: Array<string>,
    email: Array<string>,
    password: Array<string>,
    confirmPassword: Array<string>
}

export interface IUserDataCount {
    groupsCount: Number,
    postsCount: Number,
    friendsCount: Number,
    password: Array<string>,
    passwordConfirmation: Array<string>
}


export interface ILoginGoogle {
    token: string,
    provider: string,
}

export interface ReturnedLoginGoogle {
    token: string,
    tempPassword:string
}