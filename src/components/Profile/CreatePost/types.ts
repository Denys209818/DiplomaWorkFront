export interface IGroupInfo {
    title: string
}

export interface ImageData {
    base64: string,
    uid: string,
    name: string
}

export interface ICreatePost {
    title: string,
    tags: string
}

export interface IGetTiny {
    contentDocument: IGetTinyBody
}

export interface IGetTinyBody {
    body: IGetTinyBodyInner
}

export interface IGetTinyBodyInner {
    innerHTML: string
}

export interface IAddPublication {
    title: string,
    tags: string,
    text: string,
    groupId: number,
    images: Array<IAddPublicationImage>
}

export interface IAddPublicationImage {
    image: string
}