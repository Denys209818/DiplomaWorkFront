

export interface IGetGroup {
    id: Number,
    title: string,
    description: string,
    image: string
}

export interface IUserSubscribersPosts {
    id: number,
    title: string,
    description: string,
    tags: string,
    images: Array<string>,
    userEmail: string,
    userName: string,
    userImage: string,
    countLikes: number,
    groupName: string,
    groupImage: string
}

export interface IUserMainInfo {
    id: number
    groupName: string
    groupImage: string
    countLikes: number,
    title: string,
    description: string
    images: Array<string>
}