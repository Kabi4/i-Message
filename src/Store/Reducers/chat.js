import * as actionTypes from "../actionTypes";

const initialState = {
    id: null,
    roomName: ""
};

const chatReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETCHATID:
            return{
                ...state,
                id: action.id,
                roomName: action.chatName
            }
        default:
            return state;
    }
}

export default chatReducer;