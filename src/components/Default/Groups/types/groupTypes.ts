
export interface IGroup {
    id: number,
    title: string,
    description: string,
    image: string,
    userId: number,
    meta: string,
    tags: string
}

export interface IGroupInfo {
    groupId: number,
    title: string,
    meta: string
    description: string
    tags: string
    imageBase64: string
}

export interface IGroupDelete {
    groupId: number
}