import React, { Component } from 'react';
import Image from '../../Assets/Images/office.jpg';
const axios = require('axios');

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          username:"",
          password:"",
          token: "",
          valid: "",
          errorMessage: "",
          currentUser:""
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    login(){
        let username = this.state.username;
        let password = this.state.password;
        axios({
            method : 'post',
            url : 'http://localhost:8082/login',
            data :{
              username : username,
              password : password
          },
          headers : {'content-type' : "application/json" }
          }).then(res => {
            this.setState({ token : res.data.token, valid : res.data.s, currentUser: res.data.mail })
            if(this.state.valid === "valid"){
                localStorage.setItem( "loginMail",JSON.stringify({"token":this.state.token, "valid":this.state.valid, "currentUser": this.state.currentUser}))
                window.location.href = '/layout'
            }
            else{
                this.setState({ errorMessage : "Incorrect Mail or Password" })
            }
           });
      }
    render() { 
        return ( 
            <div className="center-div">
                <div className="div1">
                    <img className="image-align" src={Image} alt="snapoff" />
                </div>
                <div className="div2">
                    <h1 className="intro-header alignment">Login to your app</h1>
                    <span className="intro-subheader subheaders alignment">To make a workspace from scratch, please confirm your email address.</span>
                    <div className="error">{this.state.errorMessage}</div>
                    <div className="intro-data subheaders alignment">
                        User Name
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="username" placeholder="Enter your user name" autoComplete="off" value={this.state.username} onChange={(event)=>{this.inputs(event)}} />
                    </div>
                    <div className="intro-data subheaders alignment">
                        Password
                    </div>
                    <div className="alignment">
                        <input type="password" className="inputdata" name="password" placeholder="Enter your password" value={this.state.password} onChange={(event)=>{this.inputs(event)}} />
                    </div>
                    <div className="forget-pswd">Forgot Password?</div>
                    <button onClick={() => this.login()} type="button" className="submit-data alignment">Sign In</button>
                </div>
            </div>
         );
    }
}
 
export default Login;