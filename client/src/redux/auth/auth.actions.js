
import axios from "axios"

import {
    AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT,
    AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING,
    AUTH_SIGN_UP_SUCCESS
} from "./auth.types"



export const LoginApi = (creds) => async (dispatch) => {
    dispatch({
        type: AUTH_SIGN_IN_LOADING
    })
    try {
        let res = await axios.post("https://nutrimeter-server.onrender.com/user/auth/login", creds)
        dispatch({
            type: AUTH_SIGN_IN_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: AUTH_SIGN_IN_ERROR

        })
    }

}


export const SignupApi = (creds) => async (dispatch) => {

    console.log(creds)
    dispatch({
        type: AUTH_SIGN_UP_LOADING
    })
    try {
        let res = await axios.post("https://nutrimeter-server.onrender.com/user/auth/register", creds)

        dispatch({
            type: AUTH_SIGN_UP_SUCCESS,
            payload: res.data
        })



    } catch (error) {

        dispatch({
            type: AUTH_SIGN_UP_ERROR

        })
    }

}

export const LogOut = () => async (dispatch) => {
    dispatch({
        type: AUTH_SIGN_OUT
    })
}

