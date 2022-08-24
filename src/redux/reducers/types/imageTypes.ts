export enum IMAGE_TYPES {
    ADD_IMAGE="ADD_IMAGE",
    DEL_IMAGE="DEL_IMAGE",
    CLEAR_IMAGE="CLEAR_IMAGE"
}

export interface IAddImage {
 type: IMAGE_TYPES.ADD_IMAGE,
 payload: string
}

export interface IDelImage {
    type: IMAGE_TYPES.DEL_IMAGE,
    payload: string
   }

   export interface IClearImage {
    type: IMAGE_TYPES.CLEAR_IMAGE,
   }

export type ImageActions = IAddImage | IDelImage | IClearImage;