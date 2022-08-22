export interface IGroupCreate {
    title: string,
    meta: string,
    tags: string,
    description: string,
    image: string,
    userId: number
}

export interface IGroupForm {
    title: string,
    meta: string,
    tags: string,
    description: string
}

export interface IGroupErrors {
    message: string
}

