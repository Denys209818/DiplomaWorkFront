

export interface IEditPost {
    title: string,
    tags: string
}

export interface IPostDataReturned {
    id: Number
    title: string,
    description: string,
    images: Array<string>,
    tags: string
    userId: Number
    groupId: Number
}

export interface IEditPostModal {
    title: string,
    text: string,
    tags: string,
    images: Array<IEditImage>,
    publicationId: Number
}

export interface IEditImage {
    image: string
}

export interface IEditDynamicImage {
    image: string
    postId: Number
}