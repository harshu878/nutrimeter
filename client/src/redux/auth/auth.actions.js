
import axios from "axios"

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from "./auth.types"



export const LoginApi = (creds) => async (dispatch) => {
    dispatch({
        type: AUTH_SIGN_IN_LOADING
    })
    try {

        let res = await axios.post("http://localhost:8080/user/auth/login", creds)


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


export const SignupApi=(creds)=>async(dispatch)=>{

	console.log(creds)
    dispatch ({
        type:AUTH_SIGN_UP_LOADING
    })
    try {      
        let res = await axios.post("http://localhost:8080/user/auth/register", creds)

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

export const LogOut =()=> async(dispatch)=>{
        dispatch({
            type: AUTH_SIGN_OUT
        })
}

//herehere


// import axios from "axios";

// import {
// 	REGISTER_SUCCESS,
// 	REGISTER_FAIL,
// 	USER_LOADED,
// 	AUTH_ERROR,
// 	LOGIN_SUCCESS,
// 	LOGIN_FAIL,
// 	LOGOUT,
// } from "./auth.types";
// import setAuthToken from "./setAuthToken";

// // Load User
// export const loadUser = () => async (dispatch) => {
// 	if (localStorage.token) {
// 		setAuthToken(localStorage.token);
// 	}

// 	try {
// 		const res = await axios.get("http://localhost:8080/user/auth/register");

// 		dispatch({
// 			type: USER_LOADED,
// 			payload: res.data,
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: AUTH_ERROR,
// 		});
// 	}
// };

// // Register User
// export const SignupApi =
// 	({ name, email, password }) =>
// 	async (dispatch) => {
// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};

// 		const body = JSON.stringify({ name, email, password });

		
// 			const res = await axios.post(
// 				"http://localhost:8080/user/auth/register",
// 				body,
// 				config
// 			);

// 			dispatch({
// 				type: REGISTER_SUCCESS,
// 				payload: res.data,
// 			});

// 			dispatch(loadUser());
		
// 	};

// // Login User
// export const login = (email, password) => async (dispatch) => {
// 	const config = {
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	};

// 	const body = JSON.stringify({ email, password });

// 	try {
// 		const res = await axios.post(
// 			"http://localhost:5000/users/auth",
// 			body,
// 			config
// 		);

// 		dispatch({
// 			type: LOGIN_SUCCESS,
// 			payload: res.data,
// 		});

// 		dispatch(loadUser());
// 	} catch (err) {
// 		const errors = err.response.data.errors;

// 		if (errors) {
// 			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
// 		}

// 		dispatch({
// 			type: LOGIN_FAIL,
// 		});
// 	}
// };

// // Logout / Clear Profile

// export const logout = () => (dispatch) => {
// 	dispatch({ type: LOGOUT });
// };

