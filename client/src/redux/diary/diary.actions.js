import { ERROR_STATE, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_FOOD_PRODUCT_LIST, LOADING_STATE, SUCCESS_STATE } from "./diary.types";
import axios from 'axios'

export const diaryItemsLoading = () => ({ type: LOADING_STATE })
export const diaryItemsSuccess = () => ({ type: SUCCESS_STATE })
export const diaryItemsError = () => ({ type: ERROR_STATE })

const userToken = localStorage.getItem('userToken')

export const getfoodProducts = (token) => async (dispatch) => {
    dispatch(diaryItemsLoading());
    try {
        let res = await axios.get('https://nutrimeter-server.onrender.com/userprofile/getitems', {
            headers: {
                token
            }
        })
        dispatch({ type: GET_FOOD_PRODUCT_LIST, payload: res.data })
    } catch (error) {
        console.log(error);
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


export const addNewProduct = (body, token) => async (dispatch) => {
    dispatch(diaryItemsLoading())
    try {
        let res = await axios.post('https://nutrimeter-server.onrender.com/userprofile/additem', body, {
            headers: {
                token: localStorage.getItem('userToken')
            }
        });
        dispatch(getfoodProducts(token))
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}

export const deleteItem = (id, token) => async (dispatch) => {
    dispatch(diaryItemsLoading())
    try {
        await axios.delete('https://nutrimeter-server.onrender.com/userprofile/' + id, {
            headers: {
                token: userToken
            }
        })
        dispatch(getfoodProducts(token))
    } catch (error) {
        dispatch(diaryItemsError())
    } finally {
        dispatch(diaryItemsSuccess())
    }
}

