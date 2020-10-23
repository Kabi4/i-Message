import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import IMessage from './iMessage/iMessage';
import Login from './Login/Login';
class App extends Component {
  render() {
    if(this.props.err){
      alert(this.props.err);
    }
    return (
      <div className="app">
        {this.props.user?<IMessage/>:<Login/>}
      </div>
    );
  }
}

const mapStateToprops=(state)=>{
  return{
    user: state.auth.user,
    err: state.auth.err
  }
};

export default connect(mapStateToprops,null)(App);
//email
//displayName
//photoURL
//uid