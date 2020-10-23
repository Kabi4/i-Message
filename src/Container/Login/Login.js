import React, { Component } from 'react'
import * as actionCreators from "./../../Store/ActionCreators/index";
import {connect} from "react-redux";
import Logo from "../../Assets/Logo.png"
import {Button} from "@material-ui/core";
import "./Login.css";
class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__logo">
                    <img alt="logo" src={Logo} />
                    <h1>iMessage</h1>
                </div>
                <Button onClick={this.props.authenticate}>Sign In</Button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
       authenticate: ()=>{dispatch(actionCreators.startAuthenticate())}
    }
  };
  

export default connect(null,mapDispatchToProps)(Login);