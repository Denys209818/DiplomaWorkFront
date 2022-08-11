
export enum IUserTypes {
    LOGIN_USER = "LOGIN_USER",
    REGISTER_USER="REGISTER_USER"
}

export interface IUser {
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    id: number
}


export interface LoginUserAction {
    type: IUserTypes.LOGIN_USER,
    payload: IUser
}

export interface RegisterUserAction {
    type: IUserTypes.REGISTER_USER,
    payload: IUser
}


export type UserActions = LoginUserAction | RegisterUserAction;