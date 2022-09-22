export interface DataType {
    key: string;
    fullName: string;
    email: string;
    image: string;
    isFriend: boolean
  }


export interface FriendData {
  fullName: string;
  email: string;
  image: string;
  isFriend: boolean
}

export type DataIndex = keyof DataType;