

export interface IFriendData {
    image: string,
    name: String,
    description: String,
    isOnline: Boolean
}

export interface IFriendDataArray {
    friends: Array<IFriendData>
}