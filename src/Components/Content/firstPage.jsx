import React, { Component } from 'react';
import Image from '../../Assets/Images/office.jpg';
const axios = require('axios');

class Firstpage extends Component {
    constructor(props){
        super(props);
        this.state={
          email: "",
          errorMessage:"",
          isValid:true
        }
    }
    inputs(event){
        this.setState({[event.target.name] : event.target.value});
    }
    confirmEmail(){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(this.state.email)) {
          this.setState({ isValid : false })
          this.setState({  errorMessage : "Please enter valid email address." })
        }
        else{
        this.setState({ isValid : true })
        this.setState({  errorMessage : "" })
            let userMail = this.state.email;
            localStorage.setItem("usermail",userMail)
            axios({
                method : 'post',
                url : 'http://localhost:8082/email',
                data :{
                mail : userMail
            },
            headers : {'content-type' : "application/json" }
            })
            window.location.href='/mail';
        }
      }
    render() { 
        return ( 
            <div className="center-div">
                <div className="div1">
                    <img className="image-align" src={Image} alt="snapoff" />
                </div>
                <div className="div2">
                    <h1 className="intro-header alignment">Make Your Life Easy <br></br> With Intranet!</h1>
                    <span className="intro-subheader subheaders alignment">To make a workspace from scratch, please confirm your email address.</span>
                    <div className="intro-data subheaders alignment">
                        Email Address
                    </div>
                    <div className="alignment">
                        <input type="text" className="inputdata" name="email" id="email" placeholder="name@email.com" autoComplete="off" value={this.state.email} onChange={(event)=>{this.inputs(event)}} />
                    </div>
                    <div className="error">{this.state.errorMessage}</div>
                    <button onClick={() => this.confirmEmail()} className="submit-data alignment" type="button">Confirm Email</button>
                </div>
            </div>
         );
    }
}
 
export default Firstpage;