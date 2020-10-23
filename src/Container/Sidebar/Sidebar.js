import React, { Component } from 'react'
import "./Sidebar.css";

import {Avatar,IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview"; 
import SidebarRooms from '../SidebarRooms/SidebarRooms';
import {connect} from "react-redux";
import * as actionCreators from "./../../Store/ActionCreators/index";
import db from '../../Firebase/Firebase';
class Sidebar extends Component {
    addChatRoom =()=>{
        const chatName = prompt("Please Enter Chatroom name:")
        db.collection("chats").add({
            channelName: chatName
        })
    } 
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar onClick={this.props.logout} src={this.props.user.photoURL} className="sidebar__avatar"/>
                    <div className="siderbar__header__input">
                        <SearchIcon/>
                        <input placeholder="Search in Chats" />
                    </div>
                    <IconButton onClick={this.addChatRoom}>
                        <RateReviewIcon />
                    </IconButton>
                </div>
                <SidebarRooms/>
            </div>
        )
    }
}

const mapStateToprops=(state)=>{
    return{
      user: state.auth.user
    }
};

const mapDisptachToprops=(dispatch)=>{
    return{
      logout: ()=>{dispatch(actionCreators.logout())}
    }
};

export default connect(mapStateToprops,mapDisptachToprops)(Sidebar);