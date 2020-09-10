import React, { Component } from 'react';
import Image from '../../Assets/Images/office.jpg';
const axios = require('axios');

class Mail extends Component {
    constructor(props){
        super(props);
        this.state={
          code1:"",
          code2:"",
          code3:"",
          code4:"",
          code5:"",
          code6:"",
          otp:"",
          errorMessage:""
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    confirmCode(){
        let userCode1 = this.state.code1;
        let userCode2 = this.state.code2;
        let userCode3 = this.state.code3;
        let userCode4 = this.state.code4;
        let userCode5 = this.state.code5;
        let userCode6 = this.state.code6;
        let code = userCode1+userCode2+userCode3+userCode4+userCode5+userCode6
        axios({
            method : 'post',
            url : 'http://localhost:8082/code',
            data :{
              code: code
          },
          headers : {'content-type' : "application/json" }
          }).then(res => {
            this.setState({ otp:res.data.otp })
            if(this.state.otp === true){
                window.location.href="/setup"
            }
            else{
                this.setState({ errorMessage : "Incorrect OTP" })
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
                    <h1 className="intro-header alignment">We've sent you a mail!</h1>
                    <span className="intro-subheader subheaders alignment">To make a workspace from scratch, please confirm your email address.</span>
                    <div className="error">{this.state.errorMessage}</div>
                    <div className="intro-data subheaders alignment">
                        Enter your verification code
                    </div>
                    <div className="code-align">
                        <input className="code" type="text" name="code1" value={this.state.code1} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                        <input className="code" type="text" name="code2" value={this.state.code2} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                        <input className="code" type="text" name="code3" value={this.state.code3} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                        <input className="code" type="text" name="code4" value={this.state.code4} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                        <input className="code" type="text" name="code5" value={this.state.code5} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                        <input className="code" type="text" name="code6" value={this.state.code6} onChange={(event)=>{this.inputs(event)}} maxLength='1' />
                    </div>
                    <button onClick={() => this.confirmCode()} className="submit-data alignment" type="button">Next</button>
                </div>
            </div>
         );
    }
}
 
export default Mail;