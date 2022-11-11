import { ERROR_STATE, GET_FOOD_PRODUCT_LIST, LOADING_STATE, SUCCESS_STATE } from "./diary.types"

const initialState = {
    loading: false,
    error: false,
    foodItemsInList: []
}

export const diaryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_FOOD_PRODUCT_LIST: {
            return {
                ...state,
                foodItemsInList: payload,
            }
        }
        case LOADING_STATE: {
            return {
                ...state,
                loading: true,
            }
        }
        case SUCCESS_STATE: {
            return {
                ...state,
                loading: false,
            }
        }
        case ERROR_STATE: {
            return {
                ...state,
                error: true,
            }
        }
        default:
            return state;
    }
}