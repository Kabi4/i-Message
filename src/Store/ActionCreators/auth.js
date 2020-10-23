import * as actionTypes from "../actionTypes";
import { auth, provider } from "./../../Firebase/Firebase";

const authfailed = (err)=>{
    return{
        type: actionTypes.LOGINUSERFAILED,
        err
    }
}

const authsuccess = (user)=>{
    return{
        type: actionTypes.LOGINUSERSUCCESS,
        user
    }
}

export const startAuthenticate = ()=>{
    return dispatch=>{
        auth.signInWithPopup(provider)
        .then(user=>{
            dispatch(authsuccess(user.user));
        })
        .catch(err=>{
            dispatch(authfailed(err.message));
        })
    }
};

export const logout = () =>{
    return{
        type: actionTypes.LOGOUTUSER
    }
}