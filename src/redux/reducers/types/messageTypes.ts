
export enum MESSAGE_TYPES {
    ADD_MESSAGE="ADD_MESSAGE",
    SET_MESSAGES="SET_MESSAGES"
}

export interface IMessageRedux {
    text: string,
    date: Date,
    image: string,
    fullName?:string,
    userId?: number 
}

export interface IFriendMessageRedux {
    text: string,
    date: Date,
    image: string,
    fullName:string,
    chatId: string,
    userId: number
}

export interface IAddMessage {
    type:MESSAGE_TYPES.ADD_MESSAGE,
    payload: IMessageRedux
}

export interface ISetMessages {
    type:MESSAGE_TYPES.SET_MESSAGES,
    payload: Array<IMessageRedux>
}

export type MessageTypes = IAddMessage | ISetMessages;


//Custom types
export interface ICreateMessage {
    groupId: Number,
    message: string,
    dateCreated: Date
}

export interface IRetCreateMessage {
    isSended: boolean
}


// User Friend interfaces 
export interface IUserFriend {
    firstName: string,
    secondName: string,
    chatId: string,
    email: string,
    phone: string,
    image: string,
    id: number
}


export interface IUserContactCard {
    chatId: string,
    title: string,
    image: string,
    onClickUser: (chatId: string) => void
}

export interface ICreateUserMessage {
    chatId: string,
    message: string,
    dateCreated: Date,
    image: string,
    fullName: string,
    userId: number
}

export interface IUserMessage {
    message: string,
    date: Date,
    fullName: string,
    userId: number,
    image: string
}