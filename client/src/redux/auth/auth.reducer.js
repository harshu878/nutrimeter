
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS, AUTH_SIGN_UP_ERROR } from "./auth.types";

const userToken = localStorage.getItem('userToken') || ''
export const authInitalState = {
  loading: false,
  data: {
    token: userToken,
    isAuthenticated: userToken !== '' ? true : false,
  },
  error: false,
  bool: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {

  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true
      }
    }

    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem('userToken', payload.token)
      return {
        ...state,
        loading: false,
        data: {
          token: payload.token,
          isAuthenticated: true
        },
        error: false,
        bool: false
      }
    }
    case AUTH_SIGN_UP_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case AUTH_SIGN_UP_SUCCESS: {
      console.log(payload)
      return {
        ...state,
        loading: false,
        data: {
          token: payload.token,
          isAuthenticated: false
        },
        error: false,
        bool: true
      }
    }
    case AUTH_SIGN_UP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem('userToken')
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: false
        },
        error: false
      }
    }
    default: {
      return state;
    }

  }



};


//HERE HERE

// import {
// 	REGISTER_SUCCESS,
// 	REGISTER_FAIL,
// 	USER_LOADED,
// 	AUTH_ERROR,
// 	LOGIN_SUCCESS,
// 	LOGIN_FAIL,
// 	LOGOUT,
// } from "./auth.types";

// const initialState = {
// 	token: localStorage.getItem("token"),
// 	isAuthenticated: null,
// 	loading: true,
// 	user: null,
// };

// export const authReducer = (state = initialState, action)=> {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case USER_LOADED:
// 			return {
// 				...state,
// 				isAuthenticated: true,
// 				loading: false,
// 				user: payload,
// 			};
// 		case REGISTER_SUCCESS:
// 		case LOGIN_SUCCESS:
// 			localStorage.setItem("token", payload.token);
// 			return {
// 				...state,
// 				...payload,
// 				isAuthenticated: true,
// 				loading: false,
// 			};
// 		case REGISTER_FAIL:
// 		case AUTH_ERROR:
// 		case LOGIN_FAIL:
// 		case LOGOUT:
// 			localStorage.removeItem("token");
// 			return {
// 				...state,
// 				token: null,
// 				isAuthenticated: false,
// 				loading: false,
// 			};
// 		default:
// 			return state;
// 	}
// }