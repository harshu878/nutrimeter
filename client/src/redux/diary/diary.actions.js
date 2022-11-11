import { ERROR_STATE, GET_FOOD_PRODUCT_LIST, LOADING_STATE, SUCCESS_STATE } from "./diary.types";
import axios from 'axios'


export const diaryItemsLoading = () => ({ type: LOADING_STATE })
export const diaryItemsSuccess = () => ({ type: SUCCESS_STATE })
export const diaryItemsError = () => ({ type: ERROR_STATE })

export const getfoodProducts = () => async (dispatch) => {
    dispatch(diaryItemsLoading());
    try {
        let res = await axios.get('http://localhost:8080/userprofile/getitems', {
            headers: {
                token: 'anmol@gmail.com_#_636b637ceffb818fa221edff_#_123456'
            }
        })
        dispatch({ type: GET_FOOD_PRODUCT_LIST, payload: res.data })
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}