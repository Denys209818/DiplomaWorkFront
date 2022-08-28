
export enum GROUP_TYPES {
    SET_GROUPS="SET_GROUPS",
    ADD_GROUP="ADD_GROUP"
}

export interface IGroupShort {
    id: number,
    title: string
}

export interface SetGroupsShort {
    type: GROUP_TYPES.SET_GROUPS,
    payload: Array<IGroupShort>
}


export interface AddGroupItem {
    type: GROUP_TYPES.ADD_GROUP,
    payload: ReturnedGroupData
}

export type GroupActions = SetGroupsShort | AddGroupItem;

export interface IPublication {
    title: string,
    description: string,
    images: Array<string>
}

export interface IGroupData {
    id: number,
    title: string,
    meta: string,
    descrption: string,
    image: string
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