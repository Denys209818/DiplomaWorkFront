import axiosService from "../../axios/axiosService";
import { ImageActions, IMAGE_TYPES } from "./types/imageTypes";

const initialState: Array<string> = [];


const imageReducer = (state = initialState, action: ImageActions) => {
    switch (action.type) {
        case IMAGE_TYPES.ADD_IMAGE: {
            return [...state, action.payload];
        }
        case IMAGE_TYPES.DEL_IMAGE: {
            return [...state.filter(x => x != action.payload)];
        }
        case IMAGE_TYPES.CLEAR_IMAGE: {
            state && state.length > 0
            && state.forEach(async (val) => {
                (await axiosService.delPostImage({
                    image: val
                }))
            });
            return [];
        }
        default: {
            return state;
        }
    }
}

export default imageReducer;