import React, { useEffect, useState } from "react";
import "./SidebarRoom.css";
import * as actionCreators from "../../Store/ActionCreators/index";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import db from "../../Firebase/Firebase";
import * as timeago from "timeago.js";
const SidebarRoom = ({ id, data, setID }) => {
  const [chatinfo, setchatinfo] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setchatinfo(
          snapshot.docs.map((ele) => {
            return {
              id: ele.id,
              data: ele.data(),
            };
          })
        );
      });
  }, [id]);
  return (
    <div
      onClick={() => {
        setID(id, data.channelName);
      }}
      className="sidebarroom"
    >
      <Avatar src={chatinfo.length>0 ?chatinfo[0].data.userImg:""} />
      <div className="sidebarroom__info">
        <h2>{data.channelName}</h2>
        {chatinfo.length > 0 ? (
          <p>
            {chatinfo[0].data.content < 24
              ? chatinfo[0].data.content
              : chatinfo[0].data.content.slice(0, 21) + "..."}
          </p>
        ) : null}
        {chatinfo.length > 0 &&
        chatinfo[0].data &&
        chatinfo[0].data.timeStamp ? (
          <small>
            {timeago.format(new Date(chatinfo[0].data.timeStamp.toDate()))}
          </small>
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setID: (id, roomName) => {
      dispatch(actionCreators.setId(id, roomName));
    },
  };
};

export default connect(null, mapDispatchToProps)(SidebarRoom);
