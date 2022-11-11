
import axios from "axios"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types"



export const LoginApi=(creds)=>async(dispatch)=>{
    dispatch ({
        type:AUTH_SIGN_IN_LOADING
    })
    try {

        let res=await axios.post("https://reqres.in/api/login",creds)

        
        dispatch({
            type:AUTH_SIGN_IN_SUCCESS,
            payload:res.data
        })
       
    } catch (error) {
        dispatch({
            type:AUTH_SIGN_IN_ERROR
          
        })
    }

}

export const LogOut =()=>(dispatch)=>{
        dispatch({
            type:AUTH_SIGN_OUT
        })
}