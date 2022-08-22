
export enum GROUP_TYPES {
    SET_GROUPS="SET_GROUPS"
}

export interface IGroupShort {
    id: number,
    title: string
}

export interface SetGroupsShort {
    type: GROUP_TYPES.SET_GROUPS,
    payload: Array<IGroupShort>
}

export type GroupActions = SetGroupsShort;



// Custom

export interface RequestGroupById {
    id: number
}

export interface RequestGroupByName {
    name: string
}