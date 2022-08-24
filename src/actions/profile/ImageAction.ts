import { Dispatch } from "react";
import { IMAGE_TYPES } from "../../redux/reducers/types/imageTypes";


export const AddImageAction = (image: string) =>  (dispatch: Dispatch<any>) => {

    dispatch({
        type: IMAGE_TYPES.ADD_IMAGE,
        payload: image
    });
}


export const DelImageAction = (image: string) =>  (dispatch: Dispatch<any>) => {

    dispatch({
        type: IMAGE_TYPES.DEL_IMAGE,
        payload: image
    });
}

export const ClearImageAction = () =>  (dispatch: Dispatch<any>) => {

    dispatch({
        type: IMAGE_TYPES.CLEAR_IMAGE,
    });
}