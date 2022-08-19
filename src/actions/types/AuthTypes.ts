

export interface ILoginModel {
    email: string,
    password: string
}

export interface IRegisterModel {
    firstName: string,
    secondName: string,
    email: string,
    phone: string,
    password: string
}

export interface ReturnedData {
    token: string
}