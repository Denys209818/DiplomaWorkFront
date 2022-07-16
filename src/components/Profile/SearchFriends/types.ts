export interface DataType {
    key: string;
    name: string;
    lastPosts: string;
    url: string
  }

export type DataIndex = keyof DataType;