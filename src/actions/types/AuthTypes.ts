

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