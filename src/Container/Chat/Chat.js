import React, { Component } from 'react'
import Chatbody from '../../Components/Chatbody/Chatbody';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import Chatinput from '../../Components/Chatinput/Chatinput';
import "./Chat.css";
class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <ChatHeader/>
                <Chatbody/>
                <Chatinput/>
            </div>
        )
    }
}

export default Chat;