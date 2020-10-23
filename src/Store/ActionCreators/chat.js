import * as actionTypes from "../actionTypes";

export const setId = (id,chatName)=>{
    return{
        type: actionTypes.SETCHATID,
        id,
        chatName
    }
}