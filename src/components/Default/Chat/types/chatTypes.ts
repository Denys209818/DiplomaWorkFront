

export interface IChatHeader {
    title: string,
    image: string
}

export interface IChatMessage {
    text: string,
    date: string,
    image: string,
    isLeft: boolean
}

export interface IMessageSend {
    groupId: Number,
    message: string,
    dateCreated: Date
}

export interface IMessageReturned {
    image: string,
    text: string,
    date: string
}

