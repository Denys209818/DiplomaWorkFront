

export interface ILoginModel {
    email: string,
    password: string
}

export interface ReturnedData {
    token: string
}

export interface ErrorServer {
    errors: Errors
}

export interface Errors {
    email: Array<string>,
    password: Array<string>
}