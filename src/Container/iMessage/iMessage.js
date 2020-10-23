import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Chat from "../Chat/Chat";
import "./iMessage.css";
class IMessage extends Component {
    render() {
        return (
            <div className="imessage">
                <Sidebar/>
                <Chat/>
            </div>
        )
    }
};


export default IMessage;