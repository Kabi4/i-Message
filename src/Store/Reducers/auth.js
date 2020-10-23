import * as actionTypes from "../actionTypes";

const initialState = {
    user: null,
    err: null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOGINUSERFAILED:
            return{
                ...state,
                err: action.err
            }
        case actionTypes.LOGINUSERSUCCESS:
            return{
                ...state,
                err: null,
                user: action.user
            }
        case actionTypes.LOGOUTUSER:
            return{
                ...state,
                err: null,
                user: null
            }
        default:
            return state
    }
}

export default authReducer;