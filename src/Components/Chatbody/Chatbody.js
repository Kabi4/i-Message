import React, { useEffect, useState } from "react";
import "./Chatbody.css";
import { connect } from "react-redux";
import Message from "../Message/Message";
import db from "../../Firebase/Firebase";
import FlipMove from "react-flip-move";
const Chatbody = ({ id,user }) => {
  const [messages, setMessages] = useState([]);
  //const [loading,setloading] = useState(false);
  //const [error,seterror] = useState(null);
  useEffect(() => {
    if (id) {
      db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((ele) => {
              return {
                id: ele.id,
                data: ele.data(),
              };
            })
          );
        });
    }
  }, [id]);
  return (
    <div className="chat__body">
      <FlipMove>
        {messages.map((ele) => {
          return ele.data.timeStamp ? (
            <Message key={ele.id} uid={user.uid} data={ele.data} />
          ) : null;
        })}
      </FlipMove>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.chat.id,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(Chatbody);
