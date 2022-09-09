
export enum IUserTypes {
    LOGIN_USER = "LOGIN_USER",
    REGISTER_USER="REGISTER_USER",
    CLEAR_USER="CLEAR_USER"
}

export interface IUser {
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    id: number,
    image: string
}

export interface ServerUser {
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    id: number,
    image: string,
    roles: string|Array<string>
}


export interface LoginUserAction {
    type: IUserTypes.LOGIN_USER,
    payload: IUser
}

export interface RegisterUserAction {
    type: IUserTypes.REGISTER_USER,
    payload: IUser
}

export interface IClearUser {
    type: IUserTypes.CLEAR_USER
}

export type UserActions = LoginUserAction | RegisterUserAction | IClearUser;