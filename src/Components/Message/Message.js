import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import * as timeago from "timeago.js";
const Message = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={props.data.uid ===props.uid? "message__sender" : "message"}
    >
      <Avatar className="message__phto" src={props.data.userImg} />
      <p>{props.data.content}</p>
      <small>{timeago.format(new Date(props.data.timeStamp.toDate()))}</small>
    </div>
  );
});

export default Message;
