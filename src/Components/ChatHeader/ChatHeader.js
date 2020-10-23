import React from 'react';
import "./ChatHeader.css";
import {connect} from "react-redux";
const ChatHeader = ({roomName}) => {
    return (
        <div className="chat__header">
            <h4>To: <span className="chat__header__channel">{roomName}</span></h4>
            <strong>Details</strong>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        roomName: state.chat.roomName
    }
}

export default connect(mapStateToProps,null)(ChatHeader);
