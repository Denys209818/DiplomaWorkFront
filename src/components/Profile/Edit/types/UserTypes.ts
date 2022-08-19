
export interface IUserEdit {
    firstName: string,
    secondName: string,
    phone: string,
    oldPassword: string,
    password: string,
    confirmPassword: string
}

export interface IUserFull {
    email: string,
    firstName: string,
    secondName: string,
    phoneNumber: string,
    oldPassword: string,
    password: string,
    confirmPassword: string
}

export interface IEditImage {
    email: string,
    imageBase64: string
}