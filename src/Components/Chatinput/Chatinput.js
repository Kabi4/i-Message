import React, { useState } from 'react'
import MicNoneIcon from "@material-ui/icons/MicNone";
import {Button,IconButton} from "@material-ui/core";
import {connect} from "react-redux";
import "./Chatinput.css";
import db from '../../Firebase/Firebase';
import firebase from "firebase";
const Chatinput = ({user,id}) => {
    const [iMessage,setiMessage] = useState("");

    const sendMessage = (e)=>{
        e.preventDefault();
        db.collection("chats")
        .doc(id)
        .collection("messages")
        .add({
            uid: user.uid,
            userImg: user.photoURL,
            content: iMessage,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email
        })
        .then(res=>{
            setiMessage("");
        })
        .catch(err=>{
            alert(err.messages);
            setiMessage("");
        })
    }
    return (
        <div className="chat__input">
            <form onSubmit={(e)=>{sendMessage(e)}}>
                <input onKeyDown={
                    (e)=>{
                        if(e.key==="Enter"){
                            e.preventDefault();
                            sendMessage(e);
                        }
                    }
                } value={iMessage} onChange={(e)=>{setiMessage(e.target.value)}} placeholder="Type a iMessage" type="text" />
                <Button type="submit" onClick={(e)=>{sendMessage(e)}} >Send</Button>
            </form>
            <IconButton>
            <MicNoneIcon  className="chat__input__mic" />
            </IconButton>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user: state.auth.user,
        id: state.chat.id
    }
}

export default connect(mapStateToProps,null)(Chatinput)
