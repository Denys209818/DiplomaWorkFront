
export enum GROUP_TYPES {
    SET_GROUPS="SET_GROUPS",
    ADD_GROUP="ADD_GROUP",
    EDIT_GROUP="EDIT_GROUP",
    DELETE_GROUP="DELETE_GROUP",
    DELETE_USERGROUP="DELETE_USERGROUP"
}

export interface IGroupShort {
    id: number,
    title: string,
    meta: string,
    description:string,
    userId: number,
    image: string, 
    tags: string
}

export interface EditGroup {
    type: GROUP_TYPES.EDIT_GROUP,
    payload: IGroupShort
}

export interface SetGroupsShort {
    type: GROUP_TYPES.SET_GROUPS,
    payload: Array<IGroupShort>
}

export interface DeleteGroup {
    type: GROUP_TYPES.DELETE_GROUP,
    payload: Number
}


export interface AddGroupItem {
    type: GROUP_TYPES.ADD_GROUP,
    payload: ReturnedGroupData
}

export type GroupActions = SetGroupsShort | AddGroupItem |EditGroup | DeleteGroup;

export interface IPublication {
    id:number,
    title: string,
    description: string,
    images: Array<string>,
    isLiked: boolean
}

export interface IGroupData {
    id: number,
    title: string,
    meta: string,
    descrption: string,
    image: string,
    userId: number,
    tags: string
}

// Custom

export interface RequestGroupById {
    id: number
}

export interface RequestGroupByName {
    name: string
}

export interface ReturnedGroupData {
    id: number,
    title: string,
    meta: string,
    description: string,
    image: string,
    tags: string

}

export interface IDelUserGroup {
    userId: number,
    groupId: number
}

export interface ILikePost {
    liked: boolean,
    postId: Number
}