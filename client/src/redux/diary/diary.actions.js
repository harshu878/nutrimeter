import { ERROR_STATE, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_FOOD_PRODUCT_LIST, LOADING_STATE, SUCCESS_STATE } from "./diary.types";
import axios from 'axios'

const token = localStorage.getItem('userToken')

export const diaryItemsLoading = () => ({ type: LOADING_STATE })
export const diaryItemsSuccess = () => ({ type: SUCCESS_STATE })
export const diaryItemsError = () => ({ type: ERROR_STATE })


export const getfoodProducts = () => async (dispatch) => {
    dispatch(diaryItemsLoading());
    try {
        let res = await axios.get('https://nutrimeter-server.onrender.com/userprofile/getitems', {
            headers: {
                token
            }
        })
        dispatch({ type: GET_FOOD_PRODUCT_LIST, payload: res.data })
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}


export const getAllProductToDisplay = (query) => async (dispatch) => {
    dispatch(diaryItemsLoading())
    try {
        let res = await axios.get(`https://nutrimeter-server.onrender.com/foodProducts?q=${query}`);
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}

export const getAllCategories = () => async (dispatch) => {
    dispatch(diaryItemsLoading());
    try {
        let res = await axios('https://nutrimeter-server.onrender.com/foodProducts/allcategories');
        dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}


export const addNewProduct = (body) => async (dispatch) => {
    dispatch(diaryItemsLoading())
    try {
        let res = await axios.post('https://nutrimeter-server.onrender.com/userprofile/additem', body, {
            headers: {
                token
            }
        });
        dispatch(getfoodProducts())
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}

export const deleteItem = (id) => async (dispatch) => {
    dispatch(diaryItemsLoading())
    try {
        let res = await axios.delete('https://nutrimeter-server.onrender.com/userprofile/' + id, {
            headers: {
                token
            }
        })
        dispatch(getfoodProducts())
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}

